import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: {},
      imageSel: false,
    };
  }

  handleCameraCapture = () => {
    console.log('Camera Capture Pressed');
  };

  handleSelectPhoto = () => {
    console.log('Select Photo Pressed');
    var options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log('File URI: ' + source.path);
        this.setState({
          filePath: source,
          imageSel: true,
        });
      }
    });
  };

  render() {
    let imgSel = this.state.imageSel;
    let data = this.state.filepath;
    if (imgSel === true) {
      this.props.navigation.navigate('Crop', {
        uri: data.uri,
        height: data.height,
        width: data.width,
      });
    }
    return (
      <View>
        <Button title="Camera Capture" onPress={this.handleCameraCapture} />
        <Button title="Select Photo" onPress={this.handleSelectPhoto} />
        {imgSel ? (
          <Image source={{uri: data.uri}} style={{width: 250, height: 250}} />
        ) : (
          <View />
        )}
      </View>
    );
  }
}

export default CameraScreen;
