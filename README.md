# Product_Display

---

# Tour Display App

This is a React application that displays a list of tours fetched from an API endpoint and provides the functionality to filter tours based on different categories.

## Features

- Fetches tour data from a JSON API endpoint.
- Displays tour information including title, price, image, and description.
- Allows users to filter tours by category: "all," "somewhere near," "somewhere far," and "somewhere center."

## Getting Started

1. Clone this repository to your local machine:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd tour-display-app
   ```

3. Install the dependencies using npm or yarn:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Components

### ProductDisplay

The `ProductDisplay` component fetches tour data from an API endpoint and displays the filtered tour items based on the selected category.

- `useState` is used to manage the `tour` array and `filterTour` category.
- `useEffect` fetches tour data from the API endpoint when the component mounts.
- The `handleFilter` function updates the `filterTour` state based on the selected category.
- The `filteredTours` array filters the tour items based on the selected category.
- The component renders the `Filter` component and the filtered tour items.

### Filter

The `Filter` component renders filter buttons for different tour categories and calls the provided `handleFilter` function when a button is clicked.

- The `filterTour` array contains objects representing different filter categories.
- The `map` function is used to render filter buttons, and the `handleFilter` function is called with the selected category when a button is clicked.

## Data

The tour data is fetched from an API endpoint and has the following structure:

```json
{
  "tours": [
    {
      "id": 1,
      "title": "Amsterdam",
      "category": "somewhere far",
      "price": 326.71,
      "img": "https://picsum.photos/id/57/100",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, ratione!"
    },
    // ... other tour items
  ]
}
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License.

---

Feel free to adjust the repository URL, installation instructions, and other details as needed. This README provides a concise overview of the project's fetching and filtering functionalities and should help users understand how to use and contribute to the application.
