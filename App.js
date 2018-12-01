import React from 'react';
import { Animated, Easing, Text } from "react-native";
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


//transitionConfig to remove animations from:
//https://github.com/react-navigation/react-navigation/issues/1254#issuecomment-346319921
const App = createStackNavigator(
  {
    Landing: { screen: SelectTestScreen },
    ButtonLatency: { screen: ButtonLatencyScreen },
    LocalListView: { screen: wrapListItemsWithDataLoader(localDataLoader) },
    NetworkListView: { screen: wrapListItemsWithDataLoader(networkDataLoader) },
    HeavyComputation: { screen: HeavyComputationScreen },
    VibrationLatency: { screen: VibrationLatency },
    ThirdPartyNotices: { screen: NotImplemented }
  }, {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
      screenInterpolator: sceneProps => {
         const { layout, position, scene } = sceneProps;
         const { index } = scene;
         const width = layout.initWidth;
         const translateX = position.interpolate({
           inputRange: [index - 1, index, index + 1],
           outputRange: [width, 0, 0],
         });
         if (index <= 1){
             return {};
         }
  
         return {transform: [{ translateX }] };
       }
  })
  });

export default App;