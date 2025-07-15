# 🛩️ Pack Your Bags 🌏

A simple and interactive **packing list app** built with React. Add, check off, and delete items to help you plan your trips better! 🧳

## 📦 Project Structure

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 🧩 Features

- Add items with quantity and description
- Mark items as packed or unpacked
- Delete individual items
- Clear the full list
- Live statistics on how much you've packed

## 🚀 Getting Started

### 📁 Clone the repository

```bash
git clone https://github.com/satyam-gupta-git/to-do.git
cd to-do
```

### 📦 Install dependencies

Make sure you have Node.js installed.

```bash
npm install
```

### 🔥 Run the development server

```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects the configuration (not recommended unless necessary)

## 🧾 Components Overview

- `App.js` – Main component managing state and rendering child components
- `Form.js` – Handles new item creation
- `PackList.js` – Displays the list and handles toggling and deletion
- `Stats.js` – Shows the percentage of packed items
- `Logo.js` – Displays the project title

## 📁 File Structure

```
to-do/
├── node_modules/
├── public/
│ ├── index.html
│ └── palne icon.png
├── src/
│ ├── components/
│ │ ├── App.js
│ │ ├── Form.js
│ │ ├── Logo.js
│ │ ├── PackList.js
│ │ └── Stats.js
│ ├── index.css
│ └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## 🧪 Dependencies

```json
"react": "^19.1.0",
"react-dom": "^19.1.0",
"react-scripts": "5.0.1",
"@testing-library/react": "^16.3.0",
"@testing-library/jest-dom": "^6.6.3",
"@testing-library/user-event": "^13.5.0",
"web-vitals": "^2.1.4"
```

Happy packing! 🎒
