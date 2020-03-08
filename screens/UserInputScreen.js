import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {resetStep} from '../src/actions/incrementAction';

class UserInputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleUserInput = () => {
    this.props.resetStep();
    this.props.navigation.navigate('Home', {
      numOfFields: this.state.input,
    });
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter the number of fields you want"
          onChangeText={text => this.setState({input: text})}
        />
        <Button title="Submit" onPress={this.handleUserInput} />
      </View>
    );
  }
}

// eslint-disable-next-line prettier/prettier
export default connect(null, {resetStep})(UserInputScreen);
