 NestJS Voting App

A simple Voting App built with **NestJS** and **PostgreSQL**.  
This project demonstrates NestJS fundamentals like Modules, Controllers, Services, DTOs, Validation, and Database Integration with TypeORM.

---

## Features

- Create and list candidates  
- Input validation using DTOs (`class-validator`)  
- PostgreSQL database integration  
- Separation of concerns: Service vs Controller  

---

## Project Structure

voting-app/
├─ src/
│ ├─ candidates/
│ │ ├─ dto/
│ │ │ └─ create-candidate.dto.ts
│ │ ├─ candidates.controller.ts
│ │ ├─ candidates.service.ts
│ │ └─ candidates.module.ts
│ ├─ app.module.ts
│ └─ main.ts
├─ .env
├─ package.json
├─ tsconfig.json
└─ README.md

## DTOs
PostgreSQL installed and running

Database Setup
Open PostgreSQL shell (psql) or PgAdmin.

Create the database:

CREATE DATABASE voting_app;
Connect to the database:


 voting_app
Create the candidates table:

sql
Copy code
CREATE TABLE candidates (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  votes INT DEFAULT 0
);
Optional: Insert sample data:

INSERT INTO candidates (name, votes) VALUES
('Alice', 0),
('Bob', 0),
('Charlie', 0);

.env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=admin123
DB_NAME=voting_app

 
 For running the code
npm run start:dev

##  Tech Stack

- **Backend Framework:** NestJS
- **Language:** TypeScript
- **Architecture:** Controller – Service pattern
- **Data Storage:** In-memory (temporary)



