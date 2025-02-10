import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
//@ts-ignore
import Google from '@/assets/images/google-logo.svg'
import { Colors } from '@/constants/Colors'
import { Href, Link } from 'expo-router'

type Props = {
    emailHref: Href
}

const SocialLoginButtom = (props: Props) => {
    const { emailHref } = props;
    return (
        <View style={styles.socialLoginWrapper}>
            <Animated.View entering={FadeInDown.delay(500).duration(300)}>
                <Link asChild href={emailHref} >
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name='mail-outline' size={20} color={Colors.black} />
                        <Text style={styles.btnTxt}>continue with email</Text>
                    </TouchableOpacity>
                </Link>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(700).duration(300)}>
                <Link asChild href={emailHref} >
                    <TouchableOpacity style={styles.btn}>
                        <Google fontSize={20} width={20} height={20} />
                        <Text style={styles.btnTxt}>continue with google</Text>
                    </TouchableOpacity>
                </Link>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(1100).duration(300)}>
                <Link asChild href={emailHref} >
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name='logo-apple' size={20} color={Colors.black} />
                        <Text style={styles.btnTxt}>continue with apple</Text>
                    </TouchableOpacity>
                </Link>
            </Animated.View>
        </View>
    )
}

export default SocialLoginButtom
const styles = StyleSheet.create({

    socialLoginWrapper: {
        alignSelf: 'stretch',
    },
    btn: {
        flexDirection: 'row',
        padding: 10,
        borderColor: Colors.gray,
        borderRadius: 25,
        borderWidth: .5,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginBottom: 15

    }, btnTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black
    }
})