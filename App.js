import React from 'react';
import { Text } from "react-native";
import {
  createStackNavigator
} from "react-navigation";

import SelectTestScreen from "./src/selecttest";
import ButtonLatencyScreen from "./src/buttonlatency";

class NotImplemented extends React.Component {
  render() {
    return <Text>Not implemented</Text>;
  }
}

const App = createStackNavigator({
  Landing: { screen: SelectTestScreen },
  ButtonLatency: { screen: ButtonLatencyScreen },
  LocalListView: { screen: NotImplemented },
  NetworkListView: { screen: NotImplemented },
  HeavyComputation: { screen: NotImplemented },
  VibrationLatency: { screen: NotImplemented },
  ThirdPartyNotices: { screen: NotImplemented }
});

export default App;