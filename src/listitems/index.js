import React from 'react';

import ListItemsScreen from "./ListItemsScreen";
import { localDataLoader, networkDataLoader } from "./DataLoaders";

const wrapListItemsWithDataLoader = (dataLoader) => {
  return class extends React.Component {
    static navigationOptions = ListItemsScreen.navigationOptions;

    render() {
      return <ListItemsScreen loadData={dataLoader} {...this.props} />
    }
  }
};

export const LocalListItemsScreen = wrapListItemsWithDataLoader(localDataLoader);
export const NetworkListItemsScreen = wrapListItemsWithDataLoader(networkDataLoader);
