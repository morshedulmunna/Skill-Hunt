# Dynamic Job Board Platform

## Deployment

The application is deployed on [Vercel](https://vercel.com) for live demo purposes. Access the demo using the following link:
https://skill-hunt-two.vercel.app/

[Live Demo URL](https://skill-hunt-two.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Features Implemented](#features-implemented)
- [Assumptions and Limitations](#assumptions-and-limitations)
- [Testing](#testing)
- [Deployment](#deployment)

---

## Overview

The Dynamic Job Board Platform is a feature-rich, pixel-perfect responsive web application for job listings. It includes advanced functionalities such as dynamic filtering, real-time chat, and an admin dashboard for managing job postings. The project follows modern development practices, ensuring a scalable and maintainable codebase.

## Features

1. **Home Page:**

   - Hero section with a job search bar.
   - Carousel of featured jobs (autoplay with pause on hover).
   - Categories filter to dynamically update job listings.
   - Fully responsive design for desktop, tablet, and mobile screens.

2. **Job Listings Page:**

   - Fetch and display job listings from a mock API.
   - Dynamic filtering by job type, category, and location.
   - Persistent filters using query parameters.
   - Pagination with smooth transitions.

3. **Job Details Page:**

   - Dynamic routes for individual job details.
   - Tabs for Description, Requirements, and Company Info.
   - Real-time chat widget with chat history persistence.

4. **User Authentication:**

   - Login and Signup forms with client-side mock API validation.
   - Private routes for posting jobs.

5. **Job Posting Feature:**

   - Form validation for posting jobs.
   - Local storage of job postings and dynamic updates on the job listings page.

6. **Advanced Functionalities:**
   - Lazy loading for images and code splitting for performance.
   - Dark/Light mode toggle with smooth transitions.
   - Admin dashboard for CRUD operations on job postings.

## Tech Stack

- **Frontend:** Next.js, CSS (or Tailwind CSS for styling).
- **State Management:** React Context.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/morshedulmunna/Skill-Hunt.git
   cd Skill-Hunt
   ```

2. Install dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory and define require ENV. you can check `example.env` file

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Running the Application

- **Development Mode:**

  ```bash
  npm run dev
  ```

- **Build for Production:**

  ```bash
  npm run build
  npm start
  ```

## Features Implemented\_\_

### Core Features:

- Responsive Home Page with job search and featured jobs carousel.
- Dynamic Job Listings Page with filtering and pagination and persist.
- Detailed Job Page with Company Information
- User Authentication with private routes.

### Advanced Functionalities:

- Image lazy loading.
- Dark/Light mode toggle.
- Admin dashboard for job management.( Under Development....)

## Assumptions and Limitations

1. **Assumptions:**

   - The mock API is sufficient for the scope of this project.
   - User credentials are stored locally and are not secure.
   - User Credentials not secure, Not hashing user password.
   - data store in file ( read write operation costly.)

2. **Limitations:**
   - No integration with third-party authentication or databases.
   - No integration with real time chat service **( we are implementing in future)**
