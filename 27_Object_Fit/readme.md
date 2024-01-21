# CSS Object Fit and Object Position Tutorial

This repository contains code examples and explanations related to the CSS `object-fit` and `object-position` properties discussed in the "Sigma Web Development Course - Tutorial #49" by [Merlin](https://merlin.foyer.work/). 

## Table of Contents
- [Introduction](#introduction)
- [Object Fit](#object-fit)
- [Object Position](#object-position)
- [Background Properties](#background-properties)
  - [Background Image](#background-image)
  - [Background Position](#background-position)
  - [Background Repeat](#background-repeat)
  - [Background Clip](#background-clip)
- [Usage](#usage)
- [Review and Feedback](#review-and-feedback)

## Introduction

In this tutorial, we explore the CSS `object-fit` and `object-position` properties, solving common problems in web development related to image handling within containers while maintaining aspect ratios.

### Object Fit

The `object-fit` property is used to control how an image behaves inside its container. It allows us to specify whether the image should be stretched, resized, or cropped to fit the container dimensions.

#### Example:

```css
.container {
  width: 200px;
  height: 150px;
}

img {
  object-fit: cover; /* Other values: fill, contain, scale-down, none */
}
```
## Object Position
The object-position property is used in conjunction with object-fit to determine where the image is placed within the container.

Example:
```css
img {
  object-fit: cover;
  object-position: top right; /* Other values: bottom right, bottom left, etc. */
}
```

## Background Properties
Apart from using the <img> element, we can also set images as backgrounds for containers. This section covers related background properties.

Background Image
You can set a background image for a container using the background-image property.

Example:

```css
.container {
  background-image: url('path/to/your/image.jpg');
  background-size: cover;
  background-position: center center; /* Adjust as needed */
}
```

## Background Position
The background-position property is used to specify the starting position of a background image within its container.

Example:
```css

.container {
  background-image: url('path/to/your/image.jpg');
  background-position: top right; /* Other values: center center, bottom right, etc. */
}
```
## Background Repeat
The background-repeat property controls whether a background image is repeated or not.

Example:
```css
.container {
  background-image: url('path/to/your/image.jpg');
  background-repeat: no-repeat; /* Other values: repeat-x, repeat-y, repeat */
}
```
## Background Clip
The background-clip property defines how far the background (color or image) should extend within an element.

Example:
```css
.container {
  background-clip: padding-box; /* Other values: border-box, content-box */
}