import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
//@ts-ignore
import Google from '@/assets/images/google-logo.svg'
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import SocialLoginButtom from '@/components/SocialLoginButtom'

export default function index() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <ImageBackground style={styles.background} resizeMode="cover" source={require('@/assets/images/ecommerce-splash.jpg')}>
                <LinearGradient style={styles.linear}
                    colors={["transparent", 'rgba(255,255,255,.9)']}>
                    <View style={styles.wrapper}>
                        <Animated.Text entering={FadeInRight.delay(300).duration(300).springify()} style={styles.title}>ShopX</Animated.Text>
                        <Animated.Text entering={FadeInRight.delay(500).duration(300).springify()} style={styles.description}>One Stop Solution For Your Needs.</Animated.Text>
                        <SocialLoginButtom emailHref={'/signup'} />
                        <Text style={styles.logintxt}>Aleardy have an account ?{" "}
                            <Link href={'/signin'} asChild>
                            <TouchableOpacity>
                                <Text style={styles.logintxtSpam}>signin</Text>
                            </TouchableOpacity>
                            </Link>
                        </Text>
                    </View>

                </LinearGradient>
            </ImageBackground>
        </>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
    }, linear: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end'
    },
    wrapper: {
        paddingBottom: 50,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        color: Colors.primary,
        fontWeight: '700',
        letterSpacing: 3,
        marginBottom: 5
    }, description: {
        color: Colors.gray,
        fontSize: 14,
        letterSpacing: 1.2,
        lineHeight: 20,
        marginBottom: 20

    }, logintxt: {
        marginTop: 30,
        fontSize: 14,
        color: Colors.black,
        lineHeight: 24,


    },
    logintxtSpam: {
        color: Colors.primary,
        fontWeight: '600',
        fontSize: 14,

    }
})
