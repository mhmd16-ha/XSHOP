import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { MyTabBar } from './TabBar'


export default function _layout() {
  return (
    <Tabs tabBar={(props) => <MyTabBar {...props}/>} screenOptions={{headerShown: false}}>
    <Tabs.Screen name='index' options={{
      title: 'Home',
      // tabBarIcon: ({color}) => (
      //   <Ionicons name='home-outline' size={22} color={color} />
      // )
    }} />
    <Tabs.Screen name='explore' options={{
      title: 'Explore',
      // tabBarIcon: ({color}) => (
      //   <Ionicons name='search-outline' size={22} color={color} />
      // )
    }} />

    <Tabs.Screen name='cart' options={{
      title: 'Cart',
      // tabBarIcon: ({color}) => (
      //   <Ionicons name='cart-outline' size={22} color={color} />
      // )
    }} />
    <Tabs.Screen name='profile' options={{
      title: 'Profile',
      // tabBarIcon: ({color}) => (
      //   <Ionicons name='person-outline' size={22} color={color} />
      // )
    }} />
  </Tabs>
  )
}