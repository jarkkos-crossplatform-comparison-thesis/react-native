import React from 'react';
import { Text } from "react-native";
import {
  createStackNavigator
} from "react-navigation";

import SelectTestScreen from "./src/selecttest";
import ButtonLatencyScreen from "./src/buttonlatency";
import HeavyComputationScreen from "./src/heavycomputation";
import { ListItemsScreen, localDataLoader, networkDataLoader } from "./src/listitems";
import VibrationLatency from "./src/vibrationlatency";

class NotImplemented extends React.Component {
  render() {
    return <Text>Not implemented</Text>;
  }
}

const wrapListItemsWithDataLoader = (dataLoader) => {
  return class extends React.Component {
    static navigationOptions = ListItemsScreen.navigationOptions;

    render() {
      return <ListItemsScreen loadData={dataLoader} {...this.props} />
    }
  }
};

const App = createStackNavigator({
  Landing: { screen: SelectTestScreen },
  ButtonLatency: { screen: ButtonLatencyScreen },
  LocalListView: { screen: wrapListItemsWithDataLoader(localDataLoader) },
  NetworkListView: { screen: wrapListItemsWithDataLoader(networkDataLoader) },
  HeavyComputation: { screen: HeavyComputationScreen },
  VibrationLatency: { screen: VibrationLatency },
  ThirdPartyNotices: { screen: NotImplemented }
});

export default App;