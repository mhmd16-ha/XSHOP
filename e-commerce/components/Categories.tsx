import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categoryType } from '@/typee/typee'
import { Colors } from '@/constants/Colors'

type Props = {
  categories: categoryType[]
}

const Categories = ({ categories }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titlewrapper}>
        <Text style={styles.title}>Categories</Text>
        <Text style={styles.titlebtn}>see All</Text>
      </View>

      <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={categories} keyExtractor={(item) => item._id} renderItem={({ index, item }) => (
        <TouchableOpacity>
          <View style={styles.categoriesWrapper}>
          <Image style={styles.CategoryImage} source={{ uri: item.image }} />
          <Text style={styles.Categorytitle}>{item.name}</Text>
        </View>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
  },
  titlewrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20

  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    letterSpacing: .6
  },
  titlebtn: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.gray,
    letterSpacing: .6

  },
  categoriesWrapper: {
    marginVertical:10,
    gap:5,
    alignItems:'center',
    marginLeft:20

  },
  Categorytitle: {

  },
  CategoryImage: {
    width: 50,
    height: 50,
    borderRadius:30,
    backgroundColor:Colors.lightGray
  }


})