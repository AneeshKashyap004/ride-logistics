import { AppRegistry } from 'react-native';
import App from './App'; // Import the main App component
import { name as appName } from './app.json'; // Get the app name from app.json

// Register the main component
AppRegistry.registerComponent(appName, () => App);