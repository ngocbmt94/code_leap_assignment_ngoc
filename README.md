# React + TypeScript + Vite

This project is a template that provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules. It is designed to offer a fast and efficient development environment using modern tools and best practices.

## Project Structure

The project structure is as follows: app-v1/ ├── public/ │ └── index.html ├── src/ │ ├── test/ │ │ └── components/ │ │ └── features/ │ │ └── breed/ │ │ └── BreedButtom.test.tsx │ ├── components/ │ │ └── features/ │ │ └── breed/ │ │ └── BreedButton.tsx │ ├── hooks/ │ │ └── breed/ │ │ └── useVote.ts │ ├── types/ │ │ └── index.ts │ ├── App.tsx │ ├── main.tsx │ └── vite-env.d.ts ├── .eslintrc.js ├── .gitignore ├── index.html ├── package.json ├── README.md ├── tsconfig.json └── vite.config.ts

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies and rum

```
npm install
```

Running the Development Server:

```
npm run dev
```

Building for Production:

```
npm run build
```

### Technical Decisions:

1. Why Vite? Vite is chosen for its fast development server and optimized build process. It leverages native ES modules in the browser, which allows for faster hot module replacement (HMR) and a more efficient development experience compared to traditional bundlers like Webpack.

2. Why TypeScript? TypeScript is used to provide static typing, which helps catch errors early in the development process and improves code quality. It also enhances the developer experience with better tooling and autocompletion.

3. Why React? React is a popular library for building user interfaces. It offers a component-based architecture, which promotes reusability and maintainability of code. React's virtual DOM also provides efficient rendering and updates.

4. Why Redux? Redux is chosen for state management because it provides a predictable state container for JavaScript apps. It helps manage the state of the application in a single, centralized store, making it easier to debug and test. Redux also offers powerful developer tools and a large ecosystem of middleware and extensions, which can enhance the development experience and provide additional functionality.

5. Why ESLint? ESLint is included to enforce coding standards and catch potential issues in the codebase. It helps maintain a consistent code style and improves code quality by identifying and fixing problems.

6. Why @vitejs/plugin-react and @vitejs/plugin-react-swc? @vitejs/plugin-react uses Babel for Fast Refresh, which allows for instant feedback during development by preserving the component state when the code changes. @vitejs/plugin-react-swc uses SWC for Fast Refresh, offering an alternative to Babel with potentially faster compilation times.
