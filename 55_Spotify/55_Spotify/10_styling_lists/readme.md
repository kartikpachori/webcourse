#1. Introduction to Styling Lists using CSS
## 1.1 Purpose of the Navigation Bar
In a navigation bar, list items are typically organized using an unordered list, and CSS properties are applied to enhance styling.

# 2. Styling Lists using CSS
## 2.1 Creating a Navigation Bar
Learn how to create a navigation bar using an unordered list. Explore different styling options for lists.

```html
<nav>
    <ul class="first">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <ul class="second">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>
```

```css
.first {
    background-color: yellow;
    list-style-position: inside;
    border: 2px solid black;
}

.second {
    list-style: none;
    background-color: greenyellow;
    border: 2px solid green;
    border-radius: 10px;
    list-style-type: "❤️";
}
```
## 2.2 Default Rendering and Removing Markers
The default list has the display property set as 'list-item'. To remove the marker, change the display property to 'none'.

```css
.second {
    list-style: none;
    /* Other styles */
}
```
## 2.3 List Style Property
The most important property for list styling is list-style. Setting it to 'none' removes the marker. Different values, including 'devnagri', can be used.

```css
.second {
    list-style: none;
    /* Other styles */
}
```
## 2.4 Positioning List Markers
- The list marker can be positioned inside the list item using the '`list-style-position`' property. Background color and border styles can be applied to markers.
-  Otherwise, by default markers stay outside the box.

```css
.first {
    list-style-position: inside;
    /* Other styles */
}
```
2.5 Using Images as List Markers
Images can be used as list markers in CSS. If an image is inaccessible, a default marker will be shown. List style type can be set as an emoji.

```css
.second {
    list-style-type: "❤️";
    /* Other styles */
}
```
## 2.6 Understanding List Styling in CSS
Removing the URL or disk changes the appearance of the list. Exploring different list style images and shorthands. Using 'list-style: none' to remove default list styles.

```css
.second {
    list-style: none;
    /* Other styles */
}
```
## 2.7 Inline Style and Flex Display
Inline style is added using element.style. Flex display is used to make the list horizontal.

```css
.second {
    display: flex;
    /* Other styles */
}
```