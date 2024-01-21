# CSS Filters Tutorial

Welcome to the CSS Filters Tutorial! In this tutorial, we'll explore the CSS `filter` property, a powerful tool to manipulate images directly within your web pages. 

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Available Filters](#available-filters)
  - [Blur](#blur)
  - [Brightness](#brightness)
  - [Contrast](#contrast)
  - [Grayscale](#grayscale)
  - [Sepia](#sepia)
  - [Hue Rotate](#hue-rotate)
  - [Drop Shadow](#drop-shadow)
  - [Invert](#invert)
  - [Opacity](#opacity)
- [Combining Filters](#combining-filters)
- [Usage Tips](#usage-tips)
- [Examples](#examples)
- [Advanced Usage](#advanced-usage)
- [Contributing](#contributing)
- [Feedback](#feedback)

## Introduction

CSS Filters provide a straightforward way to apply various visual effects to images directly through CSS. These filters can enhance or alter an image's appearance, making it a handy tool for web developers.

## Getting Started

To get started, you simply need an HTML element with an image, and then you can apply filters using the `filter` property in your CSS styles.

```html
<div class="container">
  <img src="path/to/your/image.jpg" alt="Your Image" id="img1">
</div>
```

```css

#img1 {
  filter: blur(10px);
}

```
This example introduces a blur filter with a 10-pixel radius to create a blurred effect on the image.

## Available Filters
## Blur
The blur filter is used to apply a blur effect to an image. Adjust the pixel radius to control the intensity of the blur.


```css
#img1 {
  filter: blur(10px);
}
```
## Brightness
The brightness filter adjusts the brightness of an image. A value greater than 1 increases brightness, while a value less than 1 decreases it.
```css


#img1 {
  filter: brightness(1.5);
}
```
## Contrast
The contrast filter controls the difference between the lightest and darkest parts of an image. Adjust the percentage value for desired contrast.

```css

#img1 {
  filter: contrast(150%);
}
```
## Grayscale
The grayscale filter converts an image to grayscale. Use a percentage value to control the level of grayscale.

```css

#img1 {
  filter: grayscale(50%);
}
```
## Sepia
The sepia filter adds a sepia tone to an image. Adjust the percentage value for the intensity of the sepia effect.

```css

#img1 {
  filter: sepia(20%);
}
```
## Hue Rotate
The hue-rotate filter rotates the colors of an image around the color wheel. Specify the angle in degrees.

```css

#img1 {
  filter: hue-rotate(90deg);
}
```
## Drop Shadow
The drop-shadow filter adds a shadow effect to an image. Define the horizontal and vertical shadow offsets, blur radius, and shadow color.

```css

#img1 {
  filter: drop-shadow(4px 4px 10px #333);
}
```
## Invert
The invert filter inverts the colors of an image. Use a percentage value to control the level of inversion.

```css

#img1 {
  filter: invert(80%);
}
```
## Opacity
The opacity filter adjusts the transparency of an image. Specify a value between 0 (completely transparent) and 1 (completely opaque).

```css

#img1 {
  filter: opacity(0.7);
}
```
## Combining Filters
You can combine multiple filters by separating them with spaces in the filter property.

```css

#img1 {
  filter: brightness(1.2) contrast(120%) grayscale(20%);
}
```
## Usage Tips
Experiment with different filter combinations to achieve desired visual effects.
Filters can be applied not only to images but also to other HTML elements.
