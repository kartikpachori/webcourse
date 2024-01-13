# CSS Variables

## Introduction

- **Purpose:** Simplify theme customization in website development.
- **Use of variables:** Change multiple elements by modifying a single variable.

## 1. Variable Declaration

### Global Variable:

- **Declaration:** Defined in the root of the stylesheet.
- **Example:** `:root { --color: blue; }`.
- **Purpose:** Holds global values for reuse throughout the stylesheet.

### Local Variable:

- **Declaration:** Defined within a specific block or selector.
- **Example:** `.selector { --local-color: red; }`.
- **Purpose:** Overrides global variables locally for specialized styles.

## 2. Using Variables in Styles

- **Applying Variables:**
  - **Syntax:** `var(--variable-name)`.
  - **Example:** `color: var(--color);`.
  - **Purpose:** Allows dynamic use of variable values in style properties.

- **Fallback Values:**
  - **Usage:** Provide fallback values in case a variable is undefined.
  - **Example:** `color: var(--color, blue);`.
  - **Purpose:** Ensures graceful degradation when a variable is not defined.

## 3. Changing Themes Dynamically

### Global Theme Variables:

- **Definition:** Global variables defining theme colors.
- **Example:** `:root { --primary-color: blue; --secondary-color: lightblue; }`.
- **Purpose:** Facilitates easy theme changes by modifying a few variables.

### Local Theme Overrides:

- **Application:** Change theme locally within a specific block or selector.
- **Example:** `.nav { --color: green; }`.
- **Purpose:** Enables specific elements to deviate from the global theme.

## 4. Using Variables for Various Properties

- **Color Variables:**
  - **Example:** `--text-color: #333; --background-color: #f0f0f0;`.
  - **Usage:** Define colors for text, background, borders, etc.
  - **Purpose:** Centralizes color values for consistency.

- **Size Variables:**
  - **Example:** `--padding: 10px; --margin: 20px;`.
  - **Usage:** Specify sizes for padding, margin, and other dimensions.
  - **Purpose:** Simplifies size adjustments across the website.

- **Opacity Variables:**
  - **Example:** `--opacity: 0.5;`.
  - **Usage:** Control opacity for various elements.
  - **Purpose:** Offers flexibility in managing element transparency.

## 5. Dynamic Changes with Variables

### Dynamic Opacity Example:

- **Implementation:** Change the default opacity for various elements dynamically.
- **Example:** `--default-opacity: 0.4;`.
- **Purpose:** Allows dynamic adjustments to default opacity settings.

### Dynamic Padding Example:

- **Adjustment:** Change default padding globally.
- **Example:** `--default-padding: 15px;`.
- **Purpose:** Provides a simple way to modify default padding values.

## 6. Benefits of CSS Variables

- **Consistency:**
  - **Aspect:** Maintain consistent styles across the website.
  - **Effect:** Enhances overall design coherence.

- **Flexibility:**
  - **Aspect:** Allow users to customize themes without extensive code changes.
  - **Effect:** Increases adaptability to user preferences.

## 7. Practical Application

- **Real-world Scenario:**
  - **Usage:** Apply variables in a website's stylesheet.
  - **Example:** Dynamically change themes by modifying variables.
  - **Purpose:** Demonstrates practical implementation for efficient styling.

## Conclusion

- **Summary:**
  - **Key Point:** CSS variables simplify theme customization.
  - **Action:** Modify one variable to change multiple styles.

- **Usage Recommendations:**
  - **Advice:** Use variables for colors, sizes, and other consistent styles.
  - **Benefit:** Enhance code readability and maintainability.

## Output of the code 
![Alt Text](output.png)



## Examples: HTML and CSS

### HTML Structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Variables Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="box">This is a box with dynamic styles</div>
</body>
</html>
```

## CSS Styles (styles.css):

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

.box {
  background-color: var(--primary-color);
  color: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
}
```