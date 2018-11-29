import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Thread } from "react-native-threads";

import { Button } from "../components";

export default class HeavyComputationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      computationStatus: "idle",
      curThread: undefined,
    };
  }

  componentWillUnmount() {
    if (this.state.curThread) {
      this.state.curThread.terminate();
    }
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
    const max = "3000000";

    if (this.state.curThread) {
      this.state.curThread.terminate();
    }

    const workerThread = new Thread("src/heavycomputation/findPrimes.js");
    workerThread.onmessage = () => {
      this.setState({
        computationStatus: "done",
        curThread: undefined
      });
    };
    workerThread.postMessage(max);

    this.setState({
      computationStatus: "computing",
      curThread: workerThread
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
