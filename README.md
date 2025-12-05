<h1 align="center">📡 Useless Facts Broadcast</h1>

## 📖 About the Project

**Useless Facts Broadcast** is a retro-styled Single Page Application that simulates an old transmission console capable of tuning into random useless facts.  
The project was developed as part of the FemCoders bootcamp, following a professional workflow involving **Atomic Design**, **modular JavaScript**, **API integration**, and **unit testing with Vitest**.

The application interacts with the public _Useless Facts API_ to fetch either the fact of the day or a random fact. Users can save them to a favorites panel, delete them, and navigate through a fully SPA experience without page reloads.

This project was built individually using **HTML, CSS, JavaScript, and Vite**, without frameworks.

### 🎯 Project Objectives

- Build a fully functional SPA using modern JavaScript
- Consume an external API with robust error handling
- Implement a persistent favorites system
- Design a retro CRT interface using Atomic Design
- Write unit tests using Vitest
- Apply Gitflow and Agile methodologies

---

## ✨ Key Features

- 📡 **Random fact transmission** via the “Tune Signal” button
- 🔮 **Auto-load of today’s fact** on page initialization
- 🧹 **Clean fact replacement** with no leftover DOM nodes
- ⭐ **Favorites system** stored in localStorage
- ❌ **Delete favorites** with immediate re-render
- 🔁 **SPA behavior** without reloading the page
- ⚠️ **Loading, error, and feedback states**
- 🧪 **Two unit tests** (fetch + favorites)
- 🎨 **Figma design system** following Atomic Design
- 🖥️ **High-fidelity CRT mockup**

---

## 🛠️ Technologies Used

| Technology      | Purpose                               |
| --------------- | ------------------------------------- |
| HTML5           | Structure & semantics                 |
| CSS3            | Styling, layout & retro CRT aesthetic |
| JavaScript ES6+ | Logic, DOM manipulation               |
| Vitest          | Unit testing                          |
| Git & GitHub    | Version control, Gitflow workflow     |
| Figma           | UI/UX design (Atomic Design)          |

---

## 📁 Project Structure

```
USELESS-FACTS-BROADCAST/
│
├── src/
│ ├── assets/
│ │ ├── css/
│ │ │ └── style.css → Main styles
│ │ └── image/ → Graphic resources
│ │
│ ├── js/
│ │ ├── app.js → Core logic (fetch, SPA flow)
│ │ ├── initApp.js → App initialization
│ │ ├── storage.js → Favorites management
│ │ ├── ui.js → DOM rendering & UI states
│ │
│ └── index.html → Main HTML file
│
├── test/
│ ├── addToFavorites.test.js → Favorites system tests
│ └── fetchRandomFact.test.js → Fetch + error handling tests
│
├── vitest.config.js → Vite configuration
├── package.json → Dependencies & scripts
├── README.md → Project documentation
└── .gitignore
```

---

## 🚀 Installation & Usage

### Requirements

- **Node.js** installed
- Vitest (installed automatically through dependencies)

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-username/curious-facts-broadcast.git
cd useless-facts-broadcast
```

2. Open the project in VS Code
   code .

3. Install dependencies
   npm install

4. Start Vite’s dev server
   npm run dev

The project will automatically open at:

http://localhost:5173

## 🧪 Testing

This project includes **unit tests written with Vitest**.

### ✔ addToFavorites.test.js

- Adds a fact successfully
- Prevents duplicates
- Validates internal state via `getFavorites()`

### ✔ fetchRandomFact.test.js

- Mocks `fetch` using `vi.stubGlobal()`
- Tests successful API responses
- Ensures proper error handling when the API fails

To run all tests:

```bash
npm run test

```

---

## 🎨 Design & UX

The UI was designed in **Figma**, following the _Atomic Design_ methodology.

### Atoms

- Color palette
- Typography styles
- Base buttons
- CRT indicators

### Molecules

- Tune button
- Save button
- Favorites card

### Organisms

- CRT screen
- Favorites panel
- Error screen

Also included:

- Low-fidelity wireframe
- High-fidelity mockup
- Userflow diagram

---

## 👩‍💻 Developer

This project was developed by:

| Developer                   | Role                       | GitHub                                        |
| --------------------------- | -------------------------- | --------------------------------------------- |
| **Marie-Charlotte Doulcet** | Fullstack Junior Developer | [GitHub](https://github.com/Charlottedoulcet) |

> 💜 Project developed during the **FemCoders P8 Barcelona Bootcamp 2025**

---

## 🌱 Future Improvements

- 📱 Fully responsive version
- 🎞 Advanced animations (CRT flicker, glow, static noise)
- ⭐ Improved Favorites system (structured objects, IDs)
- 👤 User accounts with login + cloud storage
- 🌍 Multilanguage support
- ⚛ Possible migration to React or Vue
- 🔧 Component-based architecture refactor

---
