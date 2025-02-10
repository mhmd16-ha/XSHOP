import { View, Text, ScrollView, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Colors } from '@/constants/Colors';
import { Stack } from 'expo-router';


export default function explore() {
  const [categories, setCategories] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getCategories()
  }, [])
  
  const getCategories = async () => {
    try {
    const URL = `http://192.168.1.8:3001/api/v1/categories/`;
    const res = await axios.get(URL);
    setCategories(res?.data?.doc)            
    setLoading(false)
   
    } catch (error) {
      console.error(error);
      
    }
  }
  return (
  <>
    <Stack.Screen options={{headerShown:true}}/>
    <View style={{paddingHorizontal:20,marginTop:5}}>
      <FlatList showsVerticalScrollIndicator={false} data={categories} renderItem={({item})=>(
        <View style={styles.categories}>
          <Image style={{width:100,height:100}} source={{uri:item.image}}/>
          <Text>{item.name}</Text>
        </View>
      )}/>
    </View>
    </>
  )
}
const styles=StyleSheet.create({
  categories:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    marginBottom:10,
    paddingVertical:10,
    backgroundColor:'#ccc',
    borderRadius:10
  }
})
