import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Cart from './assets/component/Cart';
import Communication from './pages/Communication';
import LoginForm from './pages/LoginForm';
import MenuBeli from './pages/MenuBeli';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
// Arrow Function
const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);
  // return <StateDinamis />;
  //if else function
  // return <View>{isShow && <LoginForm />}</View>;
  return (
    <View>
      {/* <LoginForm /> */}
      {/* <StateDinamis /> */}
      {/* <PropsDinamis /> */}
      <Communication />
      {/* <Position /> */}
      {/* <MenuBeli /> */}
      {/* <Cart /> */}
    </View>
  );
};

// class LoginFormComponent extends Component {
//   render() {
//     return (
//       <View>
//         <NavTopComponent />
//         <ArrowComponent />
//         <WelcomeTitleComponent />
//       </View>
//     );
//   }
// }
// const LoginForm = () => {
//   return (
//     <View>
//       <NavTopComponent />
//       <ArrowComponent />
//       <WelcomeTitleComponent />
//     </View>
//   );
// };

//Functional Componen
// const NavTopComponent = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.item}>9:41</Text>
//       <Image source={status} style={[styles.item, {width: 67, height: 11.5}]} />
//     </View>
//   );
// };

// const ArrowComponent = () => {
//   return (
//     <View>
//       <Image
//         source={leftArrow}
//         style={[styles.leftArrow, {width: 24, height: 24}]}
//       />
//     </View>
//   );
// };

// const WelcomeTitleComponent = () => {
//   return (
//     <View>
//       <Text style={styles.welcome}>Selamat Datang di {'\n'}BUMDES</Text>
//       <Text style={styles.secondaryTitle}>
//         Silahkan masukan data untuk login
//       </Text>
//       <Text style={styles.email}>Email/Phone</Text>
//       <View style={styles.emailTextField}>
//         <Text
//           style={{
//             color: '#C4C5C4',
//             fontSize: 14,
//             fontWeight: 'regular',
//             marginVertical: 14,
//             marginLeft: 20,
//           }}>
//           Masukan Alamat Email/No Telepon Anda
//         </Text>
//       </View>
//       <View>
//         <Text style={styles.password}>Password</Text>
//         <View style={styles.passwordTextField}>
//           <Text
//             style={{
//               marginVertical: 16,
//               marginHorizontal: 20,
//               color: '#C4C5C4',
//             }}>
//             Masukan kata sandi akun
//           </Text>
//           <Image
//             source={eyeIcon}
//             style={{marginVertical: 15, marginHorizontal: 14}}></Image>
//         </View>
//         <View style={styles.signInButton}>
//           <Text
//             style={{
//               color: 'white',
//               marginVertical: 15,
//               textAlign: 'center',
//               fontSize: 14,
//               fontWeight: 'bold',
//             }}>
//             Sign In
//           </Text>
//         </View>
//         <View style={styles.linkFooter}>
//           <Text>Forgot Password</Text>
//           <Text style={{color: '#3669C9'}}>Sign Up</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

//Class Component

// const StylingReactNativeComponent = () => {
//   return (
//     <View>
//       <Text style={styles.text}>Styling Componen</Text>
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: 'blue',
//           borderWidth: 2,
//           borderColor: 'red',
//           marginTop: 10,
//           marginLeft: 15,
//         }}></View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'green',
//     marginLeft: 15,
//     marginTop: 10,
//   },
// });
// const SampleComponent = () => {
//   return (
//     <View>
//       <View style={{width: 80, height: 80, backgroundColor: 'red'}}></View>
//       <Text>Asrul</Text>
//       <Abdullah />
//       <Text>Adalah</Text>
//       <Photo />
//       <TextInput style={{borderWidth: 1}} />
//       <BoxGreen />
//       <Profile />
//     </View>
//   );
// };
// const Abdullah = () => {
//   return <Text>Belajar React Native</Text>;
// };

// const Photo = () => {
//   return (
//     <Image
//       source={{uri: 'https://placeimg.com/100/100/tech'}}
//       style={{width: 100, height: 100}}
//     />
//   );
// };

// class BoxGreen extends Component {
//   render() {
//     return <Text>Ini component dari class</Text>;
//   }
// }

// class Profile extends Component {
//   render() {
//     return (
//       <View>
//         <Image
//           source={{uri: 'https://placeimg.com/100/100/animals'}}
//           style={{width: 100, height: 100, borderRadius: 50}}
//         />
//         <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 23}}>
//           Ini adalah kucing
//         </Text>
//       </View>
//     );
//   }
// }

export default App;

// Function
// function App(){

// }
