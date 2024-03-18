# Web Development Exercise 4 - Multicolor Navbar
## Introduction
This README provides a detailed explanation and solution for Exercise 4 of the web development series. In this exercise, we were tasked with creating a multicolor website with a navigation bar that can change colors using CSS variables.

# Table of Contents
Overview
Folder Structure
Color Themes
Adding Logo to Navbar
Acknowledgments
## 1. Overview
This exercise focuses on creating a dynamic and visually appealing multicolor website. The navigation bar's color scheme is easily customizable using CSS variables, allowing for different color themes.

## 2. Folder Structure
The project folder structure is organized as follows:

plaintext
```
/SigmaWebDevelopmentCourse
|-- /video36
|   |-- index.html
|   |-- style.css
```

index.html: Main HTML file for the website.
style.css: CSS file containing styles for the multicolor navbar and other elements.
## 3. Color Themes
The website supports multiple color themes by leveraging CSS variables. These variables are defined in the style.css file to easily switch between different color schemes. Example color themes include:

Green Theme
Blue Theme
Dark Blue Theme
To change the color theme, simply modify the values of the CSS variables in the style.css file.

```css

:root {
  --primary-color: #008000;  /* Darker Green */
  --secondary-color: #FFFFFF;  /* White */
  --text-color: #FFFFFF;  /* White Text */
}

/* ... rest of the CSS rules ... */
```
## 4. Adding Logo to Navbar
To enhance the navbar, a logo can be easily added. Simply insert an <img> tag within the navbar's <div> in the index.html file. Customize the src attribute with the path to your logo.

```html

<!-- Inside the navbar div -->
<div class="logo-container">
  <img src="path/to/logo.png" alt="Logo">
</div>
```

Update the styles in the style.css file to ensure proper positioning and alignment of the logo within the navbar.

```css
/* Logo styling */
.logo-container {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.logo-container img {
  width: 40px;  /* Adjust the logo width as needed */
  height: auto;
  margin-right: 5px;
}
```