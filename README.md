
### Short Description of Your Project

The project is supposed to be a simple and fun weather app for younger audiences. You should be able to search for any city and pin your favourites to the home page if you are logged in. In addition, the app should show a relevant meme based on the current weather in the city you searched for.

### What Have You Done

We have implemented the simplest two-page website where the main page has a login option and where you can see your pinned cities. This also has the option to pin cities which takes you to the second page. This one has a search bar which makes the call to our chosen API and where you have the option to add or go back to the main page. If you add a city, it will be shown on the main page (and stored on Firebase, linked to your Google account).

### What You Still Plan to Do

We are planning to add options to just search for cities without pinning them and then display that on the second page (so you search on the first that takes you to the second and here you can pin if you are logged in), where the meme also will be shown depending on the weather. We will obviously also add styling to the website. As of now, you cannot logout, nor delete your pinned cities haha, but that will be added soon as well of course.

P.S 
As of now, you cannot refresh the page while on pinned cities (don't know why yet.). Cant handle non existing city names. Plan to fix this.

### File Structure Overview

Our React web application adopts a modular and organized file structure, utilizing the Model-View-Presenter (MVP) pattern. Here's a breakdown of the key directories and files:

- **`/public`**: This directory hosts static files. Key files include:
  - `index.html`: The entry point HTML file for the app.
  - `favicon.ico`: Placeholder for a favicon (to be added).

- **`/src`**: The core application code resides here, structured into several subdirectories:
  - **`/api`**: Contains functions for API interactions, handling various API calls.
  - **`/model`**: Defines a Firebase model, encapsulating functions for Firebase interactions and authentication processes.
  - **`/presenters`**: Holds the presenter components, which mediate between the model layer, the weather API functions and the views.
  - **`/views`**: Comprises the view components, responsible for rendering the application's UI.

- **Root Files in `/src`**: These are crucial files located directly within the `src` folder, not part of any subfolders:
  - `app.jsx`: The main React component.
  - `index.jsx`: The JavaScript entry point.
  - `style.css`: Central CSS stylesheet for the app.
  - `store.js`: Manages the app's global state.
  - `userState.js`: Handles user-specific state and persistence.

This structure ensures a clean separation of concerns, facilitating easier maintenance and scalability of the application.
