import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BasicJavascript = () => {
  //Tipe Data
  const nama = 'Asrul Abdullah'; //String
  let usia = 24; //Number
  const apakahLakiLaki = true; //boolean

  //complex
  const hewanPeliharaan = {
    nama: 'Oyen',
    jenis: 'kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Queen',
    },
  }; //object
  //function
  const sapaOrang = (name, age) => {
    return console.log(`Hello ${name} usia anda ${age}`);
  };

  sapaOrang('Asrul Abdullah', 24);

  const namaOrang = ['Asrul', 'Dian', 'Yahya', 'Budi', 'Ian'];
  typeof namaOrang;

  //jika hujan turun maka bawa payung

  //   if (hewanPeliharaan.nama === 'Oyen') {
  //     console.log(`Hallo ${nama}`);
  //   } else {
  //     console.log('Hewan siapa ini');
  //   }

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Oyen') {
    //   hasilSapa = 'Hallo, Oyen';
    //   console.log(`Hallo ${nama}`);
    // } else {
    //   hasilSapa = 'Ini hawan siapa';
    //   console.log('Hewan siapa ini');
    // }
    // return hasilSapa;

    //Ternary Operator
    return objectHewan.nama === 'Oyen'
      ? 'Hallo Oyen. apa kabar ?'
      : 'Ini hewan siapa ?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Basic Javascript di React Native
      </Text>
      <Text>Nama : {nama}</Text>
      <Text>Usia : {usia}</Text>
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>
      <Text>Looping</Text>
      {namaOrang.map(x => (
        <Text>{x}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
