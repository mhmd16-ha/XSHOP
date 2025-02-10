import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {}

const Header = (props: Props) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.logo}>ShopX</Text>
    <Link href={'/explore'} asChild>
    <TouchableOpacity style={styles.search}>
     <Text>Search</Text>
     <Ionicons name='search' size={25} color={Colors.gray}/>
     </TouchableOpacity>
    </Link>
    </View>
  )
}

export default Header
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:15,
        backgroundColor:'#FFF',
        gap:5
        
    },
    logo:{
        fontSize:25,
        color:Colors.primary,
        fontWeight:'700'
    },
    search:{
        flex:1,
        backgroundColor:Colors.background,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:5,
        paddingVertical:5,
        borderRadius:10
    }
})