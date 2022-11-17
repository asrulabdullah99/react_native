import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    // avatar: '',
    // email: '',
    // first_name: '',
    // last_name: '',
    title: '',
    body: '',
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
  // const getData = () => {
  //   fetch('https://reqres.in/api/users/2')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       setDataUser(json.data);
  //     });
  // };

  //jika API tidak ada array
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Vanilla JS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      {/* <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text> */}
      <Text>Title : {dataUser.title}</Text>
      <Text>Body : {dataUser.body}</Text>
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
});
