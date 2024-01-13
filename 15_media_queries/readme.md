# Responsive Web Design with Media Queries

This repository contains examples and explanations of using media queries for responsive web design. Learn how to make your website adapt to different devices and screen sizes using CSS media queries.

## Introduction

In the evolving landscape of web development, creating responsive websites has become a default standard. Media queries play a crucial role in achieving responsiveness, allowing styles to adapt based on the characteristics of the user's device.

## Getting Started

Follow the examples provided in this repository to understand the syntax and usage of media queries. The primary focus is on the `@media` rule in CSS, enabling you to define styles based on conditions such as screen width, orientation, and more.

### Basic Media Query Syntax

```css
@media only screen and (max-width: 455px) {
  /* Styles applied when screen width is 455 pixels or less */
  body {
    background-color: blue;
  }
}
```
### Combining Conditions

```css
@media only screen and (min-width: 456px) and (max-width: 750px) {
  /* Styles applied when screen width is between 456px and 750px */
  /* Example: Flex direction changes for smaller screens */
  body {
    background-color: lightblue;
    display: flex;
    flex-direction: column;
  }
}
```

### Orientation-based Styles

```css
@media only screen and (orientation: landscape) {
  /* Styles applied when the device is in landscape orientation */
  body {
    border: 2px solid purple;
  }
}
```

## Breakpoints and Responsive Design

Understanding breakpoints is essential for responsive design. Consider different device categories and define breakpoints accordingly. For instance:

* **Mobile devices:** `max-width: 455px`
* **Tablets:** `min-width: 456px and max-width: 750px`
* **Desktop:** `min-width: 751px and max-width: 1080px`
* **Ultra-wide monitors:** `min-width: 1081px`

## Examples in Action

Explore the provided HTML and CSS files to see media queries in action. Modify the styles and experiment with different breakpoints to observe how the design adapts to various screen sizes.

## If we apply, then this will occur

```css
@media only screen and (max-width: 456px) {
  display-direction: flex;
}
```


Normal sized i.e more than 455px  
![normal.png](normal.png)  
For size less than 455px 
![Alt Text](lessWidth.png)