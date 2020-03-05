import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ImageCropScreen from './screens/ImageCropScreen';
import SettingsScreen from './screens/SettingsScreen';
import StepperScreen from './screens/StepperScreen';
import InitializationScreen from './screens/InitializationScreen';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initialize">
          <Stack.Screen name="Initialize" component={InitializationScreen} />
          <Stack.Screen name="Stepper" component={StepperScreen} />
          <Stack.Screen name="ImageCrop" component={ImageCropScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
