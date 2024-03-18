## Introduction

Selectors in CSS are essential for styling elements on a webpage. They can target elements based on various attributes such as id, class, and name.

### Selectors Basics

- **Element Selector:** Styles applied to all elements of a specific type.
- **Class Selector:** Styles applied to elements with a specific class.

## Specific Selectors

### Element Selector

```css
/* Apply styles to all paragraphs */
p {
  /* Styles here */
}
```

### Class Selector

```css
/* Apply styles to elements with class 'example' */
.example {
  /* Styles here */
}
```

### Different CSS Selectors
* Class Selector: Select elements with a specific class.
* ID Selector: Select elements with a specific ID.
* Child Selector: Select direct children of a specific parent.

```css
/* Apply styles to all paragraphs */
p {
  /* Styles here */
}
```

### ID Selector

```css
/* Select the element with ID 'uniqueElement' */
#uniqueElement {
  /* Styles here */
}
```

## Group Selector
The group selector is used to minimise the code. Commas "," are used to separate each selector in a grouping. This reduces the number of lines of code. The code also looks clean.

The syntax of Group Selector is as follows:

```css
  div, p, a {
      property : value;
  }
```
### Child Selector
```css
/* Select direct children paragraphs of a div */
div > p {
  /* Styles here */
}
```

### Descendant Selector
```css
/* Apply styles to paragraphs that are descendants of a div */
div p {
  /* Styles here */
}

```

### Universal Selector
```css
/* Apply margin and padding to all elements */
* {
  margin: 0;
  padding: 0;
}

```

### Active, Hover, and First Child

```css
/* Styles for active links */
a:active {
  /* Styles here */
}

/* Styles for hover effect on links */
a:hover {
  /* Styles here */
}

/* Styles for the first child of a parent element */
parentElement :first-child {
  /* Styles here */
}

```
### Pseudo Classes in Web Development

Pseudo classes like `:first-child` and `:nth-child` can be used to apply styling to specific elements. They are rarely used and may require additional research to fully understand their functionality.

```css
/* Apply styles to the first child of a parent element */
parentElement :first-child {
  /* Styles here */
}

parentElement :nth-child(2) {
  /* Styles here */
}

```