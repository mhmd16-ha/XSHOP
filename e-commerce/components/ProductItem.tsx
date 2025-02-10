import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProductType } from '@/typee/typee'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Link } from 'expo-router'

type Props = {
  item: ProductType,
  index: number
}
const width = Dimensions.get('window').width - 40
const ProductItem = ({ item, index }: Props) => {

  return (
    <Link href={{
      pathname:'/productDetails/[id]',
      params:{id:item._id},
    }} asChild>
      <TouchableOpacity>
        <Animated.View entering={FadeInDown.delay(500 + index * 100).duration(300)} style={styles.container}>
          <Image source={{ uri: item.images[1] }} style={styles.productImage} />
          <TouchableOpacity style={styles.bookMarkBtn}>
            <Ionicons name='heart-outline' size={25} color={Colors.black} />
          </TouchableOpacity>
          <View style={styles.productInfo}>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.ratingWrapper}>
              <Ionicons name='star' size={20} color={Colors.highlight} />
              <Text style={styles.rating}>4.7</Text>
            </View>
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </Animated.View>
      </TouchableOpacity>
     </Link>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
    marginBottom: 20
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 14,
    marginBottom: 10,
  },
  bookMarkBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: Colors.background,
    borderRadius: 30,
    padding: 5
  }, title: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '700',
    letterSpacing: 1.1
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary
  },
  rating: {
    fontSize: 14,
    color: Colors.gray
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
})