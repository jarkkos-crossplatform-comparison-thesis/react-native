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
    return (
      <View>
        <View style={styles.navigationButton}><Button title="Button latency" onPress={this._showButtonLatency} /></View>
        <View style={styles.navigationButton}><Button title="Local listview" onPress={this._showLocalListView} /></View>
        <View style={styles.navigationButton}><Button title="Nerwork listview" onPress={this._showNetworkListView} /></View>
        <View style={styles.navigationButton}><Button title="Heavy computation" onPress={this._showHeavyComputation} /></View>
        <View style={styles.navigationButton}><Button title="Vibration latency" onPress={this._showVibrationLatency} /></View>
        <View style={styles.navigationButton}><Button title="Third party notices" onPress={this._showThirdPartyNotices} /></View>
      </View>
    );
  }

  _showButtonLatency() {

  }

  _showLocalListView() {

  }

  _showNetworkListView() {

  }

  _showHeavyComputation() {

  }

  _showVibrationLatency() {

  }

  _showThirdPartyNotices() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
