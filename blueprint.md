# Blueprint: Lotto Number Generator

## Overview

This is a modern web application that generates and displays a set of random lottery numbers. It features a polished UI with glassmorphism effects, a theme switcher, and a partnership inquiry form.

## Project Outline

### Version 1.0
*   **HTML Structure (`index.html`):** Basic layout with heading, container, and button.
*   **Styling (`style.css`):** Centered layout, clean color scheme, responsive design.
*   **Functionality (`main.js`):** Random number generation and dynamic display.

### Version 1.1 (Enhancement)
*   **Modern Aesthetics:** Added 'Poppins' typography, background gradients, and ball animations.
*   **Animated Interaction:** Lotto balls appear one by one with a pop-in effect.

### Version 1.2 (Theme System)
*   **Theme Switcher:** Added Dark Mode and Light Mode support with `localStorage` persistence.
*   **Modern CSS:** Implemented theme variables using `oklch` color space and glassmorphism.

### Version 1.3 (Partnership Form)
*   **Inquiry Form:** Added a partnership inquiry section powered by **Formspree**.
*   **AJAX Submission:** Implemented seamless form submission using the `fetch` API to prevent page reloads.
*   **Form UX:** Added loading states and success/error messaging for user feedback.

## Current Plan

**Request:** Add a partnership inquiry form using Formspree and deploy.

**Steps:**
1.  Add the form structure to `index.html` using the provided Formspree endpoint.
2.  Update `style.css` to include styles for form inputs, textareas, and submission feedback.
3.  Add AJAX handling in `main.js` for a modern submission experience.
4.  Push changes to GitHub.
