import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

const MenuBeli = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.menu}>Menu Utama</Text>
      <View style={styles.wrapper}>
        <Image
          source={{
            uri: 'https://burst.shopifycdn.com/photos/woman-checking-phone.jpg',
          }}
          style={styles.img}
        />
        <Text style={styles.title}>Macbook Pro M2 2022</Text>
        <Text style={styles.price}>Rp 25.000.000,-</Text>
        <Text style={styles.place}>Pontianak, Indonesia</Text>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.btnBeli}>BELI</Text>
        </View>
      </View>
    </View>
  );
};

export default MenuBeli;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  menu: {
    padding: 20,
    fontWeight: 'bold',
  },
  wrapper: {
    backgroundColor: '#f4ede4',
    height: 450,
    width: 300,
    padding: 10,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    paddingTop: 20,
    fontSize: 18,
  },
  price: {
    color: '#ff9470',
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  place: {
    color: '#000',
    paddingTop: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  btnBeli: {
    backgroundColor: '#ff4c30',
    width: '60%',
    textAlign: 'center',
    padding: 15,
    borderRadius: 25,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
