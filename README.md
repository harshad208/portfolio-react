# 🌐 Personal Portfolio - Harshad Yadav

A modern, responsive single-page developer portfolio built using **React** with **Vite**, styled with **Tailwind CSS**, and designed to showcase projects, articles, and contact info.  
Live version: [https://harshad-yadav-portfolio.netlify.app]


## 🚀 Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide, FontAwesome
- **Deployment**: Netlify
- **Version Control**: Git + GitHub

---

## 📁 Folder Structure

```

portfolio/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI sections (Navbar, Hero, About, etc.)
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Tailwind base styles
├── .gitignore
├── README.md
├── vite.config.js
└── package.json

````

---

## 🛠️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/harshad208/portfolio.git
cd portfolio
````

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The app should now be running at `http://localhost:5173`.

---

## 🧩 Components Overview

* `Navbar.jsx`: Sticky navigation with smooth scrolling.
* `Hero.jsx`: Intro section with name, tagline, and call to action.
* `About.jsx`: Short biography and skills summary.
* `Projects.jsx`: Displays featured projects with tech stack.
* `MediumArticles.jsx`: Lists technical blogs with summaries and links.
* `Contact.jsx`: Contact details and resume download button.

---

## 📄 Adding Your Own Info

Edit the following files:

* **Bio/About** → `About.jsx`
* **Projects** → `Projects.jsx`
* **Articles** → `MediumArticles.jsx`
* **Email/Links/Resume** → `Contact.jsx`

Replace the placeholder content with your own.

---

## 🧪 Customization Tips

* Tailwind color palette has been customized to use:

  * `#606C38`, `#283618`, `#FEFAE0`, `#DDA15E`, `#BC6C25`
* Icons used from:

  * [Lucide](https://lucide.dev/) (`lucide-react`)
  * [FontAwesome](https://fontawesome.com)

---

## 🧳 Deploy to Netlify

1. Push code to GitHub.
2. Log in to [Netlify](https://netlify.com).
3. Click "New Site from Git" → Connect your repo.
4. Set build command: `npm run build`
5. Set publish directory: `dist`

Done! 🎉

---
