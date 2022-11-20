import {Button, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React, {useState} from 'react';
import Axios from 'axios';

const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: 'https://robohash.org/asrul',
        }}
        style={styles.avatar}
      />
      <View style={styles.desc}>
        <Text style={styles.descName}>Nama Lengkap</Text>
        <Text style={styles.descEmail}>Email</Text>
        <Text style={styles.descBidang}>Bidang</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};
const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    console.log('data before send : ', data);

    Axios.post('http://10.0.2.15:3000/users', data).then(res => {
      console.log('res : ', res);
    });
    // fetch('http://10.0.2.2:3004/users')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('respons', json);
    //   });
  };
  return (
    <View style={styles.containers}>
      <Text style={styles.textTitle}>Local API (JSON SERVER)</Text>
      <Text style={styles.label}>Masukkan anggota LiteProject</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={value => setBidang(value)}
      />
      <View style={styles.button}>
        <Button title="Simpan" onPress={submit} />
        <View style={styles.line}></View>
        <Item />
        <Item />
        <Item />
      </View>
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  label: {marginLeft: 10, marginBottom: 10},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 30,
    paddingHorizontal: 25,
    marginHorizontal: 10,
  },
  itemContainer: {flexDirection: 'row'},
  avatar: {
    borderWidth: 1,
    borderRadius: 80,
    width: 80,
    height: 80,
  },
  button: {
    marginHorizontal: 10,
  },
  desc: {
    marginLeft: 10,
    marginTop: 20,
    flex: 1,
  },
  descName: {
    fontWeight: 'bold',
  },
  descEmail: {
    fontSize: 14,
  },
  delete: {
    marginTop: 20,
    marginLeft: 10,
    color: 'red',
    fontWeight: 'bold',
  },
});
