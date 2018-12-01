import React from 'react';

import ListItemsScreen from "./ListItemsScreen";
import { localDataLoader, networkDataLoader } from "./DataLoaders";

function wrapListItemsWithDataLoader(dataLoader) {
  return class extends React.Component {
    render() {
      return <ListItemsScreen loadData={dataLoader} {...this.props} />
    }
  }
};

export const LocalListItemsScreen = wrapListItemsWithDataLoader(localDataLoader);
export const NetworkListItemsScreen = wrapListItemsWithDataLoader(networkDataLoader);
