import React, {Component} from 'react';
import AmazingCropper from 'react-native-amazing-cropper';
import ImageRotate from 'react-native-image-rotate';
import CustomCropperFooter from '../components/CustomCropperFooter';
import {Alert} from 'react-native';

class ImageCrop extends Component {
  onDone = croppedImageUri => {
    console.log('Cropped Image URI: ', croppedImageUri);
    this.setState({filePath: {uri: croppedImageUri}, imgDone: true});
  };

  onCancel = () => {
    console.log('Cancel Button was pressed');
  };
  render() {
    const uri = this.props.navigation.getParam('uri');
    console.log('Reached');
    console.log('URI: ', uri);

    return (
      <AmazingCropper
        footerComponent={
          <DefaultFooter doneText="DONE" rotateText="ROT" cancelText="CANCEL" />
        }
        onDone={croppedImageUri => {
          console.log('Cropped Image URI: ', croppedImageUri);
          this.setState({filePath: {uri: croppedImageUri}, imgDone: true});
        }}
        onCancel={() => {
          console.log('Cancel Button was pressed');
        }}
        // imageUri={imgURI}
        imageUri="https://www.lifeofpix.com/wp-content/uploads/2018/09/manhattan_-11-1600x2396.jpg"
        imageWidth={1600}
        imageHeight={2396}
        NOT_SELECTED_AREA_OPACITY={0.3}
        BORDER_WIDTH={20}
      />
    );
  }
}

export default ImageCrop;
