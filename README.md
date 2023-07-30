# DisplayCards+ScrollBar

Welcome to the Project! This is a small project that displays cards on a webpage from the data stored in the `data.json` file. It also adds a custom scrollbar, which represents the popularity of each card. The project is implemented in pure JavaScript without using any additional libraries.

## Installation

To run the project locally, you can follow these steps:

1. Clone the repository to your local machine:

```
git clone <repository link>
cd project-name
```

2. Open the `index.html` file in your web browser.

## Usage

The project will load the data from the `data.json` file and dynamically create cards on the webpage. Each card will have its own popularity rating displayed using the custom scrollbar. The more popular the card, the longer the scrollbar will be.

## Development

If you want to make changes or improve the project, follow these steps:

1. Navigate to the project directory.

2. Make the necessary changes to the `data.json` file or the JavaScript code.

3. Refresh the `index.html` file in your web browser to see the updated changes.

## Data Format

The `data.json` file contains an array of objects, where each object represents a card and has the following format:

```json
{
  "title": "Card Title",
  "description": "Card description goes here",
  "popularity": 70
}
```

- `title`: The title of the card.
- `description`: The description of the card.
- `popularity`: A number representing the popularity of the card. The higher the number, the more popular the card will be.

Feel free to modify the `data.json` file with your own card data to see different cards on the webpage.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute it according to the terms of this license.

## Contact

If you have any questions or suggestions regarding the project, feel free to contact us via email or create an Issue on GitHub.
