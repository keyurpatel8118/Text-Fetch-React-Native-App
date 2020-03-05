import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import ImageCropper from 'react-native-android-image-cropper';

class ImageCropScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        this.setState({imageUri: response.uri});
      } else {
        console.log(response.error);
      }
    });
  };

  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>Camera Screen</Text>
        <Button title="Select Image" onPress={this.handleSelectImage} />
      </View>
    );
  }
}

export default ImageCropScreen;
