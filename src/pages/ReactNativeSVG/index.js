import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ilustrasi from '../../assets/images/ilustrasi.svg';

const ReactNativeSVG = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi File SVG Didalam React Native</Text>
      <Ilustrasi width={244} height={125} />
    </View>
  );
};

export default ReactNativeSVG;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
