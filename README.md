# React Component Library with Storybook

This project is a collection of reusable UI components built with React, Styled Components, and Storybook. The library allows you to explore, test, and showcase your components in an interactive and isolated environment.

## Project Overview
- Built with React and TypeScript
- Styled using Styled Components
- Interactive UI showcase with Storybook
- Fully responsive and customizable components
- Containerized using Docker for easy deployment

---

## Getting Started

### 1. Clone the Repository
Clone this repository and navigate to the project directory:
```sh
git clone https://github.com/yourusername/yash_yash_ui-garden.git
cd yash_yash_ui-garden
2. Install Dependencies
Make sure you have Node.js installed (version 14 or later recommended). Then run the following command to install the project dependencies:

sh
Copy
Edit
npm install
3. Start Storybook
To start Storybook and view the components in an interactive UI, run:

sh
Copy
Edit
npm run storybook
Storybook will be available at http://localhost:6006/.

4. Run the Component Library
To start the main React app, run:

sh
Copy
Edit
npm start
5. Run Tests
Each component in this library has at least two tests. To run the tests, use:

sh
Copy
Edit
npm test
Running with Docker
This project is containerized for easier deployment and consistent environments.

1. Build the Docker Image
Run the following command to build the Docker image:

sh
Copy
Edit
docker build -t yash_yash_ui-garden .
2. Run the Container
Once the image is built, run the container with:

sh
Copy
Edit
docker run -p 8083:80 yash_yash_ui-garden
3. Open the App
After running the container, open your browser and navigate to http://localhost:8083/ to view the application.

Project Structure
mathematica
Copy
Edit
yash_yash_ui-garden/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── Button.styles.ts
│   │   ├── Label/
│   │   │   ├── Label.tsx
│   │   │   ├── Label.stories.tsx
│   │   │   └── Label.styles.ts
│   │   ├── Text/
│   │   │   ├── Text.tsx
│   │   │   ├── Text.stories.tsx
│   │   │   └── Text.styles.ts
│   │   ├── Table/
│   │   │   ├── Table.tsx
│   │   │   ├── Table.stories.tsx
│   │   │   └── Table.styles.ts
│   │   ├── Dropdown/
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Dropdown.stories.tsx
│   │   │   └── Dropdown.styles.ts
│   │   ├── RadioButton/
│   │   │   ├── RadioButton.tsx
│   │   │   ├── RadioButton.stories.tsx
│   │   │   └── RadioButton.styles.ts
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── styles/
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
├── README.md
└── tsconfig.json
Component Descriptions
Button: A reusable and customizable button component with various styles and sizes.
Label: A simple label component for displaying text.
Text: A component that allows you to customize and display different text styles.
Table: A reusable table component for displaying tabular data.
Dropdown: A customizable dropdown component for selecting options.
RadioButton: A simple radio button component for selecting one option from a group.