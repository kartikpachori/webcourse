# Introduction

Loops in JavaScript are used to perform repetitive tasks, avoiding manual repetition of code. This guide explores different types of loops to handle various scenarios efficiently.

## For Loop

The for loop in JavaScript is a versatile construct for iterating over a sequence of values.

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

- `Initialization`: let i = 0 initializes the loop variable.

- `Condition`: i < 10 is the condition that determines when the loop should continue.
- `Update`: i++ increments the loop variable after each iteration.
## While Loop
The while loop executes a block of code while a specified condition is true.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
- `Initialization`: let i = 0 initializes the loop variable.

- `Condition`: i < 5 determines when the loop should continue.
- `Update`: i++ increments the loop variable within the loop.

## Do-While Loop
The do-while loop is similar to the while loop but ensures that the code block is executed at least once.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
- `Initialization`: let i = 0 initializes the loop variable.

- `Code Block`: The code block is executed at least once.
- `Condition`: i < 5 determines whether to continue the loop.
## For-In Loop
- #### The `for-in` loop is used to iterate over the keys (properties) of an object. 

- #### It is particularly useful for iterating over the properties of an object when the order of iteration is not important.
```javascript
const person = { name: 'Harry', role: 'programmer', company: 'Code with Harry' };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

```output
name: Harry
role: programmer
company: Code with Harry
```
- `Object Keys`: The loop iterates over the keys of the person object.

- `Accessing Values`: person[key] accesses the corresponding values.
## For-Of Loop
- The `for-of` loop is used to iterate over iterable objects such as arrays, strings, and other collections. 

- It directly provides the values of the iterable, making it convenient for iterating over elements.
```javascript
const iterable = 'Harry';

for (let char of iterable) {
  console.log(char);
}
```

```output
H
a
r
r
y

```
`Iterable Object`: The loop iterates over each character in the string iterable.

## Key Differences:
### Use Case:

- Use `for-in` when you want to iterate over the keys of an object.
- Use `for-of` when you want to iterate over values of an iterable object.
### Object Iteration:

- `for-in` is used for iterating over object properties.
- `for-of` is used for iterating over iterable values.
### Order of Iteration:

- `for-in` does not guarantee a specific order of iteration over object properties.
- `for-of` maintains the order of iteration based on the iterable.
### Applicability:

- `for-in` is mainly used for generic object property iteration.
- `for-of` is tailored for iterating over values in arrays, strings, and other iterable objects.