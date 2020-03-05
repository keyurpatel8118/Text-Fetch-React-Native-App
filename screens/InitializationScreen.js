import React, {Component, useState} from 'react';
import {View, Alert, TextInput, StyleSheet, Button} from 'react-native';
import StepperScreen from '../screens/StepperScreen';

class InitializationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfFields: 0,
      setStepperScreen: false,
    };
  }

  okayPressed = () => {
    const {navigation} = this.props;
    console.log('Okay Pressed');
    navigation.navigate('Stepper', {
      numOfFields: this.state.numOfFields,
    });
  };

  handleSubmit = () => {
    Alert.alert(
      'Confirm Submit',
      `The number of fields you have opted for is ${this.state.numOfFields} `,
      [
        {text: 'Okay', onPress: () => this.okayPressed()},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {numOfFields} = this.state;
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter the number of fields you want..."
          value={numOfFields}
          onChangeText={numOfFields => this.setState({numOfFields})}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
        {this.state.setStepperScreen ? <StepperScreen /> : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '80%',
    borderBottomColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default InitializationScreen;
