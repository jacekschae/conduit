(ns cljs-time.format
  "### Utilities for parsing and unparsing DateTimes as Strings.

  Parsing and printing are controlled by formatters. You can either use one
  of the built in ISO 8601 and a single RFC 822 formatters or define your own, e.g.:

```clojure
(def built-in-formatter (formatters :basic-date-time))
(def custom-formatter (formatter \"yyyyMMdd\"))
```

  To see a list of available built-in formatters and an example of a date-time
  printed in their format:

```clojure
(show-formatters)
```

  Once you have a formatter, parsing and printing are strait-forward:

```clojure
=> (parse custom-formatter \"20100311\")
#<DateTime 2010-03-11T00:00:00.000Z>

=> (unparse custom-formatter (date-time 2010 10 3))
\"20101003\"
```

  By default the parse function always returns a DateTime instance with a UTC
  time zone, and the unparse function always represents a given DateTime
  instance in UTC."
  (:require
    [cljs-time.internal.core :as i]
    [cljs-time.internal.parse :as parse]
    [cljs-time.internal.unparse :as unparse]
    [cljs-time.core :as time]
    [clojure.set :refer [difference]]
    [goog.date.duration :as duration]))

(def months i/months)
(def days i/days)

(defn skip-timezone-formatter []
  {"Z" (constantly "") "ZZ" (constantly "")})

(defrecord Formatter [format-str overrides default-year timezone])

(defn formatter
  ([fmts] (formatter fmts time/utc))
  ([fmts dtz] (map->Formatter {:format-str fmts :timezone dtz})))

(defn formatter-local [fmts]
  (map->Formatter {:format-str fmts :overrides (skip-timezone-formatter)}))

(defn with-default-year
  "Return a copy of a formatter that uses the given default year."
  [f default-year]
  (assoc f :default-year default-year))

(defn not-implemented [sym]
  #(throw #js {:name :not-implemented
               :message (i/format "%s not implemented yet" (name sym))}))

(def ^{:doc "**Note: not all formatters have been implemented yet.**

  Map of ISO 8601 and a single RFC 822 formatters that can be used
  for parsing and, in most cases, printing.
  
  Note: due to current implementation limitations, timezone information
  cannot be kept. Although the correct offset will be applied to UTC
  time if supplied.

  The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
  time zone names cannot be parsed and a few more symbols are supported. All
  ASCII letters are reserved as pattern letters, which are defined as follows:

```
    Symbol  Meaning                      Presentation  Examples
    ------  -------                      ------------  -------
    G       era                          text          AD
    C       century of era (>=0)         number        20
    Y       year of era (>=0)            year          1996

    x       weekyear                     year          1996
    w       week of weekyear             number        27
    e       day of week                  number        2
    E       day of week                  text          Tuesday; Tue

    y       year                         year          1996
    D       day of year                  number        189
    M       month of year                month         July; Jul; 07
    d       day of month                 number        10

    a       halfday of day               text          PM
    K       hour of halfday (0~11)       number        0
    h       clockhour of halfday (1~12)  number        12

    H       hour of day (0~23)           number        0
    k       clockhour of day (1~24)      number        24
    m       minute of hour               number        30
    s       second of minute             number        55
    S       fraction of second           number        978
    a       meridiem                     text          am; pm
    A       meridiem                     text          AM; PM

    z       time zone                    text          Pacific Standard Time; PST
    Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles

    '       escape for text              delimiter
    ''      single quote                 literal       '

    cljs-time additions:
    ------  -------                      ------------  -------
    Symbol  Meaning                      Presentation  Examples
    ------  -------                      ------------  -------
    o       ordinal suffix               text          st nd rd th (E.G., 1st, 2nd, 3rd, 4th)
```

  The count of pattern letters determine the format.

  **Text:** If the number of pattern letters is 4 or more, the full form is used;
  otherwise a short or abbreviated form is used if available.

  **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
  amount.

  **Year:** Numeric presentation for year and weekyear fields are handled
  specially. For example, if the count of `y` is 2, the year will be displayed
  as the zero-based year of the century, which is two digits.

  **Month:** 3 or over, use text, otherwise use number.

  **Zone:** `Z` outputs offset without a colon, `ZZ` outputs the offset with a
  colon, `ZZZ` or more outputs the zone id.

  **Zone names:** Time zone names ('z') cannot be parsed.

  Any characters in the pattern that are not in the ranges of `['a'..'z']` and
  `['A'..'Z']` will be treated as quoted text. For instance, characters like `:`,
  `.`, `<space>`, `#` and `?` will appear in the resulting time text even they are
  not embraced within single quotes."}
  formatters
    {:basic-date (formatter "yyyyMMdd")
     :basic-date-time (formatter "yyyyMMdd'T'HHmmss.SSSZ")
     :basic-date-time-no-ms (formatter "yyyyMMdd'T'HHmmssZ")
     :basic-ordinal-date (formatter "yyyyDDD")
     :basic-ordinal-date-time (formatter "yyyyDDD'T'HHmmss.SSSZ")
     :basic-ordinal-date-time-no-ms (formatter "yyyyDDD'T'HHmmssZ")
     :basic-time (formatter "HHmmss.SSSZ")
     :basic-time-no-ms (formatter "HHmmssZ")
     :basic-t-time (formatter "'T'HHmmss.SSSZ")
     :basic-t-time-no-ms (formatter "'T'HHmmssZ")
     :basic-week-date (formatter "xxxx'W'wwe")
     :basic-week-date-time (formatter "xxxx'W'wwe'T'HHmmss.SSSZ")
     :basic-week-date-time-no-ms (formatter "xxxx'W'wwe'T'HHmmssZ")
     :date (formatter "yyyy-MM-dd")
     :date-element-parser (not-implemented 'dateElementParser)
     :date-hour (formatter "yyyy-MM-dd'T'HH")
     :date-hour-minute (formatter "yyyy-MM-dd'T'HH:mm")
     :date-hour-minute-second (formatter "yyyy-MM-dd'T'HH:mm:ss")
     :date-hour-minute-second-fraction (formatter "yyyy-MM-dd'T'HH:mm:ss.SSS")
     :date-hour-minute-second-ms (formatter "yyyy-MM-dd'T'HH:mm:ss.SSS")
     :date-opt-time (not-implemented 'dateOptionalTimeParser)
     :date-parser (not-implemented 'dateParser)
     :date-time (formatter "yyyy-MM-dd'T'HH:mm:ss.SSSZZ")
     :date-time-no-ms (formatter "yyyy-MM-dd'T'HH:mm:ssZZ")
     :date-time-parser (not-implemented 'dateTimeParser)
     :hour (formatter "HH")
     :hour-minute (formatter "HH:mm")
     :hour-minute-second (formatter "HH:mm:ss")
     :hour-minute-second-fraction (formatter "HH:mm:ss.SSS")
     :hour-minute-second-ms (formatter "HH:mm:ss.SSS")
     :local-date-opt-time (not-implemented 'localDateOptionalTimeParser)
     :local-date (not-implemented 'localDateParser)
     :local-time (not-implemented 'localTimeParser)
     :ordinal-date (formatter "yyyy-DDD")
     :ordinal-date-time (formatter "yyyy-DDD'T'HH:mm:ss.SSSZZ")
     :ordinal-date-time-no-ms (formatter "yyyy-DDD'T'HH:mm:ssZZ")
     :time (formatter "HH:mm:ss.SSSZZ")
     :time-element-parser (not-implemented 'timeElementParser)
     :time-no-ms (formatter "HH:mm:ssZZ")
     :time-parser (formatter 'timeParser)
     :t-time (formatter "'T'HH:mm:ss.SSSZZ")
     :t-time-no-ms (formatter "'T'HH:mm:ssZZ")
     :week-date (formatter "xxxx-'W'ww-e")
     :week-date-time (formatter "xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ")
     :week-date-time-no-ms (formatter "xxxx-'W'ww-e'T'HH:mm:ssZZ")
     :weekyear (formatter "xxxx")
     :weekyear-week (formatter "xxxx-'W'ww")
     :weekyear-week-day (formatter "xxxx-'W'ww-e")
     :year (formatter "yyyy")
     :year-month (formatter "yyyy-MM")
     :year-month-day (formatter "yyyy-MM-dd")
     :rfc822 (formatter "EEE, dd MMM yyyy HH:mm:ss Z")
     :mysql (formatter "yyyy-MM-dd HH:mm:ss")})

(def ^{:private true} parsers
  #{:date-element-parser :date-opt-time :date-parser :date-time-parser
    :local-date-opt-time :local-date :local-time :time-element-parser
    :time-parser})

(def ^{:private true} printers
  (difference (set (keys formatters)) parsers))

(defn parse
  "Returns a DateTime instance in the UTC time zone obtained by parsing the
  given string according to the given formatter."
  ([fmt s]
   (->> s
        (parse/parse (:format-str fmt))
        (parse/compile :goog.date.UtcDateTime fmt)))
  ([s]
   (first
    (for [f (vals formatters)
          :let [d (try (parse f s) (catch :default _))]
          :when d] d))))

(defn parse-local
  "Returns a local DateTime instance obtained by parsing the
  given string according to the given formatter."
  ([fmt s]
   (->> s
        (parse/parse (:format-str fmt))
        (parse/compile :goog.date.DateTime fmt)))
  ([s]
   (first
    (for [f (vals formatters)
          :let [d (try (parse-local f s) (catch js/Error _ nil))]
          :when d] d))))

(defn parse-local-date
  "Returns a local Date instance obtained by parsing the
  given string according to the given formatter."
  ([fmt s]
   (->> s
        (parse/parse (:format-str fmt))
        (parse/compile :goog.date.Date fmt)))
  ([s]
   (first
    (for [f (vals formatters)
          :let [d (try (parse-local-date f s) (catch js/Error _ nil))]
          :when d] d))))

(defn unparse
  "Returns a string representing the given DateTime instance in UTC and in the
form determined by the given formatter."
  [{:keys [format-str formatters]} dt]
  {:pre [(not (nil? dt)) (instance? goog.date.Date dt)]}
  (unparse/unparse format-str dt))

(defn unparse-local
  "Returns a string representing the given local DateTime instance in the
  form determined by the given formatter."
  [{:keys [format-str formatters] :as fmt} dt]
  {:pre [(not (nil? dt)) (instance? goog.date.DateTime dt)]}
  (unparse (assoc fmt :overrides (skip-timezone-formatter)) dt))

(defn unparse-local-date
  "Returns a string representing the given local Date instance in the form
  determined by the given formatter."
  [{:keys [format-str formatters] :as fmt} dt]
  {:pre [(not (nil? dt)) (instance? goog.date.Date dt)]}
  (unparse (assoc fmt :overrides (skip-timezone-formatter)) dt))

(defn show-formatters
  "Shows how a given DateTime, or by default the current time, would be
formatted with each of the available printing formatters."
  ([] (show-formatters (time/now)))
  ([dt]
     (doseq [p (sort printers)]
       (let [fmt (formatters p)]
         (print (i/format "%-40s%s\n" p (unparse fmt dt)))))))

(defprotocol Mappable
  (instant->map [instant] "Returns a map representation of the given instant.
                          It will contain the following keys: :years, :months,
                          :days, :hours, :minutes and :seconds."))

(defn unparse-duration
  "Accepts a Period or Interval and outputs an absolute duration time
  in form of \"1 day\", \"2 hours\", \"20 minutes\", \"2 days 1 hour
  15 minutes\" etc."
  [duration]
  (-> duration time/in-millis duration/format))

(defn- to-map [years months days hours minutes seconds millis]
  {:years years
   :months months
   :days days
   :hours hours
   :minutes minutes
   :seconds seconds
   :millis millis})

(extend-protocol Mappable
  goog.date.UtcDateTime
  (instant->map [dt]
    (to-map
      (.getYear dt)
      (inc (.getMonth dt))
      (.getDate dt)
      (.getHours dt)
      (.getMinutes dt)
      (.getSeconds dt)
      (.getMilliseconds dt)))

  time/Period
  (instant->map [m]
    (time/->period m))

  time/Interval
  (instant->map [m]
    (time/->period m))

  PersistentArrayMap
  (instant->map [m]
    (case (:type (meta m))
      :cljs-time.core/period m
      :cljs-time.core/interval (time/->period m))))
