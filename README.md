# ClickyUI – A Mini UI Library

## Overview
ClickyUI is a lightweight, audio-driven UI library that offers interactive components with subtle audio feedback to enhance user engagement. It’s built for quick and easy integration into your projects.

## Component Structure
- **Components**: Found in the `components` directory, including:
  - **Button**: A customizable button component with interactive audio cues.
  - **Textarea**: An input field that provides tactile audio feedback with every keystroke.
  - **WheelPicker**: A selector component that plays sounds during scroll and click actions.
  - *More coming soon!*

## Usage
- Copy the required component folders from the `components` directory into your project. Copying the whole folder ensures you grab all the logic and sound files at once.
- Import the components into your code and integrate them as needed. For example, import the Button and Textarea components directly into your React components.
- **Important:** For the ClickyUI components to work correctly, you must include the MuteProvider.


### MuteProvider (Mandatory – READ SO YOUR CODE CAN RUN)
The `MuteProvider` located in `contexts/MuteProvider.js` is essential for managing audio feedback across the UI. Without it, the code will not run properly. Make sure to wrap your application (or the relevant component subtree) with the MuteProvider to enable audio settings and accessibility features.

If you're insistent on skipping this step, you can comment `const {mute} = useMute();` and replace it with `const {mute} = true;` 

## Customization
The components are built to be flexible. Customize styles and behaviors by modifying the code or adding your own CSS. Inline comments in the component files provide guidance for further customization.

ClickyUI offers a simple, accessible, and interactive solution to elevate your user interface with minimal configuration.
