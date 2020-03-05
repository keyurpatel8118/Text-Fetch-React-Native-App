import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onPaymentStepComplete = () => {
    alert('Payment step completed!');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  render() {
    return (
      <View style={{flex: 1, marginTop: 50}}>
        <ProgressSteps>
          <ProgressStep
            label="Payment"
            onNext={this.onPaymentStepComplete}
            onPrevious={this.onPrevStep}
            nextBtnStyle={{padding: 40}}
            previousBtnStyle={{textAlign: 'center', marginTop: 20}}
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{alignItems: 'center'}}>
              <TextInput
                placeholder="Enter the name of field"
                value={this.state.name}
                onChangeText={name => this.setState({name})}
              />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Confirm Order"
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            nextBtnStyle={{textAlign: 'center', marginTop: 20}}
            previousBtnStyle={{textAlign: 'center', marginTop: 20}}
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{alignItems: 'center'}}>
              <Text>Confirm order step content</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default Stepper;
