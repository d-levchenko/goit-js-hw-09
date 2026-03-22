# HW 09 — Image Gallery and Feedback Form

A collection of vanilla JavaScript tasks including an image gallery with
lightbox functionality and a feedback form with local storage persistence.

## Description

This project contains two main components built with vanilla JavaScript:

1. **Image Gallery**: Renders a dynamic image gallery from a JavaScript array of
   objects. Each image opens in a fullscreen lightbox modal with smooth overlay,
   caption display, and previous/next navigation.

2. **Feedback Form**: A form that saves user input to localStorage and includes
   validation to ensure all fields are filled before submission.

Both components are built without any frameworks — pure HTML, CSS, and
JavaScript.

## Features

### Image Gallery

- Dynamic gallery rendering from an array of image objects
- Fullscreen lightbox modal on image click
- Previous / next navigation between images
- Alt text displayed as caption with a configurable delay
- Custom overlay background color and opacity
- Responsive image grid layout
- No page reload required

### Feedback Form

- Real-time saving of form data to localStorage
- Form state restoration on page reload
- Input validation with custom error messages
- Form reset after successful submission
- Local storage cleanup after submission
