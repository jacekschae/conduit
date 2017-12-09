# ![RealWorld Example App](https://cloud.githubusercontent.com/assets/556934/25448267/85369fdc-2a7d-11e7-9613-ab5ce5e1800f.png)

> ### [ClojureScript](https://clojurescript.org/) and [re-frame](https://github.com/Day8/re-frame) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) spec and API.

### [Demo](https://jacekschae.github.io/conduit) &nbsp;&nbsp;&nbsp;&nbsp; [RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with
[ClojureScript](https://clojurescript.org/) and [re-frame](https://github.com/Day8/re-frame) including CRUD operations,
authentication, routing, pagination, and more.

For more information on how this works with other frontends/backends, head over to the
[RealWorld](https://github.com/gothinkster/realworld) repo.

> ### Application structure/style heavily inspired by [todomvc](https://github.com/Day8/re-frame/tree/master/examples/todomvc)

## Setup And Run

1. Install [Leiningen](http://leiningen.org/) (plus Java).

2. Get the re-frame repo

   ```
   git clone https://github.com/jacekschae/conduit
   ```

3. cd to the right example directory

   ```
   cd conduit
   ```

4. Clean build

   ```
   lein dev
   ```

5. Run You'll have to wait for step 4 to do its compile, and then:
   ```
   open http://localhost:3449
   ```

## Compile an optimised version

Build with Java 9

1. Compile

   ```
   lein prod
   ```

   If you end up with Exception

   ```
   <Exception details>
   ...
   Caused by: java.lang.ClassNotFoundException: javax.xml.bind.DatatypeConverter
   ```

   You should upgrade your Java to version 9. For more info check [How to upgrade your Clojure and ClojureScript projects to use Java 9](https://www.deps.co/blog/how-to-upgrade-your-clojure-projects-to-use-java-9/)

2. Open the following in your browser
   ```
   resources/public/index.html
   ```
