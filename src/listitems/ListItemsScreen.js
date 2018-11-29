import React from 'react';
import {
  ActivityIndicator,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class ListItemsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: undefined,
      error: undefined
    };
  }

  componentDidMount() {
    this.props.dataLoader.loadData
      .then((data) => {
        this.setState({
          listItems: data,
          error: undefined
        });
      })
      .reject((error) => {
        this.setState({
          listItems: undefined,
          error: error
        });
      });
  }

  render() {
    const { listItems, error } = this.state;
    if (listItems) {
      this._renderListItems(listItems);
    }
    else if (error) {
      this._renderError(error);
    }
    else {
      this._renderLoading();
    }
  }

  _renderLoadedListItems(listItems) {
    return (
      <FlatList
        data={listItems}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderListItem}
      />
    );
  }

  _keyExtractor = (item, idx) => idx;

  _renderListItem(item) {
    return (
      <View style={styles.listItemContainer}>
        <Image source={item.source} style={styles.listItemImage} />
        <Text style={styles.listItemDescription}>{item.description}</Text>
      </View>
    );
  }

  _renderLoading() {
    return <ActivityIndicator />;
  }
  
  _renderError(error) {
    return <Text>{error.toString()}</Text>
  }
}

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row"
  },
  listItemImage: {

  },
  listItemDescription: {

  }
});
