import React from 'react';
import { Button, StyleSheet, Vibration, View } from 'react-native';

export default class VibrationLatencyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Click me!" onPress={this._vibrateDevice} />
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
    marginHorizontal: 16
  }
});
