import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Props = {}

const cart = (props: Props) => {
  const [Cart, setCart] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    try {
      const URL = `http://192.168.1.8:3001/api/v1/products/`;
      const res = await axios.get(URL);
      setCart(res?.data?.doc)
      setLoading(false)

    } catch (error) {
      console.error(error);

    }
  }
  return (<>
    <Stack.Screen options={{ headerShown: true }} />
    <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
      <FlatList showsVerticalScrollIndicator={false} data={Cart} renderItem={({ item }) => (
        <View style={styles.categories}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: item.images[1] }} />
          <View>
            <Text>{item.title}</Text>
            <View style={{flexDirection:'row',marginTop:15,gap:10,alignItems:'center'}}>
              <Ionicons name='trash-outline' size={20} color={"red"} />
              <TouchableOpacity style={styles.btn}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>1</Text>
              <TouchableOpacity style={styles.btn}>
              <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )} />
    </View>
  </>
  )
}

export default cart
const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    gap: 10
  },
  btn:{
    borderWidth:1,
    padding:10,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  }
})