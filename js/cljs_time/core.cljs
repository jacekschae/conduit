(ns cljs-time.core
  "### The core namespace for date-time operations in the cljs-time library.

  Create a DateTime instance with date-time (or a local DateTime instance with local-date-time),
  specifying the year, month, day, hour, minute, second, and millisecond:

```clojure
=> (date-time 1986 10 14 4 3 27 456)
#<DateTime 1986-10-14T04:03:27.456Z>

=> (local-date-time 1986 10 14 4 3 27 456)
#<DateTime 1986-10-14T04:03:27.456>

ss-significant fields can be omitted:

=> (date-time 1986 10 14)
#<DateTime 1986-10-14T00:00:00.000Z>

=> (local-date-time 1986 10 14)
#<DateTime 1986-10-14T00:00:00.000>
```

  Get the current time with (now) and the start of the Unix epoch with (epoch).

  Once you have a date-time, use accessors like hour and second to access the
  corresponding fields:

```clojure
=> (hour (date-time 1986 10 14 22))
22

=> (hour (local-date-time 1986 10 14 22))
22
```

  The functions after? and before? determine the relative position of two
  DateTime instances:

```clojure
=> (after? (date-time 1986 10) (date-time 1986 9))
true

=> (after? (local-date-time 1986 10) (local-date-time 1986 9))
true
```

  Often you will want to find a date some amount of time from a given date. For
  example, to find the time 1 month and 3 weeks from a given date-time:

```clojure
=> (plus (date-time 1986 10 14) (months 1) (weeks 3))
#<DateTime 1986-12-05T00:00:00.000Z>

=> (plus (local-date-time 1986 10 14) (months 1) (weeks 3))
#<DateTime 1986-12-05T00:00:00.000Z>
```

  An Interval is used to represent the span of time between two DateTime
  instances. Construct one using interval, then query them using within?,
  overlaps?, and abuts?

```clojure
=> (within? (interval (date-time 1986) (date-time 1990)) (date-time 1987))
true
```

  To find the amount of time encompased by an interval, use in-seconds and
  in-minutes:

```clojure
=> (in-minutes (interval (date-time 1986 10 2) (date-time 1986 10 14)))
17280
```

  Note that all functions in this namespace work with Joda objects or ints. If
  you need to print or parse date-times, see cljs-time.format. If you need to
  ceorce date-times to or from other types, see cljs-time.coerce."
  (:refer-clojure :exclude [= extend second])
  (:require
   [cljs-time.internal.core :as internal :refer [leap-year? format
                                                 get-week-year]]
   [clojure.string :as string]
   goog.date.Interval
   goog.date)
  (:import
   goog.date.Date
   goog.date.DateTime
   goog.date.UtcDateTime))

(defn deprecated [message]
  (println "DEPRECATION WARNING: " message))

(def ^{:doc "**Note:** Equality in goog.date.* (and also with plain
javascript dates) is not the same as in Joda/clj-time. Two date
objects representing the same instant in time in goog.date.* are not
equal.

If you need to test for equality use either `cljs-time.core/=`, or
optionally you can require the `cljs-time.extend` namespace which will
extend the goog.date.* datatypes, so that clojure.core/= works as
expected."}
  = cljs-time.internal.core/=)

(defprotocol DateTimeProtocol
  "Interface for various date time functions"
  (year [this] "Return the year component of the given date/time.")
  (month [this] "Return the month component of the given date/time.")
  (day [this] "Return the day of month component of the given date/time.")
  (day-of-week [this] "Return the day of week component of the given date/time. Monday is 1 and Sunday is 7")
  (hour [this] "Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.")
  (minute [this] "Return the minute of hour component of the given date/time.")
  (sec [this] "Return the second of minute component of the given date/time.")
  (second [this] "Return the second of minute component of the given date/time.")
  (milli [this] "Return the millisecond of second component of the given date/time.")
  (equal? [this that] "Returns true if DateTime 'this' is strictly equal to date/time 'that'.")
  (after? [this that] "Returns true if DateTime 'this' is strictly after date/time 'that'.")
  (before? [this that] "Returns true if DateTime 'this' is strictly before date/time 'that'.")
  (plus- [this period] "Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).")
  (minus- [this period] "Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).")
  (first-day-of-the-month- [this] "Returns the first day of the month")
  (last-day-of-the-month- [this] "Returns the last day of the month")
  (week-number-of-year [this] "Returns the week of the week based year of the given date/time")
  (week-year [this] "Returns the the week based year of the given date/time."))

(defprotocol InTimeUnitProtocol
  "Interface for in-<time unit> functions"
  (in-millis [this] "Return the time in milliseconds.")
  (in-seconds [this] "Return the time in seconds.")
  (in-minutes [this] "Return the time in minutes.")
  (in-hours [this] "Return the time in hours.")
  (in-days [this] "Return the time in days.")
  (in-weeks [this] "Return the time in weeks")
  (in-months [this] "Return the time in months")
  (in-years [this] "Return the time in years"))

(defrecord Interval [start end])

(defn interval
  "Returns an Interval representing the span between the two given DateTime.
  Note that intervals are closed on the left and open on the right."
  [start end]
  {:pre [(<= (.getTime start) (.getTime end))]}
  (->Interval start end))

(defrecord Period [years months weeks days hours minutes seconds millis])

(defn period
  ([period value]
   (map->Period {period value}))
  ([p1 v1 & kvs]
   (apply assoc (period p1 v1) kvs)))

(def period-fns
  {:millis (fn [date op value]
             (let [ms (op (.getTime date) value)]
               (doto date (.setTime ms))))
   :weeks  (fn [date op value]
             (let [days (op 0 (* value 7))]
               (doto date
                 (.add (goog.date.Interval. goog.date.Interval.DAYS days)))))})

(def periods
  {:seconds goog.date.Interval.SECONDS
   :minutes goog.date.Interval.MINUTES
   :hours   goog.date.Interval.HOURS
   :days    goog.date.Interval.DAYS
   :months  goog.date.Interval.MONTHS
   :years   goog.date.Interval.YEARS})

(defn period-fn [p]
  (fn [operator date]
    (let [date' (.clone date)
          ->goog-interval (fn [op interval value]
                            (when (and interval value)
                              (goog.date.Interval. interval (op 0 value))))]
      (doseq [[k v] p]
        (if-let [period (periods k)]
          (when-let [i (->goog-interval operator period v)] (.add date' i))
          (when-let [f (period-fns k)] (f date' operator v))))
      date')))

(defn- compare-local-dates [o other]
  (let [yo (.getYear o)
        yother (.getYear other)
        dayo (.getDayOfYear o)
        dayother (.getDayOfYear other)]
    (cond
      (not= yo yother) (- yo yother)
      (not= dayo dayother) (- dayo dayother)
      :else 0)))

(extend-protocol DateTimeProtocol
  goog.date.UtcDateTime
  (year [this] (.getYear this))
  (month [this] (inc (.getMonth this)))
  (day [this] (.getDate this))
  (day-of-week [this] (let [d (.getDay this)] (if (= d 0) 7 d)))
  (hour [this] (.getHours this))
  (minute [this] (.getMinutes this))
  (second [this] (.getSeconds this))
  (milli [this] (.getMilliseconds this))
  (equal? [this that] (== (.getTime this) (.getTime that)))
  (after? [this that] (> (.getTime this) (.getTime that)))
  (before? [this that] (< (.getTime this) (.getTime that)))
  (plus- [this period] ((period-fn period) + this))
  (minus- [this period] ((period-fn period) - this))
  (first-day-of-the-month- [this]
    (goog.date.UtcDateTime. (.getYear this) (.getMonth this) 1 0 0 0 0))
  (last-day-of-the-month- [this]
    (minus-
     (goog.date.UtcDateTime. (.getYear this) (inc (.getMonth this)) 1 0 0 0 0)
     (period :days 1)))
  (week-number-of-year [this]
    (goog.date/getWeekNumber
     (.getYear this) (.getMonth this) (.getDate this)))
  (week-year [this] 
    (get-week-year (.getYear this) (.getMonth this) (.getDate this)))

  goog.date.DateTime
  (year [this] (.getYear this))
  (month [this] (inc (.getMonth this)))
  (day [this] (.getDate this))
  (day-of-week [this] (let [d (.getDay this)] (if (= d 0) 7 d)))
  (hour [this] (.getHours this))
  (minute [this] (.getMinutes this))
  (second [this] (.getSeconds this))
  (milli [this] (.getMilliseconds this))
  (equal? [this that] (== (.getTime this) (.getTime that)))
  (after? [this that] (> (.getTime this) (.getTime that)))
  (before? [this that] (< (.getTime this) (.getTime that)))
  (plus- [this period] ((period-fn period) + this))
  (minus- [this period] ((period-fn period) - this))
  (first-day-of-the-month- [this]
    (goog.date.DateTime. (.getYear this) (.getMonth this) 1 0 0 0 0))
  (last-day-of-the-month- [this]
    (minus-
     (goog.date.DateTime. (.getYear this) (inc (.getMonth this)) 1 0 0 0 0)
     (period :days 1)))
  (week-number-of-year [this]
    (goog.date/getWeekNumber
     (.getYear this) (.getMonth this) (.getDate this)))
  (week-year [this] 
    (get-week-year (.getYear this) (.getMonth this) (.getDate this)))

  goog.date.Date
  (year [this] (.getYear this))
  (month [this] (inc (.getMonth this)))
  (day [this] (.getDate this))
  (day-of-week [this] (let [d (.getDay this)] (if (= d 0) 7 d)))
  (hour [this] nil)
  (minute [this] nil)
  (second [this] nil)
  (milli [this] nil)
  (equal? [this that] (.equals this that))
  (after? [this that] (pos? (compare-local-dates this that)))
  (before? [this that] (neg? (compare-local-dates this that)))
  (plus- [this period] ((period-fn period) + this))
  (minus- [this period] ((period-fn period) - this))
  (first-day-of-the-month- [this]
    (goog.date.Date. (.getYear this) (.getMonth this) 1))
  (last-day-of-the-month- [this]
    (minus-
     (goog.date.Date. (.getYear this) (inc (.getMonth this)) 1)
     (period :days 1)))
  (week-number-of-year [this]
    (goog.date/getWeekNumber
     (.getYear this) (.getMonth this) (.getDate this)))
  (week-year [this] 
    (get-week-year (.getYear this) (.getMonth this) (.getDate this))))

(def utc #js {:id "UTC" :std_offset 0 :names ["UTC"] :transitions []})

(defn default-ms-fn []
  (fn [] (.getTime (goog.date.UtcDateTime.))))

(defn offset-ms-fn
  [offset]
  (fn [] (+ (.getTime (goog.date.UtcDateTime.)) offset)))

(defn static-ms-fn
  [ms]
  (fn [] ms))

(def ^:dynamic *ms-fn* (default-ms-fn))

(defn now
  "Returns a DateTime for the current instant in the UTC time zone."
  []
  (doto (goog.date.UtcDateTime.) (.setTime (*ms-fn*))))

(defn time-now
  "Returns a local DateTime for the current instant without date or time zone
  in the current time zone."
  []
  (doto (goog.date.DateTime.) (.setTime (*ms-fn*))))

(defn at-midnight [datetime]
  (let [datetime (.clone datetime)]
    (doto datetime
      (.setHours 0)
      (.setMinutes 0)
      (.setSeconds 0)
      (.setMilliseconds 0))))

(defn today-at-midnight
  "Returns a DateTime for today at midnight in the UTC time zone."
  []
  (at-midnight (now)))

(defn epoch
  "Returns a DateTime for the begining of the Unix epoch in the UTC time zone."
  []
  (doto (goog.date.UtcDateTime.) (.setTime 0)))

(defn date-midnight
  "Constructs and returns a new DateTime at midnight in UTC.

  Specify the year, month of year, day of month. Note that month and day are
  1-indexed. Any number of least-significant components can be ommited, in
  which case they will default to 1."
  ([year]
   (date-midnight year 1 1))
  ([year month]
   (date-midnight year month 1))
  ([year month day]
   (goog.date.UtcDateTime. year (dec month) day)))

(defn date-time
  "Constructs and returns a new DateTime in UTC.

  Specify the year, month of year, day of month, hour of day, minute if hour,
  second of minute, and millisecond of second. Note that month and day are
  1-indexed while hour, second, minute, and millis are 0-indexed.

  Any number of least-significant components can be ommited, in which case
  they will default to 1 or 0 as appropriate."
  ([year]
   (date-time year 1 1 0 0 0 0))
  ([year month]
   (date-time year month 1 0 0 0 0))
  ([year month day]
   (date-time year month day 0 0 0 0))
  ([year month day hour]
   (date-time year month day hour 0 0 0))
  ([year month day hour minute]
   (date-time year month day hour minute 0 0))
  ([year month day hour minute second]
   (date-time year month day hour minute second 0))
  ([year month day hour minute second millis]
   (goog.date.UtcDateTime. year (dec month) day hour minute second millis)))

(defn local-date-time
  "Constructs and returns a new local DateTime.
Specify the year, month of year, day of month, hour of day, minute of hour,
second of minute, and millisecond of second. Note that month and day are
1-indexed while hour, second, minute, and millis are 0-indexed.
Any number of least-significant components can be ommited, in which case
they will default to 1 or 0 as appropriate."
  ([year]
   (local-date-time year 1 1 0 0 0 0))
  ([year month]
   (local-date-time year month 1 0 0 0 0))
  ([year month day]
   (local-date-time year month day 0 0 0 0))
  ([year month day hour]
   (local-date-time year month day hour 0 0 0))
  ([year month day hour minute]
   (local-date-time year month day hour minute 0 0))
  ([year month day hour minute second]
   (local-date-time year month day hour minute second 0))
  ([year month day hour minute second millis]
   (goog.date.DateTime. year (dec month) day hour minute second millis)))

(defn local-date
  "Constructs and returns a new goog.date.Date in the local timezone.
Specify the year, month, and day."
  [year month day]
  (goog.date.Date. year (dec month) day))

(defn today
  "Constructs and returns a new goog.date.Date representing today in the local timezone."
  []
  ;Note that the actual time field of the constructed date is midnight of 'today'
  (goog.date.Date. (js/Date. (*ms-fn*))))

(defn time-zone-for-offset
  "Returns a timezone map for the given offset, specified either in hours or
  hours and minutes."
  ([hours]
     (time-zone-for-offset hours nil))
  ([hours minutes]
     (let [sign (if (neg? hours) :- :+)
           fmt (str "UTC%s%02d" (when minutes ":%02d"))
           hours (if (neg? hours) (* -1 hours) hours)
           tz-name (if minutes
                     (format fmt (name sign) hours minutes)
                     (format fmt (name sign) hours))]
       (with-meta
         {:id tz-name
          :offset [sign hours (or minutes 0) 0]
          :rules "-"
          :names [tz-name]}
         {:type ::time-zone}))))

(defn default-time-zone
  "Returns the default timezone map for the current environment."
  []
  (let [offset (.getTimezoneOffset
                (doto (goog.date.DateTime.) (.setTime (*ms-fn*))))
        hours (/ (* -1 offset) 60)]
    (time-zone-for-offset (int hours) (mod hours 1))))

(defn to-default-time-zone
  "Assuming `dt` is in the UTC timezone, returns a DateTime
  corresponding to the same absolute instant in time as the given
  DateTime, but with calendar fields corresponding to the default
  (local) timezone."
  [dt]
  (goog.date.DateTime. dt))

(defn to-utc-time-zone
  "Assuming `dt` is in the Local timezone, returns a UtcDateTime
  corresponding to the same absolute instant in time as the given
  DateTime, but with calendar fields corresponding to the UTC
  timezone."
  [dt]
  (goog.date.UtcDateTime.fromTimestamp (.getTime dt)))

(defn from-default-time-zone
  "Assuming `dt` is in the UTC timezone, returns a DateTime
  corresponding to the same point in calendar time as the given
  DateTime, but for a correspondingly different absolute instant in
  time in the default (local) timezone.

  Note: This implementation uses the ECMAScript 5.1 implementation which
  trades some historical daylight savings transition accuracy for simplicity.
  see http://es5.github.io/#x15.9.1.8
  "
  [dt]
  (goog.date.DateTime. (.getYear dt)
                       (.getMonth dt)
                       (.getDate dt)
                       (.getHours dt)
                       (.getMinutes dt)
                       (.getSeconds dt)
                       (.getMilliseconds dt)))

(defn from-utc-time-zone
  "Assuming `dt` is in the local timezone, returns a UtcDateTime
  corresponding to the same point in calendar time as the given
  DateTime, but for a correspondingly different absolute instant in
  time in the UTC timezone.

  Note: This implementation uses the ECMAScript 5.1 implementation which
  trades some historical daylight savings transition accuracy for simplicity.
  see http://es5.github.io/#x15.9.1.8
  "
  [dt]
  (let [year (.getYear dt)
        month (.getMonth dt)
        date (.getDate dt)]
    (if (= goog.date.Date (type dt))
      (goog.date.UtcDateTime. year month date)
      (goog.date.UtcDateTime. year month date
                              (.getHours dt)
                              (.getMinutes dt)
                              (.getSeconds dt)
                              (.getMilliseconds dt)))))

(defn years
  "Given a number, returns a Period representing that many years.
  Without an argument, returns a Period representing only years."
  ([] (years nil))
  ([n] (period :years n)))

(defn months
  "Given a number, returns a Period representing that many months.
  Without an argument, returns a Period representing only months."
  ([] (months nil))
  ([n] (period :months n)))

(defn weeks
  "Given a number, returns a Period representing that many weeks.
  Without an argument, returns a Period representing only weeks."
  ([] (weeks nil))
  ([n] (period :weeks n)))

(defn days
  "Given a number, returns a Period representing that many days.
  Without an argument, returns a Period representing only days."
  ([] (days nil))
  ([n] (period :days n)))

(defn hours
  "Given a number, returns a Period representing that many hours.
  Without an argument, returns a Period representing only hours."
  ([] (hours nil))
  ([n] (period :hours n)))

(defn minutes
  "Given a number, returns a Period representing that many minutes.
  Without an argument, returns a Period representing only minutes."
  ([] (minutes nil))
  ([n] (period :minutes n)))

(defn seconds
  "Given a number, returns a Period representing that many seconds.
  Without an argument, returns a Period representing only seconds."
  ([] (seconds nil))
  ([n] (period :seconds n)))

(defn millis
  "Given a number, returns a Period representing that many milliseconds.
  Without an argument, returns a Period representing only milliseconds."
  ([] (millis nil))
  ([n] (period :millis n)))

(defn plus
  "Returns a new date/time corresponding to the given date/time moved
  forwards by the given Period(s)."
  ([dt p]
   (plus- dt p))
  ([dt p & ps]
   (reduce plus- (plus- dt p) ps)))

(defn minus
  "Returns a new date/time object corresponding to the given date/time
  moved backwards by the given Period(s)."
  ([dt p]
   (minus- dt p))
  ([dt p & ps]
   (reduce minus- (minus- dt p) ps)))

(defn ago
  "Returns a DateTime a supplied period before the present.

  e.g. `(-> 5 years ago)`"
  [period]
  (minus (now) period))

(defn yesterday
  "Returns a DateTime for yesterday relative to now"
  []
  (-> 1 days ago))

(defn from-now
  "Returns a DateTime a supplied period after the present.
  e.g. `(-> 30 minutes from-now)`"
  [period]
  (plus (now) period))

(defn earliest
  "Returns the earliest of the supplied DateTimes"
  ([dt1 dt2]
     (if (before? dt1 dt2) dt1 dt2))
  ([dts]
     (reduce earliest dts)))

(defn latest
  "Returns the latest of the supplied DateTimes"
  ([dt1 dt2]
     (if (after? dt1 dt2) dt1 dt2))
  ([dts]
     (reduce latest dts)))

(defn start
  "Returns the start DateTime of an Interval."
  [in]
  (:start in))

(defn end
  "Returns the end DateTime of an Interval."
  [in]
  (:end in))

(defn extend
  "Returns an Interval with an end DateTime the specified Period after the end
  of the given Interval"
  [in & by]
  (assoc in :end (apply plus (end in) by)))

(defn- month-range [{:keys [start end]}]
  (->> (range)
       (map #(plus start (months (inc %))))
       (take-while #(not (after? % end)))))

(defn- total-days-in-whole-months [interval]
  (map #(.getNumberOfDaysInMonth %) (month-range interval)))

(defn- in-months-
  "Returns the number of months in the given Interval.

  For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
  returns 1 month.

  Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.

  But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.

  And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months."
  [{:keys [start end] :as interval}]
  (count (total-days-in-whole-months interval)))

(defn- in-years-
  "Returns the number of standard years in the given Interval."
  [{:keys [start end]}]
  (let [sm (month start) sd (day start)
        em (month end) ed (day end)
        d1 (cond (and (= sm 2) (= sd 29) (= em 2) (= ed 28)) 0
                 (before? (date-time (year start) sm sd)
                          (date-time (year start) em ed)) 0
                 (after? (date-time (year start) sm sd)
                         (date-time (year start) em ed)) 1
                 :else-is-same-date 0)]
    (- (year end) (year start) d1)))

(defn conversion-error [from to]
  (let [from (string/capitalize (name from))
        to (name to)]
    (throw
     (ex-info (format "%s cannot be converted to %s" from to)
              {:type :unsupported-operation}))))

(extend-protocol InTimeUnitProtocol
  Period
  (in-millis [{:keys [millis seconds minutes hours days weeks months years]}]
    (cond months (conversion-error :months :millis)
          years (conversion-error :years :millis)
          :default (+ millis
                      (* seconds 1000)
                      (* minutes 60 1000)
                      (* hours 60 60 1000)
                      (* days 24 60 60 1000)
                      (* weeks 7 24 60 60 1000))))
  (in-seconds [this] (int (/ (in-millis this) 1000)))
  (in-minutes [this] (int (/ (in-seconds this) 60)))
  (in-hours [this] (int (/ (in-minutes this) 60)))
  (in-days [this] (int (/ (in-hours this) 24)))
  (in-weeks [this] (int (/ (in-days this) 7)))
  (in-months [{:keys [millis seconds minutes hours days weeks months years]}]
    (cond millis (conversion-error :millis :months)
          seconds (conversion-error :seconds :months)
          minutes (conversion-error :minutes :months)
          hours (conversion-error :hours :months)
          days (conversion-error :days :months)
          weeks (conversion-error :weeks :months)
          months (+ months (* (or years 0) 12))
          years (* years 12)))
  (in-years [{:keys [millis seconds minutes hours days weeks months years]}]
    (cond millis (conversion-error :millis :years)
          seconds (conversion-error :seconds :years)
          minutes (conversion-error :minutes :years)
          hours (conversion-error :hours :years)
          days (conversion-error :days :years)
          weeks (conversion-error :weeks :years)
          months (int (+ (/ months 12) years))
          years years))
  Interval
  (in-millis [{:keys [start end]}] (- (.getTime end) (.getTime start)))
  (in-seconds [this] (int (/ (in-millis this) 1000)))
  (in-minutes [this] (int (/ (in-seconds this) 60)))
  (in-hours [this] (int (/ (in-minutes this) 60)))
  (in-days [this] (int (/ (in-hours this) 24)))
  (in-weeks [this] (int (/ (in-days this) 7)))
  (in-months [this] (in-months- this))
  (in-years [this] (in-years- this)))

(defn within?
  "With 2 arguments: Returns true if the given Interval contains the given
  DateTime. Note that if the DateTime is exactly equal to the
  end of the interval, this function returns false.

  With 3 arguments: Returns true if the start DateTime is
  equal to or before and the end DateTime is equal to or after the test
  DateTime."
  ([{:keys [start end]} date]
   (within? start end date))
  ([start end date]
   (or (= start date)
       ;(= end date)
       (and (before? start date) (after? end date)))))

(defn overlaps?
  "With 2 arguments: Returns true of the two given Intervals overlap.
  Note that intervals that satisfy abuts? do not satisfy overlaps?

  With 4 arguments: Returns true if the range specified by start-a and end-a
  overlaps with the range specified by start-b and end-b."
  ([{start-a :start end-a :end} {start-b :start end-b :end}]
     (and (not (or (= start-a end-b) (= end-a start-b)))
          (overlaps? start-a end-a start-b end-b)))
  ([start-a end-a start-b end-b]
     (or (and (before? start-b end-a) (after? end-b start-a))
         (and (after? end-b start-a) (before? start-b end-a))
         (or (= start-a end-b) (= start-b end-a)))))

(defn overlap
  "Returns an Interval representing the overlap of the specified Intervals.
 Returns nil if the Intervals do not overlap.
 The first argument must not be nil.
 If the second argument is nil then the overlap of the first argument
 and a zero duration interval with both start and end times equal to the
 current time is returned."
  [i-a i-b]
  ;; from joda-time AbstractInterval.overlaps:
  ;; null argument means a zero length interval 'now'.
  (cond (nil? i-b) (let [n (now)] (overlap i-a (interval n n)))
        (overlaps? i-a i-b) (interval (latest (start i-a) (start i-b))
                                      (earliest (end i-a) (end i-b)))
        :else nil))

(defn abuts?
  "Returns true if Interval a abuts b, i.e. then end of a is exactly the
  beginning of b."
  [{start-a :start end-a :end} {start-b :start end-b :end}]
  (or (= start-a end-b) (= end-a start-b)))

(defn date? [x]
 (satisfies? DateTimeProtocol x))

(defn interval? [x]
 (instance? Interval x))

(defn period? [x]
 (instance? Period x))

(defn period-type? [type x]
  (and (period? x) (contains? x type)))

(defn years?
  "Returns true if the given value is an instance of Years"
  [val]
  (period-type? :years val))

(defn months?
  "Returns true if the given value is an instance of Months"
  [val]
  (period-type? :months val))

(defn weeks?
  "Returns true if the given value is an instance of Weeks"
  [val]
  (period-type? :weeks val))

(defn days?
  "Returns true if the given value is an instance of Days"
  [val]
  (period-type? :days val))

(defn hours?
  "Returns true if the given value is an instance of Hours"
  [val]
  (period-type? :hours val))

(defn minutes?
  "Returns true if the given value is an instance of Minutes"
  [val]
  (period-type? :minutes val))

(defn seconds?
  "Returns true if the given value is an instance of Seconds"
  [val]
  (period-type? :seconds val))

(defn mins-ago
  [d]
  (in-minutes (interval d (now))))

(defn last-day-of-the-month
  ([dt]
   (last-day-of-the-month- dt))
  ([year month]
   (last-day-of-the-month- (date-time year month))))

(defn number-of-days-in-the-month
  ([dt]
   (number-of-days-in-the-month (year dt) (month dt)))
  ([year month]
   (.getDate (last-day-of-the-month year month))))

(defn first-day-of-the-month
  ([dt]
   (first-day-of-the-month- dt))
  ([year month]
   (first-day-of-the-month- (date-time year month))))


(defprotocol IToPeriod
  (->period [obj]))

(extend-protocol IToPeriod

  Interval
  (->period [{:keys [start end] :as interval}]
    (let [years (in-years interval)
          start-year (year start)
          leap-years (count
                      (remove false?
                              (map leap-year?
                                   (range start-year (+ start-year years)))))
          start-month  (month start)
          days-in-months (total-days-in-whole-months interval)
          months (- (count days-in-months) (* years 12))
          days-to-remove (reduce + days-in-months)
          days (- (in-days interval) days-to-remove)
          hours-to-remove (* 24 (+ days days-to-remove))
          hours (- (in-hours interval) hours-to-remove)
          minutes-to-remove (* 60 (+ hours hours-to-remove))
          minutes (- (in-minutes interval) minutes-to-remove)
          seconds-to-remove (* 60 (+ minutes minutes-to-remove))
          seconds (- (in-seconds interval) seconds-to-remove)]
      (period :years years
              :months months
              :days days
              :hours hours
              :minutes minutes
              :seconds seconds
              :millis (- (in-millis interval)
                         (* 1000 (+ seconds seconds-to-remove))))))

  Period
  (->period [period] period))

(defn today-at
  ([hours minutes seconds millis]
   (doto (now)
     (.setHours hours)
     (.setMinutes minutes)
     (.setSeconds seconds)
     (.setMilliseconds millis)))
  ([hours minutes seconds]
   (today-at hours minutes seconds 0))
  ([hours minutes]
   (today-at hours minutes 0)))

(defn do-at* [base-date-time body-fn]
  (binding [*ms-fn* (static-ms-fn (.getTime base-date-time))]
    (body-fn)))

(defn floor
  "Floors the given date-time dt to the given time unit dt-fn,
 e.g. (floor (now) hour) returns (now) for all units
 up to and including the hour"
  ([dt dt-fn]
   (let [dt-fns [year month day hour minute second milli]]
     (apply date-time
            (map apply
                 (concat (take-while (partial not= dt-fn) dt-fns) [dt-fn])
                 (repeat [dt]))))))
