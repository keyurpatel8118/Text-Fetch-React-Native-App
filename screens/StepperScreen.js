import React, {Component} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import {connect} from 'react-redux';
import {incrementStep} from '../src/actions/incrementAction';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0,
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
    },
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onPaymentStepComplete = () => {
    Alert.alert(
      'Payment completed!',
      'Your Payment is Successful',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    console.log('called on submit step.');
    const times = this.props.currentStep;
    this.props.incrementStep(times);
    this.setState({times});
    console.log('Times: ', times);
    this.props.navigation.navigate('Home');
  };

  render() {
    const {times} = this.state;
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, marginTop: 50}}>
        <Text>Times Rendered: {times}</Text>
        <ProgressSteps activeStep={0}>
          <ProgressStep
            label="Image Crop"
            onNext={this.onPaymentStepComplete}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}>
            <View>{navigation.navigate('ImageCrop')}</View>
          </ProgressStep>
          <ProgressStep
            label="Confirm Crop Image"
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{alignItems: 'center'}}>
              <Text>Confirm cropped Image</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentStep: state.increment,
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, {incrementStep})(Stepper);
