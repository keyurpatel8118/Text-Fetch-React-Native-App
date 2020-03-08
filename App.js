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
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ImageCropScreen from './screens/ImageCropScreen';
import SettingsScreen from './screens/SettingsScreen';
import StepperScreen from './screens/StepperScreen';
import InitializationScreen from './screens/InitializationScreen';
import HomeScreen from './screens/HomeScreen';
import UserInputScreen from './screens/UserInputScreen';
import store from './store';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="UserInput">
            <Stack.Screen name="UserInput" component={UserInputScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Initialize" component={InitializationScreen} />
            <Stack.Screen name="Stepper" component={StepperScreen} />
            <Stack.Screen name="ImageCrop" component={ImageCropScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
