
# Number Guessing Game

This is a simple number-guessing game built using React Native and Expo. The game allows users to pick a number, with the app attempting to guess the correct number and track the number of attempts. The project uses custom components and screens to create an interactive user experience.

## Features

- **Pick a Number**: Users can choose a number for the game to guess.
- **Guess Attempts**: The app will attempt to guess the chosen number, displaying each guess.
- **Game Over**: The app shows a "Game Over" screen when it successfully guesses the number.
- **Custom Styling**: The app uses a gradient background and custom fonts to enhance the user interface.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [React Native](https://reactnative.dev/)

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/num-guess.git
cd num-guess
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
num-guess/
│
├── assets/                       # Assets such as images and fonts
│   ├── fonts/                    # Custom fonts used in the app
│   └── images/                   # Background images
│
├── constants/                    # Contains global color constants
│   └── colors.js
│
├── screens/                      # App screens (Start, Game, Game Over)
│   ├── StartGameScreen.js        # Screen for starting the game
│   ├── GameScreen.js             # Screen for playing the game
│   └── GameOverScreen.js         # Screen for game over
│
├── App.js                        # Entry point of the application
├── package.json                  # Lists project dependencies and scripts
└── README.md                     # Project documentation
```

## Components

- **StartGameScreen**: The initial screen where the user selects a number.
- **GameScreen**: The screen where the game logic runs, and the app makes guesses.
- **GameOverScreen**: The screen displayed when the game is over and the number has been guessed.

## Styling and Fonts

- The app uses `expo-linear-gradient` for the gradient background.
- Custom fonts (Open Sans) are loaded using `expo-font`.
- Background images are added via `ImageBackground`, with styling for opacity.

## Troubleshooting

If you encounter any issues running the app, try the following:

1. Ensure you have the latest version of `expo` installed:
   ```bash
   npm install -g expo-cli
   ```
2. Check for font-loading issues by verifying the paths to the font files in the `useFonts` hook.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React Native](https://reactnative.dev/)
- Powered by [Expo](https://expo.dev/)
