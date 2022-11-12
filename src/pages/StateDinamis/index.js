import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import React, {Component, useState} from 'react';

//Functional component
const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

//Class COmponenet
class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        {/* <Button title="Tambah" onPress={() => alert('Hello Button')} /> */}
        <Button
          title="Tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}
const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text
        style={{
          textAlign: 'center',
        }}>
        index
      </Text>
      <Text style={styles.section}>Functional Component (Hooks)</Text>
      <Counter />
      <Counter />
      <Text style={styles.section}>Class Component</Text>
      <CounterClass />
      <CounterClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  section: {
    marginTop: 20,
  },
});
