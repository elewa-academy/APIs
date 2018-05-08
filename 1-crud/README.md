# CRUD

Create, Read, Update, Delete.

These are the basic Data Access operations.  In this project you will build a basic command line application (CLI) that allows you to take read and write notes directly from the command line into a .json file.

Along the way you'll learn about Model Objects and File IO (one of Node's 3 super-powers).

### Index
* [Learning Objectives](#learning-objectives)
* [Specifications](#specifications)
* [Resources](#resources)
* [Assessment](#assessment)

---

## Learning Objectives

* JSON
* Reading & Writing to files
* Model objects
* Closures
* CRUD operations
* CLI's

[TOP](#index)

---

## Specifications


1. For each _basic model_ file in this [demo app](https://github.com/elewa-academy/Modular-Design/tree/master/docs_src/05-crud/crud-app):
    * Write the model object
    * Test the model object in your /tests folder

2. For each model file with "json" in the name:
    * Write the model object
      * User Stories:
        * Create
        * Read
        * Update
        * Delete
        * Initialize (creates .json file with empty DB object)
        * Reset (clears nextID & data)
        * Set name of DB
        * See a helpful message or error after each operation
    * Test the model objecti in your /tests folder
3. Write a Node.js Handler & View.  
4. Build a repo for this project and include it on your portfolio.


Challenge:
* Allow a user to CRUD nested notes



[TOP](#index)

---

## Resources

* [code to study](https://github.com/elewa-academy/APIs/tree/master)

File I/O in Node:
* [Stackabuse](http://stackabuse.com/reading-and-writing-json-files-with-node-js/)
* [Codementor](https://www.codementor.io/codementorteam/how-to-use-json-files-in-node-js-85hndqt32)
* [node-jsonfile](https://github.com/jprichardson/node-jsonfile)
* [By Example](https://github.com/elewa-academy/Modular-Design/) - some of the apps have a db.txt, those use file io
* [JSON format](https://www.w3schools.com/js/js_json_intro.asp)
* [\_\_dirname](https://jaketrent.com/post/paths-in-node/)

Error Handling with Callbacks:
* [Error First Convention](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
* [By Example](https://github.com/elewa-academy/General-Resources/tree/master/code-to-study/progressive-callbacks)

Blocking & Non-Blocking:
* [Blocking vs Non-Blocking 1](https://bytearcher.com/articles/blocking-vs-non-blocking-in-node.js/)
* [Blocking vs Non-Blocking 2](http://www.programmr.com/blogs/difference-between-asynchronous-and-non-blocking)
* [Non-Blocking I/O 1](https://www.codementor.io/theresamostert/understanding-non-blocking-i-o-in-javascript-cvmg1hp6l)
* [Non-Blocking I/O 2](http://sebastianmetzger.com/handle-asynchronous-non-blocking-io-in-javascript/)
* [How to know the difference?](https://softwareengineering.stackexchange.com/questions/202047/what-determines-which-javascript-functions-are-blocking-vs-non-blocking)

NPM Installing:
* [Nodesource](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
* [Impressivewebs](https://www.impressivewebs.com/npm-for-beginners-a-guide-for-front-end-developers/)
* [Requiring Modules vs Files](https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8)
* [Node.js Built-in Modules](https://www.w3schools.com/nodejs/ref_modules.asp)

Closures:
* [General Resources](https://elewa-academy.github.io/General-Resources/javascript/closures.html)
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)


[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

