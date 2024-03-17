# 3 Ways to Add CSS to an HTML Page

## Inline CSS

- Used to apply styles directly within an HTML element using the `style` attribute.
- Quick and easy for small amounts of CSS, but not recommended for larger styles or multiple HTML elements.
- Example

  ```html
  <p style="color: blue;">This text will appear blue.</p>
## Internal CSS

- Applied within the HTML document using the `<style>` tag in the `<head>` section.
- Allows for styling multiple elements within the same HTML file.
- Example:

  ```html
  <!-- Internal CSS -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Web Page</title>
      
      <style>
          body {
              background-color: #f0f0f0;
              font-family: Arial, sans-serif;
          }

          h1 {
              color: #333;
          }
      </style>
  </head>
  <body>
      <!-- Content goes here -->
  </body>
  </html>

## External CSS

- Styles are written in a separate CSS file and linked to the HTML document.

- Ideal for maintaining a clean and organized structure, especially for larger projects.

Example:

  ```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
    
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <!-- Content goes here -->
</body>
</html>