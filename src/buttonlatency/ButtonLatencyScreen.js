import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from "../components";

export default class ButtonLatencySceen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderGoBackButton()}
        <View style={styles.testContentContainer}>
          <Button title="Click me!" onPressIn={this._incrementCounter} />
          <Text style={styles.text}>{this.state.counter}</Text>
        </View>
      </View>
    );
  }

  _renderGoBackButton() {
    return <Button title="Go back without animation" onPressIn={this._goBack} />
  }

  _goBack = () => {
    this.props.navigation.goBack();
  }

  _incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  testContentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16
  },
  text: {
    marginTop: 16
  }
});
