import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Cart from '../../assets/component/Cart';
import Product from '../../assets/component/Product';

const Communication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View>
      <Cart quantity={totalProduct}></Cart>
      <Product
        onButtonPress={() => setTotalProduct(totalProduct + 1)}></Product>
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
