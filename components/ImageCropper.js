import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageCropper from 'react-native-advance-image-cropper';

class ImageCrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }

  onDone = croppedImageUri => {
    console.log('Cropped Image URI: ', croppedImageUri);
  };

  render() {
    var {imgURI} = this.props;
    return (
      <ImageCropper
        onDone={this.onDone}
        imageUri={imgURI}
        imageWidth={1600}
        imageHeight={2396}
        NOT_SELECTED_AREA_OPACITY={0.3}
        BORDER_WIDTH={20}
      />
    );
  }
}

export default ImageCrop;
