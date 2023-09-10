# Portfolio

## Introduction

This portfolio project is designed to implement several React concepts and technologies, including Components & Props, useState, useEffect, and more. It aims to provide a personal and professional showcase of your skills and accomplishments.

## Project Architecture

The project is structured using a set of React components to create an attractive and functional portfolio page. Here's an overview of the components used:

- **NavBar.js**: The navigation bar that allows users to navigate between sections of the portfolio.

- **Banner.js**: An introductory banner displaying personal information and a background image.

- **Skills.js**: A section highlighting your technical skills.

- **ProjectsP.js**: A section showcasing your personal projects, their descriptions, and links to demos or source code.

- **Contact.js**: A section for visitors to contact you.

- **Footer.js**: The footer with links to social media and contact information.

All of these are grouped within the `Home.js` component, which is called as the root page in `App.js`.

## Used Libraries

This project makes use of several React libraries to facilitate the creation of components and a responsive user interface:

- **react-bootstrap**: Used to create styled and adaptive components, making layout and styling easier.

- **react-router**: Allows for the management of navigation between different sections of the page.

- **emailjs-com**: Used to set up the contact functionality, allowing users to send you an email directly from the portfolio.

## Data Handling

To separate the data part from the front-end code, a fake JSON-server API has been created. This allows loading portfolio information from a separate JSON file. Here's how to start the JSON server:

\```bash
json-server --watch data/db.json --port 4000
\```

Using this configuration, the portfolio can fetch data via the URL `http://localhost:4000` to get the information needed for display.

## Conclusion

This portfolio has been designed to professionally showcase your work while practicing various React concepts. Its modular architecture makes it easy to add new sections or features as your professional development progresses. Feel free to further personalize this portfolio by adding your own content, projects, and contact information. Happy exploring!
