#  Voting App -- Full Stack Learning Project

This project is a **full-stack voting application** developed as an
academic and learning project. It demonstrates **NestJS backend
architecture**, **database integration with ORM**, and a **React-based
frontend**, following real-world software engineering practices.

------------------------------------------------------------------------

##  Project Overview

The Voting App enables: - **Admins** to manage candidates - **Voters**
to view candidates and cast votes
------------------------------------------------------------------------

##  Tech Stack

### Backend

-   NestJS
-   Node.js
-   TypeScript
-   TypeORM / Prisma

### Frontend

-   React
-   JavaScript (ES6)
-   JSX

### Database

-   PostgreSQL 

### Tools

-   NestJS CLI
-   Git & GitHub

------------------------------------------------------------------------

# Phase 1: NestJS Fundamentals & Architecture

## Topics Covered

-   NestJS CLI
-   Modules
-   Controllers
-   Providers (Services)
-   Dependency Injection
-   Decorators (`@Get`, `@Post`, `@Body`)

## Detailed Requirements

-   Initialize a NestJS project using CLI:
    nest new voting-app
    ```

-   Create a **Candidates resource** containing:

    -   Module
    -   Controller
    -   Service

-   Implement a **service layer** that:

    -   Maintains an in-memory array of candidates
    -   Handles all business logic

-   Implement a **controller layer** that:

    -   Exposes REST endpoints
    -   Delegates logic to the service

## API Endpoints

  Method   Endpoint      Description
  -------- ------------- -----------------------------
  GET      /candidates   Retrieve all candidates
  POST     /candidates   Add a new candidate (Admin)


### Phase 1 Deliverable

-   Clean separation of routing and logic
-   Working REST API without database

------------------------------------------------------------------------

#  Phase 2: Database & Validation

## Topics Covered

-   ORM (TypeORM )
-   Entities
-   DTOs (Data Transfer Objects)
-   Validation Pipes
-   class-validator

## Detailed Requirements

### Database Setup

-   Configure ORM in NestJS
-   Connect application to PostgreSQL
-   Enable auto-sync (development only)

### Entity Requirements

Create a `Candidate` entity with: - `id` (Primary Key) - `name`
(String) - `party` (String) - `voteCount` (Number, default = 0)

### DTO & Validation Requirements

-   Create `CreateCandidateDto`
-   Apply validation rules:
    -   `@IsString()`
    -   `@IsNotEmpty()`
-   Enable global validation pipe

### Service Updates

-   Replace in-memory array with database queries
-   Implement:
    -   Create candidate
    -   Fetch all candidates
    -   Increment vote count

### Phase 2 Deliverable

-   Persistent database storage
-   Automatic input validation
-   Production-ready backend structure

------------------------------------------------------------------------

#  Phase 3: Voter Interface (React)

## Topics Covered

-   Functional Components
-   Props
-   State management (`useState`)
-   JSX fundamentals

## Detailed Requirements

### Application Setup

-   Initialize React app

    ``` bash
    npx create-react-app frontend
    ```

### Component Requirements

-   **CandidateCard**
    -   Display candidate name and party
    -   Include Vote button
-   **VotingGrid**
    -   Render list of candidates
    -   Pass data via props

### State Management

-   Store candidate data in parent component
-   Implement `handleVote()` function
-   Display confirmation message: \> Thank you for voting!

### Phase 3 Deliverable

-   Functional UI using dummy data
-   Component-based frontend design

------------------------------------------------------------------------

##  How to Run the Project

### Backend

``` bash
cd backend
npm install
npm run start:dev
```

Backend runs at:

    http://localhost:3000

### Frontend

``` bash
cd frontend
npm install
npm start
```

Frontend runs at:

    http://localhost:3001

------------------------------------------------------------------------
## Objectives

-   Understand NestJS modular architecture
-   Develop RESTful APIs
-   Implement ORM-based database access
-   Apply DTO-based validation
-   Build a React voting interface

## Scope of the Project

-   Admin candidate management
-   Voter-facing candidate display
-   Secure data handling and validation

## Declaration

This project is developed  for **academic and educational purposes**.


