import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Button } from "../components";

const reactNativeLogo = require("../../assets/img/react-native-logo.png");

export default class SelecTestScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this._renderAppInfo()}
        {this._renderNavigationButtons()}
      </View>
    );
  }

  _renderAppInfo() {
    return (
      <View style={styles.headerContainer}>
        <Image source={reactNativeLogo} style={styles.logoImage} />
        <View style={styles.appInfoContainer}>
          <Text>React Native</Text>
          <Text>Version whatever</Text>
          <Text>Select a test</Text>
        </View>
        <Image source={reactNativeLogo} style={styles.logoImage} />
      </View>
    );
  }

  _renderNavigationButtons() {
    const renderButton = (title, onPressIn) => (
      <View style={styles.navigationButton}>
        <Button title={title} onPressIn={onPressIn} />
      </View>
    );

    const { navigate } = this.props.navigation;

    return (
      <View>
        {renderButton("Button latency", () => { navigate("ButtonLatency") })}
        {renderButton("Local listview", () => { navigate("LocalListView") })}
        {renderButton("Nerwork listview", () => { navigate("NetworkListView") })}
        {renderButton("Heavy computation", () => { navigate("HeavyComputation") })}
        {renderButton("Vibration latency", () => { navigate("VibrationLatency") })}
        {renderButton("Third party notices", () => { navigate("ThirdPartyNotices") })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appInfoContainer: {
    alignItems: "center",
  },
  logoImage: {
    width: 50,
    height: 50
  },
  navigationButton: {
    marginTop: 16,
    backgroundColor: "#777"
  }
});
