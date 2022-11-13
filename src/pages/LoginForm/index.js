import React, {Component, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Button, TextInput} from 'react-native';
import status from '../../assets/icons/container.png';
import eyeIcon from '../../assets/icons/ic_view_pass.png';
import leftArrow from '../../assets/icons/angle-small-left.png';

//Siklus Hidup Class Component
// class LoginForm extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   console.log('hello constructor');
//   //   //contoh untuk trigger component did update
//   // }

//   //Componen Did Mount bebas mau simpan dimana
//   render() {
//     console.log('render');
//     return (
//       <View>
//         <NavTopComponent />
//         <ArrowComponent />
//         <WelcomeTitleComponent />
//       </View>
//     );
//   }
// }
// class NavTopComponent extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.item}>9:41</Text>
//         <Image
//           source={status}
//           style={[styles.item, {width: 67, height: 11.5}]}
//         />
//       </View>
//     );
//   }
// }
// class ArrowComponent extends Component {
//   render() {
//     return (
//       <View>
//         <Image
//           source={leftArrow}
//           style={[styles.leftArrow, {width: 24, height: 24}]}
//         />
//       </View>
//     );
//   }
// }

// class WelcomeTitleComponent extends Component {
//   constructor(props) {
//     super(props);
//     console.log('hello constructor');
//     this.state = {
//       nama: 'IFApps',
//     };
//   }

//   //componen muncul
//   componentDidMount() {
//     console.log('componen did mount');
//     setTimeout(() => {
//       this.setState({
//         nama: 'InformatikaApps',
//       });
//     }, 2000);
//   }
//   //Componen muncul jika di update
//   componentDidUpdate() {
//     console.log('componen did update');
//   }
//   //component hilang
//   componentWillUnmount() {
//     console.log('componen will unmount');
//   }

//   render() {
//     return (
//       <View>
//         <Text style={styles.welcome}>
//           Selamat Datang di {'\n'}
//           {this.state.nama}
//         </Text>
//         <Text style={styles.secondaryTitle}>
//           Silahkan masukan data untuk login
//         </Text>
//         <Text style={styles.email}>Email/Phone</Text>
//         <View style={styles.emailTextField}>
//           <Text
//             style={{
//               color: '#C4C5C4',
//               fontSize: 14,
//               fontWeight: 'regular',
//               marginVertical: 14,
//               marginLeft: 20,
//             }}>
//             Masukan Alamat Email/No Telepon Anda
//           </Text>
//         </View>
//         <View>
//           <Text style={styles.password}>Password</Text>
//           <View style={styles.passwordTextField}>
//             <Text
//               style={{
//                 marginVertical: 16,
//                 marginHorizontal: 20,
//                 color: '#C4C5C4',
//               }}>
//               Masukan kata sandi akun
//             </Text>
//             <Image
//               source={eyeIcon}
//               style={{marginVertical: 15, marginHorizontal: 14}}></Image>
//           </View>
//           <View style={styles.signInButton}>
//             <Text
//               style={{
//                 color: 'white',
//                 marginVertical: 15,
//                 textAlign: 'center',
//                 fontSize: 14,
//                 fontWeight: 'bold',
//               }}>
//               Sign In
//             </Text>
//           </View>
//           <View style={styles.linkFooter}>
//             <Text>Forgot Password</Text>
//             <Text style={{color: '#3669C9'}}>Sign Up</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   item: {
//     marginVertical: 10,
//     marginHorizontal: 25,
//   },
//   leftArrow: {
//     marginTop: 15,
//     marginLeft: 5,
//   },
//   welcome: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginLeft: 25,
//     marginTop: 72,
//     marginBottom: 20,
//     color: '#0C1A30',
//   },
//   secondaryTitle: {
//     fontSize: 14,
//     marginLeft: 25,
//     fontWeight: 'regular',
//     color: '#838589',
//   },
//   email: {
//     marginTop: 50,
//     fontWeight: 'regular',
//     fontSize: 14,
//     marginLeft: 25,
//     color: '#0C1A30',
//     marginBottom: 20,
//   },
//   emailTextField: {
//     backgroundColor: '#FAFAFA',
//     width: 325,
//     height: 50,
//     marginLeft: 25,
//     borderColor: '#EDEDED',
//     borderRadius: 10,
//   },
//   password: {
//     marginLeft: 25,
//     marginTop: 30,
//     marginBottom: 20,
//   },
//   passwordTextField: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#FAFAFA',
//     width: 325,
//     height: 50,
//     marginLeft: 25,
//     borderColor: '#EDEDED',
//     borderRadius: 10,
//     marginBottom: 70,
//   },
//   signInButton: {
//     backgroundColor: '#C4C5C4',
//     height: 50,
//     borderRadius: 10,
//     marginHorizontal: 25,
//     marginBottom: 50,
//   },
//   linkFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 31,
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
// });

//Functional component / Hooks
const LoginForm = () => {
  return (
    <View>
      <NavTopComponent />
      <ArrowComponent />
      <WelcomeTitleComponent />
    </View>
  );
};
const NavTopComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>9:41</Text>
      <Image source={status} style={[styles.item, {width: 67, height: 11.5}]} />
    </View>
  );
};
const ArrowComponent = () => {
  return (
    <View>
      <Image
        source={leftArrow}
        style={[styles.leftArrow, {width: 24, height: 24}]}
      />
    </View>
  );
};

const WelcomeTitleComponent = () => {
  const [nama, setNama] = useState('Informatika');
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setNama('IFApps');
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [nama]);
  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setNama('IFApps');
  //   }, 2000);
  // }, [nama]);
  return (
    <View>
      <Text style={styles.welcome}>
        Selamat Datang di {'\n'}
        {nama}
      </Text>
      <Text style={styles.secondaryTitle}>
        Silahkan masukan data untuk login
      </Text>
      <Text style={styles.email}>Email/Phone</Text>
      <View style={styles.emailTextField}>
        <TextInput placeholder="Masukan alamat email/no telepon anda" />
      </View>
      <View>
        <Text style={styles.password}>Password</Text>
        <View style={styles.passwordTextField}>
          <TextInput placeholder="Masukan password anda" />
          <Image
            source={eyeIcon}
            style={{marginVertical: 15, marginHorizontal: 14}}></Image>
        </View>
        <View style={styles.signInButton}>
          <Button
            style={{
              color: 'white',
              marginVertical: 15,
              textAlign: 'center',
              fontSize: 14,
              fontWeight: 'bold',
            }}
            title="Sign In"></Button>
        </View>
        <View style={styles.linkFooter}>
          <Text>Forgot Password</Text>
          <Text style={{color: '#3669C9'}}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
};

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
    height: 50,
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
export default LoginForm;
