import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  return (
    <View>
      <ImageBackground
        source={require('./src/assets/images/background.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Image
          source={require('./src/assets/images/logo.png')}
          width="100"
          height="100"
        />
        <Text style={styles.title}>XYZ{'\n'}AUTOMOTIVE</Text>
        <Text style={styles.desc}>
          Authorized{'\n'}Car{'\n'}Dealer
        </Text>
        <View style={styles.bottom}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={styles.buttonMasuk}
              onPress={() => {
                Alert.alert('buttonMasuk', 'Test onPress buttonMasuk');
              }}>
              <Text style={styles.buttonTextMasuk}>Masuk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonDaftar}
              onPress={() => {
                Alert.alert('buttonDaftar', 'Test onPress buttonDaftar');
              }}>
              <Text style={styles.buttonTextDaftar}>Daftar</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.garisPemisah} />
            <View style={styles.pemisah}>
              <Text style={styles.textPemisah}>atau</Text>
            </View>
            <View style={styles.garisPemisah} />
          </View>
          <TouchableOpacity
            style={styles.buttonGuest}
            onPress={() => {
              Alert.alert('buttonGuest', 'Test onPress buttonGuest');
            }}>
            <Text style={styles.buttonTextGuest}>Lanjutkan sebagai tamu</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
    marginLeft: 40,
    color: '#FFF',
    fontFamily: 'Anton-Regular',
    lineHeight: 34,
    fontSize: 36,
  },
  desc: {
    paddingTop: 30,
    marginLeft: 40,
    fontFamily: 'Poppins-Regular',
    color: '#FFF',
    fontSize: 18,
    lineHeight: 18,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignItems: 'center',
  },
  buttonMasuk: {
    marginRight: 20,
    width: 120,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextMasuk: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#FF6B5B',
  },
  buttonDaftar: {
    width: 120,
    height: 40,
    backgroundColor: '#FF6B5B',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextDaftar: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#FFF',
  },
  pemisah: {
    marginVertical: 16,
  },
  garisPemisah: {
    backgroundColor: '#C4C4C4',
    height: 1,
    width: '25%',
  },
  textPemisah: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#C4C4C4',
    paddingHorizontal: 5,
  },
  buttonGuest: {
    width: 260,
    height: 40,
    backgroundColor: '#1C252E',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextGuest: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#FFF',
  },
});
