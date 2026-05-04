<<<<<<< HEAD
# Job-Search-Web-Application
Job search web application built with Spring Boot, React, and MongoDB (Atlas + Compass). Includes Atlas indexing and search optimization for faster queries. Users can search jobs by name, description, or skills, and create job posts. Backend-focused with minimal frontend styling.

# Job Search Web Application

A simple job-seeking platform built with **Spring Boot**, **React**, and **MongoDB (Atlas + Compass)**. This project focuses heavily on backend development and API design, with a minimal frontend UI.

## Features
- Search jobs by:
  - Job name
  - Description
  - Required skills
- Create new job posts
- View available job listings
- RESTful API built with Spring Boot
- Cloud-based MongoDB database integration

## Tech Stack

- **Frontend:** React (minimal UI)
- **Backend:** Spring Boot (Java)
- **Database:** MongoDB Atlas (NoSQL)
- **Database Tooling:** MongoDB Compass

## Architecture

Frontend (React) -> REST API (Spring Boot) -> MongoDB Atlas

## Setup Instructions

### Backend (Spring Boot)

1. Clone the repository
2. Configure application.properties:
   properties
   spring.mongodb.uri=your_URI (local or cloud based)
   spring.mongodb.database=your_database

Run the application:

mvn spring-boot:run

Frontend (React)

Navigate to frontend folder

Install dependencies:

npm install

Start the app:

npm start

API Endpoints (Example)

GET /posts – Get all jobs
POST /posts – Create a new job
GET /posts/search/{text} – Search jobs by keyword

Purpose

This project was built to strengthen backend development skills using Spring Boot and MongoDB while integrating a simple React frontend for interaction.

Notes

Frontend styling is intentionally minimal
Backend logic and API structure were prioritized
This project was built to strengthen backend development skills using Spring Boot and MongoDB while integrating a simple React frontend for interaction.

📌 Notes
Frontend styling is intentionally minimal
Backend logic and API structure were prioritized
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> feature-frontend
