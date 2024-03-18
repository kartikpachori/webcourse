# Learning CSS Display Property

✦
## Introduction
- Learn to change the display property with CSS.

### Default Values
- Understand default values of elements.
- Explore display values like inline, inline-block, and flex.

```html
<div class="box box1">I am a box</div>
<div class="box">And also a nice box</div>
```
And the CSS styles applied to these boxes:


```css
.box {
  border: 2px solid blue;
  display: inline-block;
  padding: 45px;
  margin: 35px;
  width: 10vw;
}

.box1 {
  visibility: hidden;
}

```
Explanation:

- The `.box` div has a blue border (`border: 2px solid blue;`).
- It is set to `display: inline-block;`, making it behave like an inline element with block-level properties.
- Padding is applied (`padding: 45px;`), and it touches the top due to the use of inline-block.
- Margin is set to provide space around the box (`margin: 35px;`).
- The width is set to 10% of the viewport width (`width: 10vw;`).
---

✦
## Display Property Overview
- CSS `display` property for block or inline elements.

### Control Layout and Visibility
- Use `display` property to control layout and visibility.
- Apply CSS box model properties (margin, padding, border) with the display property.

---

✦
## Inline Elements
- Utilize `display` property to make elements behave like inline elements.

```css
.box {
  display: inline;
}
```
Explanation:

- Inline elements stay in one line without breaking.
- Setting display property to inline achieves inline behavior.

### Inline Element Behavior
- Inline elements stay in one line without breaking.
- Set display property to inline for inline behavior.

---

✦
## Padding and Display
- Padding doesn't touch the top when the element is inline. Use inline-block property for proper width and margin handling.

```css
.box {
  display: inline;
  padding: 45px;
}

.inline-block-box {
  display: inline-block;
  padding: 45px;
}
```
Explanation:

- When display is set to inline, padding doesn't touch the top.
- Using `display: inline-block` makes padding touch the top, ensuring proper width and margin handling.

### Inline Block Property
- Use `display: inline-block` to make padding touch the top.
- Use inline block for proper width and margin handling.

---

✦
## CSS Display Property in Depth
- CSS `display` property explained.

### Rendering Elements
- Control how elements are rendered on a web page.

### Hiding Elements
- Hide elements by setting the display property to 'none'.

---

✦
## Visibility and Space Control
- Use display property to control visibility and space of an element.

```html
<div class="box box1">I am a box</div>

```
```css
.box1 {
  visibility: hidden;
}
```
Explanation:

- The `.box1` div has the CSS property `visibility: hidden;`, hiding the box but preserving the space it occupies.
- If you change it to `display: none;`, both the box and its space would disappear.

### Space Disappearance
- Setting display to 'none' makes both the element and its space disappear.

### Visibility Property
- Use visibility property to hide an element while preserving its space.

---

✦
## Inline Flex
- Inline flex doesn't cause elements to fall down from the other side. Change flex direction when flexing inline.

```html
Copy code
<div class="box box2">Inline Flex Box</div>
```
```css
Copy code
.box2 {
  display: inline-flex;
  border: 2px solid red;
  padding: 20px;
  margin: 15px;
}
```
Explanation:

- `.box2` with `display: inline-flex `behaves like a flex container in an inline context.
- It has a red border, padding, and margin, showcasing inline flex behavior.




### Flex Direction
- Change flex direction when flexing inline.