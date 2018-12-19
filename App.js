import React from 'react';
import { Animated, Easing, Text } from "react-native";
import { useScreens } from "react-native-screens";
import {
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import SelectTestScreen from "./src/selecttest";
import ButtonLatencyScreen from "./src/buttonlatency";
import HeavyComputationScreen from "./src/heavycomputation";
import { LocalListItemsScreen, NetworkListItemsScreen } from "./src/listitems";
import ThirdPartyNotices from "./src/thirdpartynotices";
import VibrationLatency from "./src/vibrationlatency";

useScreens();

//transitionConfig to remove animations from:
//https://github.com/react-navigation/react-navigation/issues/1254
const App = createAppContainer(createStackNavigator(
  {
    Landing: {
      screen: SelectTestScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Thesis benchmarking"
      })
    },
    ButtonLatency: {
      screen: ButtonLatencyScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Button latency"
      })
    },
    LocalListView: {
      screen: LocalListItemsScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Local listview"
      })
    },
    NetworkListView: {
      screen: NetworkListItemsScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Network listview"
      })
    },
    HeavyComputation: {
      screen: HeavyComputationScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Heavy computation"
      })
    },
    VibrationLatency: {
      screen: VibrationLatency,
      navigationOptions: ({ navigation }) => ({
        title: "Vibration latency"
      })
    },
    ThirdPartyNotices: {
      screen: ThirdPartyNotices,
      navigationOptions: ({ navigation }) => ({
        title: "Third party notices"
      })
    }
  }, {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      }
    })
  }));

export default App;