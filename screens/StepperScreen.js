import React, {Component} from 'react';
import {View, Text, Alert, Button, Image, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {incrementStep} from '../src/actions/incrementAction';
import {
  ProgressSteps,
  ProgressStep,
  onNext,
  onPrevStep,
} from 'react-native-progress-steps';
import ImageCropper from 'react-native-android-image-cropper';

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0,
      imageUri: '',
      imgSel: false,
      name: '',
      errors: false,
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

  handleSelectImage = () => {
    var options = {
      guideLines: 'on-touch',
      cropShape: 'rectangle',
      title: 'MY EXAMPLE',
      cropMenuCropButtonTitle: 'Done',
      // transferFileToExternalDir: true,
    };

    ImageCropper.selectImage(options, response => {
      //error throwns with response.error
      if (response && response.uri) {
        console.log(response);
        this.setState({imgSel: true, imageUri: response.uri});
      } else {
        console.log(response.error);
      }
    });
  };

  onImageCropComplete = () => {
    Alert.alert(
      'Image Cropping completed!',
      'Your Image Cropping is Successful',
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

  updateState = () => {
    setStateSynchronous(this.state).then(res => {
      this.setState({errors: true});
    });
  };

  goToNext = () => {
    this.onNext();
    console.log('OK Pressed');
  };

  confirmNameOfField = e => {
    // e.preventDefault();
    // Alert.alert(
    //   'Confirm',
    //   'Confirm the Name of Field',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => this.updateState(),
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'OK',
    //       onPress: () => this.goToNext(),
    //     },
    //   ],
    //   {cancelable: false},
    // );
    console.log('Next Step Pressed');
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
            label="Enter name of field"
            onNext={this.confirmNameOfField}
            onPrevious={this.onPrevStep}
            errors={this.state.errors}
            scrollViewProps={this.defaultScrollViewProps}>
            <TextInput
              placeholder="Enter Name of Field"
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              value={this.state.name}
              onChangeText={text => this.setState({name: text})}
            />
          </ProgressStep>
          <ProgressStep
            label="Image Crop"
            onNext={this.onImageCropComplete}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}>
            <View>
              <Button
                title="Select Image"
                onPress={() => this.handleSelectImage()}
              />
              {this.state.imgSel ? (
                <View>
                  <Image
                    source={{uri: this.state.imageUri}}
                    style={{
                      width: 250,
                      height: 250,
                    }}
                  />
                  {/* <Button title="Confirm" onPress={this.handleConfirmImage} /> */}
                </View>
              ) : (
                <View />
              )}
            </View>
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

// function setStateSynchronous(stateUpdate) {
//   return new Promise(resolve => {
//     this.setState(stateUpdate, () => resolve());
//   });
// }

function setStateSynchronous(res) {
  return new Promise(resolve => {
    resolve(res);
  });
}

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, {incrementStep})(Stepper);
