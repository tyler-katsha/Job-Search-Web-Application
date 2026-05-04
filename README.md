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
