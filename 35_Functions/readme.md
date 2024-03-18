# Function Declaration

A `function` declaration defines a named function.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('John')); 
// Output: Hello, John!
```

- `Usage:` greet('John') will return "Hello, John!".

- `Hoisted:` Function declarations are hoisted to the top of the script.

## Function Expression
A function expression defines a function as part of an expression.

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Jane')); 
// Output: Hello, Jane!
```
- `Usage:` greet('Jane') will return "Hello, Jane!".

- `Hoisted:` Only the variable declaration is hoisted, not the function.
## Arrow Functions
Arrow functions provide a concise syntax for writing functions.

```javascript
const greet = (name) => `Hello, ${name}!`;

console.log(greet('Alice')); 
// Output: Hello, Alice!
```
- `Usage:` greet('Alice') will return "Hello, Alice!".

- `No this Binding:` Arrow functions do not have their own this context.
## Parameters
Functions can take parameters for dynamic behavior.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(3, 5));
 // Output: 8
```
- `Usage:` add(3, 5) will return 8.
## Return Values
Functions can return values to the caller.

```javascript
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 6)); // Output: 24
```
- Usage: multiply(4, 6) will return 24.

## Anonymous Functions
Functions without a name are known as anonymous functions.

```javascript
const result = function(x, y) {
  return x - y;
};

// Usage
console.log(result(10, 3)); // Output: 7
Usage: result(10, 3) will return 7.
```

## Function Hoisting
Function declarations are hoisted to the top of the script, allowing them to be used before they are defined.

```javascript
console.log(square(4)); // Output: 16

function square(x) {
  return x * x;
}
```

## Closure
Closures allow functions to access variables from their outer scope even after the outer function has finished executing.

```javascript
function outer() {
  const message = 'Hello';

  function inner() {
    console.log(message);
  }

  return inner;
}

const closureFunction = outer();
closureFunction(); 
// Output: Hello
```

## Callback Functions
Functions can be passed as arguments to other functions, known as callback functions.

``` javascript
function performOperation(a, b, operation) {
  return operation(a, b);
}

const additionResult = performOperation(5, 3, (x, y) => x + y);

console.log(additionResult); 
// Output: 8
Usage: additionResult will be 8.
```