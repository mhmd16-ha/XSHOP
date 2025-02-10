import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pagination from './Pagination'
import Animated, { FadeInDown } from 'react-native-reanimated'

type Props = {
    images:string[]
}

const width=Dimensions.get("screen").width-30
const ImageSlider = ({images}: Props) => {
  return (
    <Animated.View entering={FadeInDown.delay(500 ).duration(300)}>
     <FlatList data={images} horizontal pagingEnabled
     showsHorizontalScrollIndicator={false}
      renderItem={({index,item})=>(
       <View style={{width:width,justifyContent:'center',alignItems:'center'}}>
         <Image source={{uri:item}} style={{width:300,height:300,borderRadius:10}}/>
       </View>
     )}/>
     <Pagination item={images} paginationIndex={0}/>
    </Animated.View>
  )
}

export default ImageSlider

const styles = StyleSheet.create({})