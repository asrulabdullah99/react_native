import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    // avatar: '',
    // email: '',
    // first_name: '',
    // last_name: '',
    avatar: '',
    email: '',
    name: '',
    // title: '',
    // body: '',
  });
  //Call Fake API JSONPlaceholder with JS basic
  // Call API method GET
  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/todos/1')
  //       .then(response => response.json())
  //       .then(json => console.log(json));
  //   }, []);
  useEffect(() => {
    //call api method POST
    // const dataForAPI = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // console.log('data object:', dataForAPI);
    // console.log('data stringify:', JSON.stringify(dataForAPI));
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('post response:', json);
    //   });
  }, []);
  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  //jika API tidak ada array
  // const getData = () => {
  //   fetch('http://10.0.2.2:8000/api/data-dosen/4')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       setDataUser(json.data);
  //     });
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Vanilla JS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <View style={styles.thumbnail}>
        <Image
          source={{uri: 'http://10.0.2.2:8000/storage/' + dataUser.avatar}}
          style={styles.avatar}
        />
      </View>
      <Text>{`${dataUser.name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line}></View>
      <Button title="POST DATA"></Button>
      <Text>Response POST DATA</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 50},
  thumbnail: {alignItems: 'center'},
});
