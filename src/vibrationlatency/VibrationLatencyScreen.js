import React from 'react';
import { StyleSheet, Vibration, View } from 'react-native';

import { Button } from "./../components";

export default class VibrationLatencyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Click me!" onPressIn={this._vibrateDevice} />
      </View>
    );
  }

  _vibrateDevice = () => {
    Vibration.vibrate(400)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
