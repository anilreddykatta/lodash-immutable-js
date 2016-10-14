# lodash-plain-immutable

Implementation of lodash for immutable taking plain js objects into consideration. Library supports default values, undefined exceptions. 

Motivation:
1) I love lodash because it is very simple to write, handles tons of errors. We no more need checks for undefined
2) Immutable is great library, we are using this all the projects. 
3) At our workplace had bad practice of using 'toJS' frequently, simply to use lodash methods. 
4) Immutable provides most of the implementations for lodash as methods, we needed some interface between lodash and immutable.
    Which can handle default values, undefined error handling
5) I plan to add more methods which we frequently use :)
6) I will also add repl for library to play around


Currently it is development build. I will add configuration for production system. 

Steps to run:

#code
```javascript
npm install or yarn install
npm run watch:test to run tests in watch mode
npm run test to run tests once
```
