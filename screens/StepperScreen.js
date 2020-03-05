import React, {Component, useState} from 'react';
import {View, Text, Alert, TextInput, StyleSheet, Button} from 'react-native';
import Stepper from '../components/Stepper';

class StepperScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {numOfFields} = this.props.route.params;
    var stepperElement;
    for (let i = 0; i < numOfFields; i++) {
      stepperElement.push(<Stepper />);
    }
    return (
      <View>
        {/* <Text>Stepper Screen: Number of Fields required {numOfFields}</Text> */}
        {stepperElement}
      </View>
    );
  }
}

export default StepperScreen;
