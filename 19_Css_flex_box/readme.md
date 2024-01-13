# Flexbox Properties

## 1. `justify-content` and `align-items`
- **Description:** Control horizontal and vertical alignment of items within a flex container.
- **Code Example:**

  ```css
  .flex-container {
    display: flex;
    justify-content: center; /* Horizontal alignment */
    align-items: center; /* Vertical alignment */
  }
## 2. `flex-direction`
- **Description:** Determines the main axis for item layout (horizontal or vertical).
Code Example:
- **Code Example:**
  ```css
  .flex-container {
        display: flex;
        flex-direction: row; /* Horizontal layout */
    }
    
Other options:- 
- `row:` Items arranged horizontally from left to right.
- `row-reverse:` Items arranged horizontally from right to left.
- `column:` Items arranged vertically from top to bottom.
- `column-reverse:` Items arranged vertically from bottom to top.

## 3. `Flex Axis`
- Description: The main axis determined by flex-direction.

```css
.flex-container {
  display: flex;
  flex-direction: row; /* Horizontal layout */
}
```

## 4. `flex-wrap`
Description: Specifies whether items wrap onto a new line when space is limited.
- **Code Example:**
  ```css
  .flex-container {
    display: flex;
    flex-wrap: wrap; /* Wrap items onto a new line */
    justify-content: center; /* Horizontal alignment */
    align-items: center; /* Vertical alignment */
  }
  ```

## 6. `flex-flow`
- **Description:** A shorthand property for combining flex-direction and flex-wrap.
- **Code Example:**
  ```css
  .flex-container {
        display: flex;
        flex-flow: column wrap; /* Vertical layout with wrapping */
    }

## 7. `gap` Property

**Description**
- Sets spacing between grid or flex items, replacing older gap properties.

## Code Example
```css
.flex-container {
  display: flex;
  gap: 10px; /* Set spacing between items */
}
```


## 8. `order` Property - `order_property.md`

# `order` Property

**Description**
- Changes the visual order of flex items without altering the source code order.

## Code Example
```css
.flex-item {
  order: 2; /* Change visual order */
}
```


## 9. `row-gap` and `column-gap`
- **Description:** Older properties for gaps in flex containers, replaced by the `gap` property.

## 10. `flex-grow` and `flex-shrink`
- **Description:** Control how items expand and contract based on available space.

## 11. `align-self`
- **Description:** Overrides `align-items` for individual flex items, allowing custom alignment.
- **Code Example:**
  ```css
  .flex-item {
    align-self: flex-end; /* Custom alignment for a specific item */
  }