import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

type Props = {
    item:string[],
    paginationIndex:number
}

const Pagination = ({item,paginationIndex}: Props) => {
  return (
    <View style={styles.container}>
     {
        item.map((item,index)=>(
            <View key={index} style={styles.pagination}></View>
        )
     )}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    pagination:{
        width:30,
        height:4,
        backgroundColor:Colors.gray,
        marginHorizontal:5,
        borderRadius:5
    }
})