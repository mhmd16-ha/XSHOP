import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductType } from '@/typee/typee'
import { Stack } from 'expo-router'
import Header from '@/components/Header'
import ProductItem from '@/components/ProductItem'
import { Colors } from '@/constants/Colors'
import ProductList from '@/components/ProductList'
import Categories from '@/components/Categories'
import FlashSales from '@/components/FlashSales'

type Props = {}

const index = (props: Props) => {
  const [data, serData] = useState<any>();
  const [categories, serCategories] = useState<any>();
  const [flashsalse, serFlashsalse] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getData()
    getCategories()
    getFlashSales()
  }, [])
  const getData = async () => {
    try {
    const URL = `http://192.168.1.8:3001/api/v1/products/`;
    const res = await axios.get(URL);
    serData(res.data.doc)            
    setLoading(false)
    } catch (error) {
      console.error(error);
      
    }

  }
  const getCategories = async () => {
    try {
    const URL = `http://192.168.1.8:3001/api/v1/categories/`;
    const res = await axios.get(URL);
    serCategories(res.data.doc)            
    setLoading(false)
    } catch (error) {
      console.error(error);
      
    }
  }
  const getFlashSales = async () => {
    try {
    const URL = `http://192.168.1.8:3001/api/v1/products/flashSalse`;
    const res = await axios.get(URL);
    serFlashsalse(res.data.doc)            
    setLoading(false)
    } catch (error) {
      console.error(error);
      
    }
  }
  return (
    <>
    <Stack.Screen options={{headerShown:true,header:()=><Header/>}}/>
    <ScrollView>
    <Categories categories={categories}/>
    <FlashSales Sales={flashsalse}/>
    <View style={{marginHorizontal:20,marginBottom:10}}>
      <Image source={require('@/assets/images/219.jpg')} style={{width:"100%",height:150,borderRadius:20}} resizeMode='cover'/>
    </View>
    <ProductList products={data}/>
    </ScrollView>

    </>
  )
}

export default index
const styles=StyleSheet.create({
container:{
marginHorizontal:20
},
})