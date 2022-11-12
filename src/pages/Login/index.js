import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import status from './assets/container.png';
import leftArrow from './assets/angle-small-left.png';
import eyeIcon from './assets/ic_view_pass.png';

class LoginFormComponent extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <NavTopComponent />
          <ArrowComponent />
          <WelcomeTitleComponent />
          <WelcomeTitleComponent />
          <WelcomeTitleComponent />
        </View>
      </ScrollView>
    );
  }
}
class NavTopComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>9:41</Text>
        <Image
          source={status}
          style={[styles.item, {width: 67, height: 11.5}]}
        />
      </View>
    );
  }
}

class ArrowComponent extends Component {
  render() {
    return (
      <View>
        <Image
          source={leftArrow}
          style={[styles.leftArrow, {width: 24, height: 24}]}
        />
      </View>
    );
  }
}

class WelcomeTitleComponent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Selamat Datang di {'\n'}BUMDES</Text>
        <Text style={styles.secondaryTitle}>
          Silahkan masukan data untuk login
        </Text>
        <Text style={styles.email}>Email/Phone</Text>
        <View style={styles.emailTextField}>
          <Text
            style={{
              color: '#C4C5C4',
              fontSize: 14,
              fontWeight: 'regular',
              marginVertical: 14,
              marginLeft: 20,
            }}>
            Masukan Alamat Email/No Telepon Anda
          </Text>
        </View>
        <View>
          <Text style={styles.password}>Password</Text>
          <View style={styles.passwordTextField}>
            <Text
              style={{
                marginVertical: 16,
                marginHorizontal: 20,
                color: '#C4C5C4',
              }}>
              Masukan kata sandi akun
            </Text>
            <Image
              source={eyeIcon}
              style={{marginVertical: 15, marginHorizontal: 14}}></Image>
          </View>
          <View style={styles.signInButton}>
            <Text
              style={{
                color: 'white',
                marginVertical: 15,
                textAlign: 'center',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Sign In
            </Text>
          </View>
          <View style={styles.linkFooter}>
            <Text>Forgot Password</Text>
            <Text style={{color: '#3669C9'}}>Sign Up</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 25,
  },
  leftArrow: {
    marginTop: 15,
    marginLeft: 5,
  },
  welcome: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 72,
    marginBottom: 20,
    color: '#0C1A30',
  },
  secondaryTitle: {
    fontSize: 14,
    marginLeft: 25,
    fontWeight: 'regular',
    color: '#838589',
  },
  email: {
    marginTop: 50,
    fontWeight: 'regular',
    fontSize: 14,
    marginLeft: 25,
    color: '#0C1A30',
    marginBottom: 20,
  },
  emailTextField: {
    backgroundColor: '#FAFAFA',
    width: 325,
    height: 50,
    marginLeft: 25,
    borderColor: '#EDEDED',
    borderRadius: 10,
  },
  password: {
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 20,
  },
  passwordTextField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FAFAFA',
    width: 325,
    height: 50,
    marginLeft: 25,
    borderColor: '#EDEDED',
    borderRadius: 10,
    marginBottom: 70,
  },
  signInButton: {
    backgroundColor: '#C4C5C4',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 25,
    marginBottom: 50,
  },
  linkFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 31,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default LoginFormComponent;
