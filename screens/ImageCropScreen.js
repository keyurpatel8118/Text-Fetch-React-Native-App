import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';
import ImageCropper from 'react-native-android-image-cropper';

class ImageCropScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: '',
      imgSel: false,
    };
  }

  handleSelectImage = () => {
    var options = {
      guideLines: 'on-touch',
      cropShape: 'rectangle',
      title: 'MY EXAMPLE',
      cropMenuCropButtonTitle: 'Done',
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

  handleConfirmImage = () => {
    const {navigation} = this.props;
    navigation.navigate('Stepper');
  };

  render() {
    const {navigation} = this.props;
    this.handleSelectImage();
    return (
      <View>
        {/* <Text>Camera Screen</Text>
        <Button title="Select Image" onPress={this.handleSelectImage} /> */}
        {this.state.imgSel ? (
          <View>
            <Image
              source={{uri: this.state.imageUri}}
              style={{
                width: 250,
                height: 250,
              }}
            />
            <Button title="Confirm" onPress={this.handleConfirmImage} />
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  }
}

export default ImageCropScreen;
