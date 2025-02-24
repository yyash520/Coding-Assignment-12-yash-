# React Component Library with Storybook

This project is a collection of reusable UI components built using React, TypeScript, Styled Components, and Storybook. It provides an interactive UI showcase for exploring and testing components in an isolated environment.

## Project Overview

- Built with React and TypeScript
- Styled using Styled Components
- Interactive UI showcase with Storybook
- Fully responsive components
- Runs inside a Docker container

## Getting Started

### 1. Clone the Repository

git clone https://github.com/yyash-520/yash_yash_ui-garden.git
cd yash_yash_ui-garden
### 2. Install Dependencies
Ensure that Node.js (version 16 or later recommended) is installed. Then run:

npm install
### 3. Start Storybook
To view components in an interactive UI, run:
npm run storybook
Storybook will open on http://localhost:6006/.

### 4. Run the Component Library
To start the main React app, use:
npm start
### 5. Run Tests
Each component has at least two tests. Run them with:
npm test
Running with Docker
This project is containerized for easy deployment.

### Build the Docker Image
docker build -t yash_yash_coding_assignment-12 .
### Run the Container
docker run -p 8083:83 yash_yash_coding_assignment-12
### Open the App
Go to http://localhost:8083/ in your browser.

Technologies Used
React for building the components
TypeScript for static type checking
Styled Components for CSS-in-JS styling
Storybook for interactive documentation
Jest and React Testing Library for testing
