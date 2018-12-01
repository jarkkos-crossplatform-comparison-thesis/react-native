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
    this.props.loadData()
      .then(
        (data) => {
          this.setState({
            listItems: data,
            error: undefined
          });
        },
        (error) => {
          this.setState({
            listItems: undefined,
            error: error
          });
        });
  }

  render() {
    const { listItems, error } = this.state;
    if (listItems) {
      return this._renderLoadedListItems(listItems);
    }
    else if (error) {
      return this._renderError(error);
    }
    else {
      return this._renderLoading();
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

  _keyExtractor = (item, idx) => { return idx.toString() }

  _renderListItem({item}) {
    return (
      <View style={styles.listItemContainer}>
        <Image source={{uri: item.imageSrc}} style={styles.listItemImage} />
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
    width: 80,
    height: 80
  },
  listItemDescription: {

  }
});
