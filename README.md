# Student Portal

> A collaborative React project for learning Git and GitHub through real code contributions.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Setup Instructions](#setup-instructions)
4. [Project Structure](#project-structure)
5. [Student Task Assignments](#student-task-assignments)
6. [Git Workflow](#git-workflow)
7. [Branch Naming Convention](#branch-naming-convention)
8. [Pull Request Instructions](#pull-request-instructions)
9. [Contribution Guidelines](#contribution-guidelines)

---

## Project Overview

**Student Portal** is a React application built with Vite that acts as a learning platform. It is intentionally left **partially implemented** so that each student can contribute a specific feature through a Pull Request.

By working on this project you will practise:

- Cloning a repository
- Creating feature branches
- Writing clean, readable code
- Submitting Pull Requests
- Reviewing teammates' code
- Resolving merge conflicts

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI library |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [React Router DOM 6](https://reactrouter.com/) | Client-side routing |
| CSS (vanilla) | Styling |

---

## Setup Instructions

> **Prerequisites:** You must have [Node.js](https://nodejs.org/) (v18 or later) and [Git](https://git-scm.com/) installed.

```bash
# 1. Clone the repository
git clone https://github.com/<your-org>/student-portal.git

# 2. Navigate into the project folder
cd student-portal

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open your browser and go to **http://localhost:5173**.

### Other Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
student-portal/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Nnadozie Chibuikem Thaddeus (@teddyfx33)
│   │   ├── Footer.jsx       # Osuji McDonald Chiemela (@donalddev1)
│   │   └── StudentCard.jsx  # Orji Chiagozielam Anthony (@anthony7789)
│   ├── pages/
│   │   ├── Home.jsx         # Shared / landing page
│   │   ├── Login.jsx        # Achilonu Great Antonio (@h3isgreat)
│   │   ├── Register.jsx     # Nwauwa Divine-Promises (@Divinepromises)
│   │   ├── Dashboard.jsx    # Chukwuebuka Chibundu Chidiebere (@ebukachidiebere050-bit)
│   │   └── Profile.jsx      # Oparaeke George Chinomso (@George-70)
│   ├── App.jsx              # Root component & routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles (Amuzie Petra adds responsiveness)
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md                # Ahaneku Alexander Ugochukwu (@Melloyung)
```

---

## Student Task Assignments

| # | Name | GitHub | File(s) | Task |
|---|------|--------|---------|------|
| 1 | Nnadozie Chibuikem Thaddeus | [@teddyfx33](https://github.com/teddyfx33) | `src/components/Navbar.jsx` | Replace placeholder `<a>` tags with proper React Router `<NavLink>` components. Highlight the active route. |
| 2 | Osuji McDonald Chiemela | [@donalddev1](https://github.com/donalddev1) | `src/components/Footer.jsx` | Design a styled footer with copyright, social links, and a "back to top" button. |
| 3 | Achilonu Great Antonio | [@h3isgreat](https://github.com/h3isgreat) | `src/pages/Login.jsx` | Build a controlled login form with client-side validation and error messages. |
| 4 | Nwauwa Divine-Promises | [@Divinepromises](https://github.com/Divinepromises) | `src/pages/Register.jsx` | Build a controlled registration form with field validation and a success state. |
| 5 | Chukwuebuka Chibundu Chidiebere | [@ebukachidiebere050-bit](https://github.com/ebukachidiebere050-bit) | `src/pages/Dashboard.jsx` | Implement the dashboard UI: stats cards, recent activity list, and quick links. |
| 6 | Oparaeke George Chinomso | [@George-70](https://github.com/George-70) | `src/pages/Profile.jsx` | Build the profile page with view/edit toggle and save functionality. |
| 7 | Nwachukwu Izuchukwu | [@izuchukwun22-byte](https://github.com/izuchukwun22-byte) | `src/App.jsx`, `src/index.css` | Add a dark mode toggle using CSS variables and React state/context. |
| 8 | Orji Chiagozielam Anthony | [@anthony7789](https://github.com/anthony7789) | `src/components/StudentCard.jsx` | Complete the StudentCard component and render it on the Home page. |
| 9 | Amuzie Petra | [@Petracutte](https://github.com/Petracutte) | `src/index.css` | Add `@media` queries for mobile responsiveness across all pages. |
| 10 | Ahaneku Alexander Ugochukwu | [@Melloyung](https://github.com/Melloyung) | `README.md` | Improve this README with screenshots, a demo GIF, and detailed documentation. |

Look for **`TODO`** comments in the relevant file(s) — they tell you exactly what to implement.

---

## Git Workflow

We use the **Feature Branch Workflow**:

```
main  ←── pull requests ←── feature branches
```

1. **Never commit directly to `main`.**
2. Each student works on their own branch.
3. When the feature is ready, open a Pull Request to merge into `main`.
4. At least one teammate must review and approve the PR before it is merged.

### Step-by-step

```bash
# 1. Make sure your local main is up to date
git checkout main
git pull origin main

# 2. Create your feature branch (use your GitHub username)
git checkout -b feature/teddyfx33-navbar

# 3. Make your changes, then stage them
git add .

# 4. Commit with a descriptive message
git commit -m "feat: implement Navbar navigation with NavLink"

# 5. Push your branch to GitHub
git push origin feature/teddyfx33-navbar

# 6. Open a Pull Request on GitHub
```

---

## Branch Naming Convention

Use lowercase letters, numbers, and hyphens. Follow this pattern:

```
<type>/<student-number>-<short-description>
```

### Types

| Type | When to use |
|------|-------------|
| `feature` | Adding new functionality |
| `fix` | Fixing a bug |
| `style` | CSS / styling changes only |
| `docs` | Documentation updates |
| `refactor` | Code restructuring without behaviour change |

### Examples

```
feature/teddyfx33-navbar
feature/h3isgreat-login-form
fix/Divinepromises-register-validation
style/Petracutte-mobile-responsive
docs/Melloyung-readme
```

---

## Pull Request Instructions

1. **Push your branch** to the remote repository.
2. Go to the repository on **GitHub** and click **"Compare & pull request"**.
3. Fill in the PR template:

   ```
   ## What does this PR do?
   Brief description of the changes.

   ## Student
   Student [number] – [your name]

   ## Task
   Which TODO items did you complete?

   ## Screenshots (optional)
   Add before/after screenshots if the changes are visual.

   ## Checklist
   - [ ] I followed the branch naming convention
   - [ ] My code has no build errors (`npm run build`)
   - [ ] I removed all debug `console.log` statements
   - [ ] I left the TODO comments for incomplete items (do not delete others' TODOs)
   ```

4. Request a review from your instructor or a teammate.
5. Address any review comments.
6. Once approved, your PR will be merged into `main`.

---

## Contribution Guidelines

- **One feature per PR.** Keep pull requests small and focused.
- **Follow the file structure.** Do not move or rename files unless agreed with the team.
- **Do not delete TODO comments** that belong to other students.
- **Write readable code.** Use meaningful variable names and add comments for beginners.
- **No backend or authentication.** Keep everything frontend-only for this project.
- **No dark mode CSS yet** — wait for Nwachukwu Izuchukwu's (@izuchukwun22-byte) implementation before using `data-theme` attributes.
- **Test your changes** by running `npm run dev` and checking the browser before submitting a PR.
- **Resolve your own merge conflicts.** Pull the latest `main` into your branch and fix any conflicts before requesting a review.

---

## Getting Help

- Read the TODO comments in your assigned file carefully.
- Check the [React documentation](https://react.dev/learn).
- Check the [React Router documentation](https://reactrouter.com/en/main).
- Ask your instructor or open a GitHub Issue with the `question` label.

---

*This README was bootstrapped for the project. Student 10 is responsible for improving it with screenshots, a live demo link, and richer documentation.*
