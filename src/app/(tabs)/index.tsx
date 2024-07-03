import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

import { Image, } from 'react-native-elements';
import { Stack, Tabs, router } from 'expo-router';
import Button from '@/components/Button';

import NavigationBar from '@/components/navigationBar';
import SearchComponent from '@/components/searchBar';

const Footer = require('@/../../assets/images/Footer.jpg')

export default function TabOneScreen() {
  return (
    <View style={designer.container}>
      <Stack.Screen options={{
        headerShown: false,
      }}>

      </Stack.Screen>

      <View style={{ height: '20%', backgroundColor: '#1d95d2' }}>
        <NavigationBar />
        <SearchComponent />
      </View>

      <View style={designer.messageWrapper}>
        <Text style={designer.message}>WELCOME TO <Text style={{ color: '#1d95d2', fontWeight: 'bold' }}>IVF SOLUTION</Text>
        </Text>
      </View>

      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{
          width: '60%',
        }}>
          <Button onPress={() => {
            router.push("/login")
          }} text="Login" />
        </View>

        <View style={{
          width: '60%',
        }}>
          <Button onPress={() => {
            router.push("/signup")
          }} text="Signup" />
        </View>

      </View>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 'auto' }}>
          <Image style={designer.footer} source={Footer}>
          </Image>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const designer = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: 'white'
  },
  messageWrapper: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 22,
    fontWeight: 'bold',

  },
  footer: {
    width: "100%",
    height: 200,
    resizeMode: 'stretch',
    marginTop: 73,
  }
});
