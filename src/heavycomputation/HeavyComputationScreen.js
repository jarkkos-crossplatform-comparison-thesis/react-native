import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button } from "../components";

import findPrimesBelow from "./findPrimes";

export default class HeavyComputationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      computationStatus: "idle",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Click me!" onPressIn={this._startComputation} />
        <View style={styles.statusContainer}>
          {this._renderStatus()}
        </View>
      </View>
    );
  }

  _renderStatus() {
    const { computationStatus } = this.state;
    if (computationStatus == "idle") {
      return <Text>Click to start</Text>;
    }
    else if (computationStatus == "computing") {
      return <ActivityIndicator />;
    }
    else {
      return <Text>Done</Text>;
    }
  }

  _startComputation = () => {
    const max = 3000000;

    if (this.state.computationPromise) {
      this.state.computationPromise.cancelled = true;
    }

    const computationPromise = new Promise((resolve) => {
      setTimeout(() =>{
        findPrimesBelow(max);
        resolve();
      }, 0);
    }).then(() => {
      if (!this.cancelled) {
        this.setState({
          computationStatus: "done",
          computationPromise: undefined
        });
      }
    });

    this.setState({
      computationStatus: "computing",
      computationPromise: computationPromise
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16
  },
  statusContainer: {
    marginTop: 16
  }
});
