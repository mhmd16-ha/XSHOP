import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import InputField from '@/components/InputField'
import SocialLoginButtom from '@/components/SocialLoginButtom'


export default function signup() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Sign Up' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Create An Account</Text>
        <InputField placeholder='Email Adress'
          placeholderTextColor={Colors.gray} autoCapitalize='none' />
        <InputField placeholder='Password'
          placeholderTextColor={Colors.gray} autoCapitalize='none' secureTextEntry={true} />
        <InputField placeholder='Confirm Password'
          placeholderTextColor={Colors.gray} autoCapitalize='none' secureTextEntry={true} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>Craete an Account</Text>
        </TouchableOpacity>
        <Text style={styles.logintxt}>Aleardy have an account ?{" "}
         <Link asChild href={'/signin'}>
         <TouchableOpacity>
            <Text style={styles.logintxtSpam}>signin</Text>
          </TouchableOpacity></Link>
        </Text>
        <View style={styles.divider}></View>
        <SocialLoginButtom emailHref={'/signin'} />
      </View>

    </>
  )
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