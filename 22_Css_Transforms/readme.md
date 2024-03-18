# CSS Transforms Guide
## Overview
In this video, we explore CSS transforms, a powerful tool for manipulating the visual presentation of elements on a webpage. There are two main types of transforms: 2D and 3D.

# Types of Transforms
## 1. 2D Transforms
2D transforms operate in a two-dimensional space, allowing us to modify objects in terms of scale, translation, and rotation. 
Examples include:

Scale: Enlarging or reducing the size of an element.
Translate: Moving an element from its original position.
Rotate: Rotating an element around a specified point.

## 2. 3D Transforms
3D transforms introduce an additional axis, the Z-axis, enabling manipulation in three dimensions. This allows for more complex transformations. Examples include:

RotateX, RotateY, RotateZ: Rotation around the X, Y, and Z axes.
Scale3D: Enlarging or reducing size in three dimensions.
Translate3D: Moving an element in three-dimensional space.
Applying Transforms
Example: Rotating an Element

```css

.box {
  width: 50px;
  height: 50px;
  background-color: #5e35b1;
  border: 2px solid black;
  transform: rotate(45deg);
}
```
This CSS code rotates a box element by 45 degrees.

Example: Scaling an Element
```css

.box {
  width: 50px;
  height: 50px;
  background-color: #1565c0;
  border: 2px solid black;
  transform: scale(1.5);
}
```
This code scales a box element by a factor of 1.5.

Example: Translating an Element

```css

.box {
  width: 50px;
  height: 50px;
  background-color: #43a047;
  border: 2px solid black;
  transform: translate(20px, 30px);
}
```

This code translates a box element by 20 pixels in the X-axis and 30 pixels in the Y-axis.

Example: 3D Rotation
```css

.box {
  width: 50px;
  height: 50px;
  background-color: #e53935;
  border: 2px solid black;
  transform: rotateX(45deg) rotateY(30deg) rotateZ(15deg);
}
```

This code applies a 3D rotation to a box element.

Advanced Transformations
Transform Origin
```css

.box {
  width: 50px;
  height: 50px;
  background-color: #ff9800;
  border: 2px solid black;
  transform-origin: 10% 10%;
  transform: rotate(45deg);
}
```
This code rotates a box around a specified origin point (10% from the left and 10% from the top).

Transition with Transform
```css 

.box {
  width: 50px;
  height: 50px;
  background-color: #673ab7;
  border: 2px solid black;
  transition: transform 0.3s ease-in-out;
}

.box:hover {
  transform: scale(1.2);
}
```
This example adds a smooth transition effect to the scaling of a box on hover.

## Conclusion
CSS transforms provide a versatile way to enhance the visual appearance of elements on a webpage. Experiment with these properties to create engaging and interactive user interfaces.