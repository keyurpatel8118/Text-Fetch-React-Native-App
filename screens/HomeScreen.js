import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    const timesRendered = this.props.currentStep;
    const {numOfFields} = this.props.route.params;
    console.log('Times Rendered: ', timesRendered);
    return (
      <View>
        {timesRendered <= numOfFields ? (
          <View>{navigation.navigate('Stepper')}</View>
        ) : (
          <View>
            <Text>Task Completed</Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentStep: state.increment,
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, null)(HomeScreen);
