## Introduction

JavaScript variables act as containers to store data of various types. This guide explores JavaScript variables, their types, and objects. Let's dive into the details.

## JavaScript Variables

Variables in JavaScript can store numbers, strings, floating-point numbers, and objects. They are declared using the `var` keyword, which can also be used to assign values. For example:

```javascript
var numberVariable = 42;
var stringVariable = "Hello, World!";
var floatingPointVariable = 3.14;
var objectVariable = { key: "value" };

console.log(numberVariable, stringVariable, floatingPointVariable, objectVariable);
```

## Data Types
JavaScript supports different data types such as `numbers`, `strings`, and `objects`. 

The `typeof` operator helps determine the data type of a variable:

```javascript
var exampleVariable = 42;
console.log(typeof exampleVariable); 
// Output: "number"
```

## Variable Naming Rules
JavaScript variable names must follow specific rules:

* Start with a `letter`, `a dollar sign`, or an `underscore`.
* Cannot start with a number.
* Case-sensitive.

#### For instance:

```javascript
var validVariable = "Allowed";
// var 1invalidVariable = "Not Allowed"; 
// This would throw an error
```

## Understanding const in JavaScript

The const keyword declares a variable that cannot be changed after assignment. This is beneficial for ensuring a variable remains constant throughout the program:

```javascript 
const pi = 3.14159;
// pi = 4; 
// This would throw an error
```

## Scope of Variables
* Variables declared with `let` have block scope, accessible only within the block they are defined in. 
* In contrast, variables declared with `var` have global scope and can be accessed throughout the entire program:

```javascript
if (true) {
  let blockScopedVariable = "I am block-scoped";
  var globalScopedVariable = "I am global-scoped";
}

console.log(globalScopedVariable); 
// Output: "I am global-scoped"
console.log(blockScopedVariable);
 // This would throw an error
```

### var:
- `Function-scoped:` Variables declared with var are function-scoped, meaning they are accessible throughout the entire function in which they are declared.

```javascript
function example() {
  if (true) {
    var x = 10;
    console.log(x); // Outputs: 10
  }
  console.log(x); // Outputs: 10 (var is function-scoped)
}
```
### let:
- `Block-scoped:` Variables declared with let are block-scoped, meaning they are only accessible within the block (enclosed by curly braces) in which they are declared.


```javascript
function example() {
  if (true) {
    let z = 20;
    console.log(z); // Outputs: 20
  }
  // console.log(z); // This would throw an error, as z is not accessible here
}
```
### More example:-

```javascript
var globalVar = "I am global";

function exampleFunction() {
  if (true) {
    let localVar = "I am local"; 
    // localVar is accessible throughout the function
    console.log(localVar); 
    // Outputs: "I am local"

    // Changing var in the block also changes it globally
    globalVar = "I am changed globally";
  }

  console.log(globalVar); 
  // Outputs: "I am changed globally"
  console.log(localVar); 
  // This would throw an error as localVar is not accessible here
}
```

### Changing var in a Block:

* In the example
Function, a variable named localVar is declared using `var` inside an if block. Variables declared with `var` have function scope, so localVar is accessible throughout the entire function.

*  Inside the block, localVar is logged, and then its value is changed. Surprisingly, changing the value of localVar inside the block also changes its value globally because `var` does not have block scope.

### Using let to Avoid Global Impact:

* If `let` were used instead of `var` for the localVar declaration, changing its value inside the block would only affect the variable within that block and not globally.
* Using `let` helps prevent unintentional changes to global variables and promotes a more controlled and predictable code behavior.



## Null in JavaScript
In JavaScript, the type of null is object. When creating an object, it consists of key-value pairs:

```javascript
var nullObject = null;
console.log(typeof nullObject); // Output: "object"
```

## JavaScript Objects
Objects in JavaScript can be modified by adding or changing key-value pairs:

```javascript
var person = {
  name: "John",
  age: 30
};

// Adding a new property
person.gender = "Male";

// Changing an existing property
person.age = 31;

console.log(person);
```

## Modifying JavaScript Objects
`Key-value pairs` can be added or changed using `dot notation`. The value of a key can be any primitive, object, or function:

```javascript
var car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};

// Adding a new key-value pair
car.color = "Blue";

// Changing an existing value
car.year = 2023;

console.log(car);
```