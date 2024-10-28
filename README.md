# Travel Trucks

Travel Trucks is a web application that allows users to browse and explore rental camper options for travel adventures. Users can view camper details, select their preferences, and explore amenities offered by different camper types.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Demo

Check out the live demo of the project here: [Travel Trucks Demo](https://travel-trucks-gray.vercel.app/)

## Features

- **Browse Campers**: View a wide selection of available campers.
- **Detailed Camper Pages**: See detailed information, including specs and amenities.
- **Filtering**: Narrow down options based on personal preferences, vehicle type, and location.
- **Favorite Campers**: Mark campers as favorites for easy access.

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download Node.js here](https://nodejs.org/).

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Gloomcat/travel-trucks.git
   ```

2. **Navigate to the project directory**:
    ```bash
    cd travel-trucks
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```
5. **Open the application**:

    Go to http://localhost:3000 in your browser to view the app.

### Usage
1. **Home Page**: Browse the available campers or navigate to the catalog to filter options.
2. **Catalog**: Use filters to refine your search by location, amenities, and vehicle type.
3. **Camper Details**: Click on a camper to see more details, including size, engine type, and available features.
4. **Favorites**: Click the heart icon to add a camper to your favorites list.

### Technologies Used
1. Frontend:
    **React**: UI Framework
    **Redux Toolkit**: State management
    **React Router**: Routing
    **CSS Modules**: Scoped styling

2. Backend:
    **MockAPI**: For data storage

3. Main Utilities:
    **Axios**: For API calls
    **Redux Persist**: To persist state across sessions
    **Vite**: Bundler and builder
