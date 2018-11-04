import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const reactNativeLogo = require("../../assets/img/react-native-logo.png")

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
    //TODO: make a custom Button component for easier styling and onPressIn support
    return (
      <View>
        <View style={styles.navigationButton}><Button title="Button latency" onPress={this._showButtonLatency.bind(this)} /></View>
        <View style={styles.navigationButton}><Button title="Local listview" onPress={this._showLocalListView.bind(this)} /></View>
        <View style={styles.navigationButton}><Button title="Nerwork listview" onPress={this._showNetworkListView.bind(this)} /></View>
        <View style={styles.navigationButton}><Button title="Heavy computation" onPress={this._showHeavyComputation.bind(this)} /></View>
        <View style={styles.navigationButton}><Button title="Vibration latency" onPress={this._showVibrationLatency.bind(this)} /></View>
        <View style={styles.navigationButton}><Button title="Third party notices" onPress={this._showThirdPartyNotices.bind(this)} /></View>
      </View>
    );
  }

  _showButtonLatency() {
    this.props.navigation.navigate("ButtonLatency", {})
  }

  _showLocalListView() {
    this.props.navigation.navigate("LocalListView", {})
  }

  _showNetworkListView() {
    this.props.navigation.navigate("NetworkListView", {})
  }

  _showHeavyComputation() {
    this.props.navigation.navigate("HeavyComputation", {})
  }

  _showVibrationLatency() {
    this.props.navigation.navigate("VibrationLatency", {})
  }

  _showThirdPartyNotices() {
    this.props.navigation.navigate("ThirdPartyNotices", {})
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
