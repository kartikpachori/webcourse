# CSS Animations Tutorial

Welcome to the CSS Animations tutorial! In this tutorial, we'll explore the basics of CSS animations, covering transitions, keyframes, and the animation shorthand property.

## Transitions in CSS

Transitions in CSS allow you to smoothly animate changes in property values. They are great for simple animations and can make your website look more dynamic.

### Example Usage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Transitions Example</title>
  <style>
    /* Define the transition property */
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      transition: width 0.5s ease-in-out;
    }

    /* Add hover effect */
    .box:hover {
      width: 200px;
    }
  </style>
</head>
<body>

  <!-- HTML content -->
  <div class="box"></div>

</body>
</html>
```
## CSS Animations
While transitions are great for simple animations, CSS animations provide more control, allowing you to define keyframes and customize the animation properties.

Example Usage:
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animations Example</title>
  <style>
    /* Define animation keyframes */
    @keyframes harrysAnimation {
      0% { transform: scaleX(1); background-color: red; }
      50% { transform: scaleX(1.5); background-color: yellow; }
      100% { transform: scaleX(1); background-color: red; }
    }

    /* Apply animation to an element */
    .animated-box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      animation: harrysAnimation 3s infinite alternate;
    }
  </style>
</head>
<body>

  <!-- HTML content -->
  <div class="animated-box"></div>

</body>
</html>
```
## Animation Shorthand
For lazy developers (like us!), CSS provides a shorthand property for animations, making it more convenient to set multiple animation properties in one go.

Example Usage:
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animation Shorthand Example</title>
  <style>
    /* Apply animation shorthand */
    .lazy-box {
      width: 100px;
      height: 100px;
      background-color: lightgreen;
      animation: harrysAnimation 3s infinite alternate, upperHarry 3s 3s infinite;
    }
  </style>
</head>
<body>

  <!-- HTML content -->
  <div class="lazy-box"></div>

</body>
</html>
```