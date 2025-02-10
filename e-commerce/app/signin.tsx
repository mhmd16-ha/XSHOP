import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Colors } from '@/constants/Colors'
import { router, Stack } from 'expo-router'
import InputField from '@/components/InputField'
import SocialLoginButtom from '@/components/SocialLoginButtom'


export default class signin extends Component {
  render() {
    return (
      <>
      <Stack.Screen options={{ headerTitle: 'Sign In' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Login to Your Account</Text>
        <InputField placeholder='Email Adress'
          placeholderTextColor={Colors.gray} autoCapitalize='none' />
        <InputField placeholder='Password'
          placeholderTextColor={Colors.gray} autoCapitalize='none' secureTextEntry={true} />
        <TouchableOpacity onPress={() => {
          router.dismissAll();
          router.push('/(tabs)');
        }}style={styles.btn}>
          <Text style={styles.btntxt}>Login</Text>
        </TouchableOpacity>
        {/* <Text style={styles.logintxt}>Aleardy have an account ?{" "}
          <TouchableOpacity>
            <Text style={styles.logintxtSpam}>Login</Text>
          </TouchableOpacity>
        </Text> */}
        <View style={styles.divider}></View>
        <SocialLoginButtom emailHref={'/signup'} />
      </View>
      </>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: Colors.black,
    marginBottom: 30
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20

  },
  btntxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600'
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black
  }, logintxt: {
    marginTop: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
    marginBottom: 30
  },
  logintxtSpam: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 14,
  }, divider: {
    width: "50%",
    borderTopColor: 'gray',
    borderTopWidth: .5,
    marginBottom: 30
  }
})