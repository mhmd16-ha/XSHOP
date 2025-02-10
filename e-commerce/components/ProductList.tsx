import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductItem from './ProductItem'
import { Colors } from '@/constants/Colors'
import { ProductType } from '@/typee/typee'

type Props = {
    products:ProductType[]
}

const ProductList = ({products}: Props) => {
  return (
    <>
    <View style={styles.container}>
    <View style={styles.titlewrapper}>
      <Text style={styles.title}>For You</Text>
      <Text style={styles.titlebtn}>see All</Text>
    </View>
      <FlatList
      scrollEnabled={false}
       data={products}
        keyExtractor={item => item._id}
        numColumns={2}
        columnWrapperStyle={{justifyContent:'space-between'}}
        showsVerticalScrollIndicator={false}
        renderItem={({ index, item }) => (
        <ProductItem item={item} index={index}/>
        )} />
    </View>
    </>
  )
}

export default ProductList

const styles=StyleSheet.create({
container:{
marginHorizontal:20
},
titlewrapper:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginBottom:10
},
title:{
  fontSize:14,
  fontWeight:'600',
  color:Colors.black,
  letterSpacing:.6
},
titlebtn:{
  fontSize:12,
  fontWeight:'500',
  color:Colors.gray,
  letterSpacing:.6

}
})