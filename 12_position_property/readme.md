# CSS Positioning and Z-Index README

CSS position property is a powerful tool that allows you to control the placement of elements on a webpage. This README provides an overview of the key concepts related to CSS positioning and z-index.



## Positioning Elements

The CSS position property is used to move and stack elements on a webpage. By default, elements have a static position, which means they cannot be moved or have specific positioning properties applied.

## Position Relative

Setting an element's position to relative allows you to move it from its original position. Here's an example:

```css
.relative-container {
  position: relative;
  top: 20px;
  left: 10px;
}
```
##  Z-Index and Stacking
The z-index property is used to control the stacking order of elements. Elements with a higher z-index value are stacked on top of elements with lower values.

```css
Copy code
.element-one {
  position: absolute;
  z-index: 2;
}

.element-two {
  position: absolute;
  z-index: 1;
}

```
## Absolute Positioning
When an element is set to absolute position, it is positioned relative to its nearest positioned ancestor. Here's an example:

```css
Copy code
.parent-container {
  position: relative;
}

.absolute-child {
  position: absolute;
  top: 50px;
  left: 20px;
}

```
## Fixed and Sticky Positioning
The 'fixed' value in the position property keeps an element fixed on the page, even when scrolling. The 'sticky' value allows an element to stick to a specific position on the page when scrolled.

```css
Copy code
.fixed-element {
  position: fixed;
  top: 0;
  left: 0;
}

.sticky-element {
  position: sticky;
  top: 20px;
}

```

## Additional Notes
The transform, filter, or perspective properties can affect the positioning of elements.
Applying the invert filter will invert the color of an element.
The filter invert property can be set to zero for no change.

```css
Copy code
.inverted-element {
  filter: invert(100%);
}

.no-change-element {
  filter: invert(0);
}