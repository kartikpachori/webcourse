## Introduction
The document discusses three methods to add CSS to an HTML page: Inline CSS, Internal CSS, and External CSS. Each method has its use cases and best practices.

## Three Ways to Add CSS to HTML

### Inline CSS
Inline CSS involves adding style attributes directly to HTML elements. It is the simplest but less recommended method.

Example:
```html
<p style="color: red;">This is a red paragraph.</p>
```

##  Internal CSS


## Example:

```html
Copy code
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
<body>
    <p>This is a blue paragraph.</p>
</body>
</html>
```

## External CSS
External CSS involves creating a separate .css file to store styles, which is linked to the HTML file.

## Example (styles.css):

```css
Copy code
/* styles.css */
p {
    font-size: 16px;
    color: green;
}
```

```html
Copy code
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <p>This is a green paragraph with styles from an external CSS file.</p>
</body>
</html>
```
Applying CSS Methods
Inline CSS vs Internal CSS
Inline CSS is applied using style attributes on individual elements.
Internal CSS is applied using style tags in the head section of the HTML document.
Bulk Editing CSS
To efficiently update multiple elements:

Avoid repeating 'style' attributes for each element.
Use internal or external CSS for bulk editing.
External CSS Best Practices
Introduction to External CSS
External CSS involves writing CSS in a separate file, enhancing code organization.

## Benefits of External CSS
- Prevents HTML file and style tag growth.
- Facilitates bulk editing and maintenance.
- Enables collaboration by separating HTML and CSS responsibilities.
Linking External CSS
Use the <link> tag to connect the external CSS file to HTML.

Example:

```html
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
```

## Inline CSS vs External CSS
- `Inline CSS` is recommended for specific cases only.
- `External CSS` is preferred for production-grade websites and follows best practices.