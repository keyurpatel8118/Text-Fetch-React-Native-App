import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageCrop from './components/ImageCropper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      imageSel: false,
    };
  }

  SelectImage = () => {
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
        this.setState({
          filePath: source,
          imageSel: true,
        });
      }
    });
  };

  render() {
    var imgSel = this.state.imageSel;
    return (
      <View>
        <Button
          title="Select Image"
          style={styles.buttonStyle}
          onPress={this.SelectImage}
        />
        {imgSel ? <ImageCrop imgURI={this.state.filePath.uri} /> : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
