# Image Converter & Editor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://opensource.org/licenses/MIT)

A **free and open‑source** web-based tool that lets you convert, resize, compress, and edit images—all in one modern, responsive, and installable Progressive Web App (PWA).

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Advanced Features](#advanced-features)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Additional Documentation](#additional-documentation)

## Features

- **Image Conversion:** Convert images between PNG, JPEG, and WebP formats.
- **Image Resizing:** Optionally adjust width and height; if only one dimension is provided, the aspect ratio is preserved.
- **Compression:** Adjust image quality for JPEG/WebP formats with a slider.
- **PWA Integration:** The app is installable and works offline via a manifest and service worker.
- **Dark Mode:** Easily toggle between light and dark themes.
- **Live Preview & Toast Notifications:** See a live preview of your uploaded image and receive a notification when processing is complete.
- **Drag & Drop Upload:** User-friendly image upload via drag-and-drop.
- **Advanced Editing (Planned):** Future enhancements include cropping, rotating, applying filters, and adding watermarks.

## Demo

View the live demo on GitHub Pages:  
[Live Demo](https://yourusername.github.io/your-repo-name)

*If available, include screenshots or animated GIFs below:*

![Screenshot of Image Converter & Editor](screenshot.png)

## Installation

To run this project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
Open the Project

This is a static web application. Simply open the index.html file directly in your browser.
Alternatively, you can use a local development server:

bash
Copy
Edit
npx http-server .
Deploy to GitHub Pages

Push your repository to GitHub.
In your repository’s Settings, navigate to the GitHub Pages section.
Select the source branch (e.g., main) and the root folder.
Save and visit the provided URL.
Usage
Upload an Image:
Click on the dropzone or drag and drop your image file into it.

Preview:
A live preview of the image will appear on the page.

Select Output Format:
Choose between PNG, JPEG, or WebP from the dropdown menu.

Resize (Optional):
Enter new width and/or height values. If you provide only one value, the tool will automatically preserve the aspect ratio.

Adjust Compression:
Use the quality slider to set the compression level for JPEG or WebP formats (this option is ignored for PNG).

Convert:
Click the Convert Image button. When the conversion is complete, a download link will appear.

Download:
Click the download link to save your converted image.

Advanced Features
Progressive Web App (PWA):
The app includes a manifest.json and service-worker.js for offline functionality and installability.

Dark Mode Toggle:
Switch between light and dark themes with the toggle in the header.

Future Enhancements:
Planned features include additional image editing capabilities like cropping, rotating, filtering, watermarking, and batch processing.

Contributing
Contributions are welcome! Please review our CONTRIBUTING.md file for detailed guidelines on how to contribute.

How to Contribute
Fork the Repository:
Click the "Fork" button on GitHub.

Create a New Branch:

bash
Copy
Edit
git checkout -b feature/your-feature-name
Commit Your Changes:

bash
Copy
Edit
git commit -m "Add feature or fix issue"
Push to Your Branch:

bash
Copy
Edit
git push origin feature/your-feature-name
Open a Pull Request:
Submit a pull request to the main branch.

If you find any issues, please open an issue.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Libraries & Resources:
Cropper.js for potential cropping functionality.
CamanJS for image filtering inspiration.
Google Fonts (for the Roboto font).
Open Source Community:
Thanks to the developers and contributors who make open-source projects possible.
