# Pixel Play

Pixel Play is a web application that allows users to browse and explore video games using data from the [RAWG.io](https://rawg.io/) API. It features a dynamic user interface built with React and Chakra UI, and it leverages various modern technologies to provide a smooth experience when fetching, displaying, and searching for games.

## Features

- Fetch and display game data from the RAWG API.
- Infinite scrolling for a seamless browsing experience.
- Responsive design with Chakra UI for a polished, mobile-friendly layout.
- Optimized state management using Zustand and React Query.
- Route management using React Router.
- Framer Motion for animations and interactive elements.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Chakra UI**: A React-based UI library for creating accessible and responsive layouts.
- **React Query**: Data-fetching and state management for server-side data.
- **Axios**: HTTP client for making API requests.
- **Zustand**: A small, fast, and scalable state-management library.
- **Framer Motion**: A library for animations and transitions.
- **React Infinite Scroll Component**: Used for implementing infinite scrolling.
- **React Router**: Handles the navigation and routing of the app.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/game-hub.git
   cd game-hub
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the RAWG.io API key:
    - Create an account on [RAWG.io](https://rawg.io/) and obtain your API key.
    - Create a `.env` file in the root of your project and add the following:
      ```
      VITE_RAWG_API_KEY=your_api_key_here
      ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Build and Deployment

To build the project for production:

```bash
npm run build
```

This will generate the production-ready files in the `dist/` directory.

## Linting

To lint the project and fix issues:

```bash
npm run lint
```

## Preview

To preview the production build locally:

```bash
npm run preview
```

## Contributing

Feel free to open issues and pull requests if you find bugs or have feature suggestions.

## License

This project is licensed under the MIT License.