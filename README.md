# 🌐 Octanet Web Development Internship

A collection of web development projects built during the Octanet internship program.

---

## 📁 Projects

### 1. ☕ Coffee Landing Page
A responsive coffee shop landing page with smooth animations and a mobile-friendly navigation menu.

**Features:**
- Fixed responsive navbar with hamburger menu for mobile
- Parallax mouse-move effect on the hero image
- Smooth GSAP entrance animations
- Clean dark coffee-themed design

### 2. ✅ To-Do List
A clean and functional to-do list app with persistent storage.

**Features:**
- Add tasks via button click or pressing **Enter**
- Mark tasks as complete with strikethrough
- Delete tasks
- Tasks saved to **localStorage** — persist across page refreshes

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Font Awesome 6](https://fontawesome.com/) — icons
- [GSAP 3](https://greensock.com/gsap/) — animations (Landing Page)
- [Google Fonts](https://fonts.google.com/) — typography

---

## 🚀 How to Run

Clone the repository:

```bash
git clone https://github.com/Anjalee-29/Octanet-WD-internship.git
cd Octanet-WD-internship
```

No installation needed — just open the HTML files in your browser:

**Landing Page:**
```
landing-page/index.html
```

**To-Do List:**
```
todo-list/index.html
```

---

## 📁 Project Structure

```
├── landing-page/
│   ├── index.html       # Landing page markup
│   ├── style.css        # Landing page styles
│   └── script.js        # Navbar toggle + parallax + GSAP animations
│
├── todo-list/
│   ├── index.html       # To-do list markup
│   ├── style.css        # To-do list styles
│   └── script.js        # Add, check, delete, and persist tasks
│
└── README.md
```
## 📝 Notes

- Both projects are fully client-side — no backend or installation required
- The To-Do List uses `localStorage` to persist tasks across page refreshes
- All external libraries (Font Awesome, GSAP, Google Fonts) are loaded via CDN — an internet connection is required
