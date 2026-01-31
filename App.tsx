/**
 * PharmaSnap React Native App
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Context Providers
import { MedicationProvider } from './app/context/MedicationContext';
import { FavoritesProvider } from './app/context/FavoritesContext';
import { ReminderProvider } from './app/context/ReminderContext';

// Import i18n configuration
import './app/i18n/i18n';

// Import screens
import LanguageSelectionScreen from './app/screens/LanguageSelectionScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import PharmaSnapScreen from './app/screens/PharmaSnapScreen';
import MyMedicine from './app/screens/MyMedicine';
import ReminderScreen from './app/screens/ReminderScreen';
import ChatbotScreen from './app/screens/ChatbotScreen';
import InfoScreen from './app/screens/InfoScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <MedicationProvider>
        <FavoritesProvider>
          <ReminderProvider>
            <NavigationContainer>
              <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
              <Stack.Navigator 
                initialRouteName="LanguageSelection"
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="PharmaSnap" component={PharmaSnapScreen} />
                <Stack.Screen name="MyMedicine" component={MyMedicine} />
                <Stack.Screen name="Reminders" component={ReminderScreen} />
                <Stack.Screen name="Chatbot" component={ChatbotScreen} />
                <Stack.Screen name="Info" component={InfoScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </ReminderProvider>
        </FavoritesProvider>
      </MedicationProvider>
    </SafeAreaProvider>
  );
}

export default App;
