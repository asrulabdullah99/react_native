import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import cart from '../../assets/icons/shopping-cart.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={{width: 64, height: 64}} />
        <Text style={styles.notif}>0</Text>
      </View>
      <Text>Keranjang Belanja</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  cartWrapper: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    position: 'relative',
  },
  notif: {
    backgroundColor: '#14cdc8',
    width: 24,
    height: 24,
    borderRadius: 12,
    color: '#ffffff',
    padding: 2,
    position: 'absolute',
    right: 0,
    top: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
