# ClickyUI – A Mini UI Library

## Overview
ClickyUI is a lightweight, audio-driven UI library that offers interactive components with subtle audio feedback to enhance user engagement. It's built for quick and easy integration into your projects.

## Component Structure
- **Components**: Found in the `clicky-components` directory, including:
  - **Button**: A customizable button component with interactive audio cues.
  - **Textarea**: An input field that provides tactile audio feedback with every keystroke.
  - **WheelPicker**: A selector component that plays sounds during scroll and click actions.
  - *More coming soon!*

## Installation & Usage
1.  **Install Dependencies**: You need `use-sound` for audio playback and `file-loader` to handle the `.wav` sound files.
    ```bash
    npm install use-sound
    npm install --save-dev file-loader
    ```
2.  **Configure Next.js (if applicable)**: If you are using Next.js, you need to configure `next.config.mjs` (or `.js`) to handle `.wav` files using `file-loader`. Add the following webpack configuration:
    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
        webpack: (config) => {
            config.module.rules.push({
                test: /\.(wav|mp3)$/, // Include mp3 if you use those too
                use: {
                    loader: "file-loader",
                    options: {
                        publicPath: "/_next/static/media",
                        outputPath: "static/media",
                        name: "[name].[hash].[ext]",
                        esModule: false, // Important for useSound to work correctly
                    },
                },
            });
            return config;
        },
    };

    export default nextConfig; // or module.exports = nextConfig; for CJS
    ```
3.  **Copy Components**: Copy the required component folders from the `clicky-components` directory into your project. Copying the whole folder ensures you grab all the logic and sound files at once.
4.  **Import and Use**: Import the components into your code and integrate them as needed. For example, import the Button and Textarea components directly into your React components.
5.  **Include MuteProvider (Mandatory)**: For the ClickyUI components to work correctly, you must include the MuteProvider.


### MuteProvider (Mandatory – READ SO YOUR CODE CAN RUN)
The `MuteProvider` located in `contexts/MuteProvider.js` is essential for managing audio feedback across the UI. Without it, the code will not run properly. Make sure to wrap your application (or the relevant component subtree) with the MuteProvider to enable audio settings and accessibility features.

If you're insistent on skipping this step, you can comment `const {mute} = useMute();` and replace it with `const {mute} = true;` 

## Customization
The components are built to be flexible. Customize styles and behaviors by modifying the code or adding your own CSS. Inline comments in the component files provide guidance for further customization.

ClickyUI offers a simple, accessible, and interactive solution to elevate your user interface with minimal configuration.
