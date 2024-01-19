# CSS Grid Layout Readme
## Overview

CSS Grid is a powerful layout system that simplifies the creation of complex layouts in CSS. It allows for the definition of columns and rows, enabling precise control over the positioning of items within a grid. This readme provides a comprehensive guide to understanding and utilizing CSS Grid, covering key terminology, layout structuring, shorthand techniques, grid areas, the FR unit, gap settings, and alignment properties.

# Table of Contents
## Basic Concepts
```html
1.1 Grid Lines and Grid Cells

1.2 Grid Tracks and Grid Areas
Grid Template Rows and Columns

2.1 Defining Layout Structure
2.2 Placing Items
Shorthand for Grid Rows and Columns

3.1 Using Start and End
3.2 Named Positions and Spanning
Naming Grid Areas

4.1 Dividing Grid Areas
4.2 Assigning Grid Areas to Items
Utilizing the FR Unit

5.1 Equal Widths
5.2 Proportional Widths
Setting Gaps

6.1 Column and Row Gaps
6.2 Centering Items
Minmax Function and Alignment

7.1 Column Width with Minmax
7.2 Aligning Items
```
## Basic Concepts
```
1.1 Grid Lines and Grid Cells
Grid lines are the dividing lines that create the structure of the grid. A grid cell is a box formed by the intersection of two adjacent grid lines.

1.2 Grid Tracks and Grid Areas
Grid tracks refer to the spaces between two grid lines, forming either a column or a row. Grid areas are any designated spaces inside the grid, allowing for precise item placement.

Grid Template Rows and Columns
2.1 Defining Layout Structure
Define the structure of your layout by specifying the number and size of grid rows and columns using grid-template-rows and grid-template-columns.
```

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 2fr;
}
```
## 2.2 Placing Items
Place items within the grid using grid-row and grid-column properties.


```css
.item {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
```
Shorthand for Grid Rows and Columns
3.1 Using Start and End
Use shorthand to define grid row and column positions.

```css

.item {
  grid-row: 1 / 3;
  grid-column: 2 / 4;
}
```
3.2 Named Positions and Spanning
Employ names for grid row and column positions and span items across multiple rows or columns.

```css

.item {
  grid-row: header-start / footer-end;
  grid-column: sidebar-start / content-end;
}
```
Naming Grid Areas

## 4.1 Dividing Grid Areas


Divide the grid into named areas for clarity.

```css

.container {
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
}
```
## 4.2 Assigning Grid Areas to Items
Assign grid areas to items for a cleaner layout.

```css

.item {
  grid-area: header;
}
```

Utilizing the FR Unit


## 5.1 Equal Widths
Distribute available width equally among grid columns using the fr unit.

```css

.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```

## 5.2 Proportional Widths

Create proportional widths for grid columns.

```css

.container {
  grid-template-columns: 2fr 1fr 3fr;
}
```

Setting Gaps


## 6.1 Column and Row Gaps 

Set independent column and row gaps for a flexible layout design.

```css

.container {
  column-gap: 20px;
  row-gap: 10px;
}
```

## 6.2 Centering Items
Use justify-content and align-content properties to center items.

```css

.container {
  justify-content: center;
  align-content: center;
}
```

Minmax Function and Alignment

## 7.1 Column Width with Minmax
Utilize the minmax function to set column width limits.

```css

.container {
  grid-template-columns: minmax(100px, 1fr) minmax(200px, 2fr);
}
```
## 7.2 Aligning Items
Align items within the grid container using justify-content and align-content.

```css

.container {
  justify-content: center;
  align-content: space-around;
}
```