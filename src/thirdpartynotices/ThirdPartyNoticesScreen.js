import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ThirdPartyNoticesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this._renderNotice("React Native", "Facebook", "https://facebook.github.io/react-native/")}
        {this._renderNotice("React Navigation", "React Navigation Contributors", "https://reactnavigation.org/")}
        {this._renderNotice("React Native Threads", "Travis Nuttall", "https://github.com/joltup/react-native-threads")}
        {this._renderImageAttribution()}
        {this._renderLoremIpsumAttribution()}
      </View>
    );
  }

  _renderNotice(title, author, website) {
    return (
      <View style={styles.noticeContainer}>
        <Text style={styles.noticeTitle}>{title}</Text>
        <Text>{author}</Text>
        <Text>{website}</Text>
      </View>
    );
  }

  _renderImageAttribution() {
    return (
      <View style={styles.noticeContainer}>
        <Text style={styles.noticeTitle}>Listview images from Caltech 101 dataset</Text>
        <Text>L. Fei-Fei, R. Fergus and P. Perona. Learning generative visual models
from few training examples: an incremental Bayesian approach tested on
101 object categories. IEEE. CVPR 2004, Workshop on Generative-Model
Based Vision. 2004</Text>
      </View>
    );
  }

  _renderLoremIpsumAttribution() {
    return (<View style={styles.noticeContainer}>
      <Text style={styles.noticeTitle}>Placeholder texts generated at https://www.lipsum.com/</Text>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  noticeContainer: {
    marginVertical: 10
  },
  noticeTitle: {
    fontSize: 20
  }
});
