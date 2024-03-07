# CSS Fonts and Color Properties

## 1. External Fonts and Fallbacks

### 1.1 Fallback Fonts
- Fallback fonts are used when the desired font is not available. 
- In the example below, the main font is COUI, and the fallback fonts are Tahoma, Geneva, Wardana, San Serif.

```css
/* CSS Example */
body {
  font-family: 'COUI', Tahoma, Geneva, Wardana, 'San Serif';
}
```

### 1.2 Changing Font Family
- To change the font family, use the `font-family` property. 
- It is advisable to include at least one generic font family to ensure compatibility across different systems.

```css
/* CSS Example */
body {
  font-family: 'COUI', sans-serif;
}
```

### 1.3 Other Font Properties
- Other font properties include `font style`, `font weight`, and `text decoration`. 

Here's an example:

```css
/* CSS Example */
h1 {
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
}
```
## 2. Including Fonts in CSS
### 2.1 Link or Import
There are two ways to include fonts in CSS: through a link or through import.

- 2.1.1 Using Import Statement
Include fonts using the `@import statement` within a style tag.

```css
/* CSS Example */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
}
```
- 2.1.2 Using Link Tag
Include fonts through a `link tag` in the HTML head.

```html
<!-- HTML Example -->
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap">
</head>
```
## 3. Fonts, Text, and Color Properties
### 3.1 Multiple Fonts
Multiple fonts can be added to a web page, but it is recommended not to use too many fonts.

```css
/* CSS Example */
body {
  font-family: 'Font1', 'Font2', sans-serif;
}
```
### 3.2 Font Size
Change the `font size` using different measurement units, such as pixels.

```css
/* CSS Example */
h1 {
  font-size: 32px;
}

p {
  font-size: 16px;
}
```
### 3.3 Default Line Height
Adjust the default `line height` using a multiplier.

```css
/* CSS Example */
body {
  line-height: 1.2; /* 120% of the font size */
}
```

### 3.4 Letter Spacing
Increase `letter spacing` to adjust the spacing between letters.

```css
/* CSS Example */
p {
  letter-spacing: 1px;
}
```

### 3.5 Text Transform
Capitalize the first letter or a word using `text transform`.

```css
/* CSS Example */
h1 {
  text-transform: capitalize;
}
```

### 3.6 Text Decoration
Use `text decoration` to underline text and change its color.

```css
/* CSS Example */
a {
  text-decoration: underline;
  color: #007bff; /* Blue color for the link */
}
```

### 3.7 Text Decoration Style
The `text-decoration-style` property allows you to add different styles like dotted, double, solid, wavy, etc. to your text.

```css
/* CSS Example */
a {
  text-decoration: underline;
  text-decoration-style: dotted;
}
```

### 3.8 Text Decoration Thickness
Use the `text-decoration-thickness` property to specify the thickness of the text decoration.

```css
/* CSS Example */
a {
  text-decoration: underline;
  text-decoration-thickness: 2px; /* Thickness of the underline */
}
```

## 4. Styling Text and Paragraphs
### 4.1 Increase Width
Illustrates how to increase the `width` of text and paragraphs.

```css
/* CSS Example */
p {
  width: 300px;
}
```

### 4.2 Text Overflow and Width
Use `text overflow` and `width` to control text wrapping and hiding overflow.

```css
/* CSS Example */
p {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 4.3 Word Break
Describes the `word-break` property and its effect on breaking words.

```css
/* CSS Example */
p {
  word-break: break-all;
}
```

### 4.4 Text Align
Covers the use of the `text-align` property to center text.

```css
/* CSS Example */
h1 {
  text-align: center;
}
```
- `text-align:` Specifies the horizontal alignment of text content within an element. In this case, center is used to horizontally center the text within the h1 element.

## 5. Importance of CSS Fonts, Text, and Color Properties
### 5.1 Crucial for Web Development
Understanding CSS fonts, text, and color properties is crucial for developing websites.

### 5.2 Control Text Aspects
CSS text properties allow for controlling various aspects of the text such as alignment, spacing, and style.

### 5.3 Enhance Visual Appeal
Knowing CSS color properties enables changing the color of elements, enhancing the visual appeal of the website.

## 6. Representing Color
### 6.1 Hex Color
Hex color is a way to represent color using hex values.

```css
/* CSS Example */
body {
  background-color: #f0f0f0;
  color: #333;
}
```

### 6.2 Other Color Representations
RGB, RGBA, and HSL are other ways to represent color.

```css
/* CSS Example */
p {
  color: rgba(255, 0, 0, 0.7); /* Red color with 70% opacity */
}
```

### 6.3 Specifying Colors
You can use hex color codes or color keywords to specify colors.

```css
/* CSS Example */
h2 {
  color: purple;
}
```

### 6.4 Working with RGB Values
RGB values can be used to generate any color by changing the red, green, and blue values.

```css
=/* CSS Example */
h3 {
  color: rgb(0, 128, 255); /* Blue color */
}
```

### 6.5 RGBA and Hex Color Codes
RGBA is similar to RGB, but with an additional alpha value for opacity. Hex color codes are commonly used in designs.

```css
/* CSS Example */
a {
  color: #007bff; /* Blue color using hex code */
  background-color: rgba(255, 255, 0, 0.5); 
  /* Yellow background with 50% opacity */
}
```