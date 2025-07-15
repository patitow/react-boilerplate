<div align="left" style="position: relative; z-index: 0;">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/react.svg" align="right" width="30%" style="margin: -20px 0 0 20px; z-index: 1;">
<h1>REACT-BOILERPLATE</h1>
<p align="left">
	<em>A modern React boilerplate for fast and scalable web apps.</em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/patitow/react-boilerplate?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/patitow/react-boilerplate?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/patitow/react-boilerplate?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/patitow/react-boilerplate?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

## 🔗 Table of Contents

- [🔗 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🤖 Usage](#-usage)

---

## 📍 Overview
<code>This boilerplate provides a ready-to-use React setup powered by Vite and TypeScript. It includes a sensible folder structure, ESLint configuration, and example pages to help you kickstart your next web project with best practices out of the box.</code>

---

## 👾 Features
- ⚡️ Fast development with Vite
- 🦾 TypeScript support
- 🧩 Modular folder structure
- 🛠 ESLint pre-configured
- 🗂 Example page and routing setup
- 🖌️ CSS support with example styling
- 🔬 Ready for testing integration

---

## 📁 Project Structure
```sh
└── react-boilerplate/
  ├── README.md
  ├── eslint.config.js
  ├── index.html
  ├── package-lock.json
  ├── package.json
  ├── public
  │   └── vite.svg
  ├── src
  │   ├── app.tsx
  │   ├── index.css
  │   ├── main.tsx
  │   └── vite-env.d.ts
  └── tsconfig.json
```

### 📂 Project Index
- [main.tsx](https://github.com/patitow/react-boilerplate/blob/master/src/main.tsx) - React app entry point, renders the root component.
- [app.tsx](https://github.com/patitow/react-boilerplate/blob/master/src/app.tsx) - Main App component.
- [index.css](https://github.com/patitow/react-boilerplate/blob/master/src/index.css) - Global CSS styles for the app.
- [vite-env.d.ts](https://github.com/patitow/react-boilerplate/blob/master/src/vite-env.d.ts) - TypeScript types for Vite environment.

---

## 🤖 Usage
1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/patitow/react-boilerplate.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
    - Install dependencies:
    ```sh
    npm install
    ```
    - Start the development server:
    ```sh
    npm run dev
    ```
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
    ```