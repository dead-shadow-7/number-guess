


# Number Guessing Game

This is a simple number-guessing game built using React Native and Expo. The game allows users to input a number and provides options to reset or confirm their input. The project uses custom components and styles to create an interactive user interface.

## Features

- **Number Input**: Enter a number (max two digits) using a custom `TextInput` component.
- **Buttons**: Contains "Reset" and "Confirm" buttons to handle the user's input.
- **Styling**: The app is styled using React Native's `StyleSheet` to create a visually appealing interface.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npx` is recommended for the latest version)
- [React Native](https://reactnative.dev/)

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/number-guess-game.git
cd number-guess-game
```

### 2. Install Dependencies

Make sure you have `expo` and `npm` installed. Then, run:

```bash
npm install
```

### 3. Run the App

Start the Expo development server:

```bash
npx expo start
```

- **For mobile**: Scan the QR code in the terminal or Expo Developer Tools using the Expo Go app (available on iOS and Android).
- **For web**: Press `w` in the terminal to open the app in your web browser.

### 4. Running on an Emulator

- **Android**: Press `a` in the terminal to open the app in an Android emulator.
- **iOS**: Press `i` in the terminal to open the app in an iOS simulator (macOS required).

## Project Structure

```
number-guess-game/
│
├── components/
│   └── PrimaryButton.js      # Custom button component used in the app
│
├── screens/
│   └── StartGameScreen.js    # Main screen for starting the game
│
├── App.js                    # Entry point of the application
├── package.json              # Lists project dependencies and scripts
└── README.md                 # Project documentation
```

## Components

- **PrimaryButton**: A custom button component used to render "Reset" and "Confirm" buttons.
- **StartGameScreen**: The main screen of the app containing the number input and buttons.

## Styles

The app uses the `StyleSheet` API provided by React Native to style the components. Some key styles include:

- `inputContainer`: Styles for the main container holding the input and buttons.
- `numberInput`: Styles for the number input field, including color, size, and alignment.
- `buttonsContainer` and `buttonContainer`: Styles for arranging the buttons in a row.

## Troubleshooting

If you encounter any issues running the app, try the following:

1. Ensure you have the latest version of `expo` installed:
   ```bash
   npm install -g expo-cli
   ```
2. If you run into issues with Node.js version, consider using Node.js LTS (16.x) for compatibility.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React Native](https://reactnative.dev/)
- Powered by [Expo](https://expo.dev/)
```

