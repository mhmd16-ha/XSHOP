import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import axios from 'axios'
import ImageSlider from '@/components/ImageSlider'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import {useHeaderHeight} from '@react-navigation/elements'
type Props = {

}

const productDetails = (props: Props) => {
  const { id } = useLocalSearchParams();
  const [Details, setDetails] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const URL = `http://192.168.1.8:3001/api/v1/products/${id}`;
      const res = await axios.get(URL);
      setDetails(res?.data?.doc)
      setLoading(false)
    } catch (error) {
      console.error(error);

    }

  }

  return (
    <>
      <Stack.Screen options={{ title: "Product details", headerRight: () => <Link href={'/(tabs)/cart'} asChild><Ionicons name='cart-outline' size={25} /></Link> }} />
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.container,{marginTop:5}]}>
        {Details && <ImageSlider images={Details.images} />}
        <View style={[styles.star, styles.star_Ratting]}>
          <View style={styles.star}>
            <Ionicons name='star' size={20} color={Colors.highlight} />
            <Text>4.7</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name='heart-outline' size={25} />
          </TouchableOpacity>
        </View>
        {Details && <Text style={styles.txt}>{Details.title}</Text>}
        <View style={styles.priceView}>
          {Details && <Text style={styles.txt}>${Details.price}</Text>}
          <Text style={{ backgroundColor: '#ccc', color: Colors.primary, padding: 5 }}>6% Off</Text>
        </View>

        {Details && <Text style={styles.txtDescription}>{Details.description}</Text>}
        <View style={styles.Size_color_container}>
          <View style={styles.size_container}>
            <Text style={styles.sizetxt}>Size</Text>
            <View>
              <View style={styles.size}>
                <Text style={styles.sixe_txt}>s</Text>
                <Text style={styles.sixe_txt}>m</Text>
                <Text style={styles.sixe_txt}>l</Text>
                <Text style={styles.sixe_txt}>xl</Text>
                <Text style={styles.sixe_txt}>xxl</Text>
              </View>
            </View>
          </View>
          <View style={styles.color_container}>
            <Text style={styles.sizetxt}>color</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <View style={[styles.color, { backgroundColor: '#F4CE14' }]}></View>
              <View style={[styles.color, { backgroundColor: '#572fff' }]}></View>
              <View style={[styles.color, { backgroundColor: '#d63031' }]}></View>
              <View style={[styles.color, { backgroundColor: '#000000' }]}></View>
              <View style={[styles.color, { backgroundColor: '#00cec9' }]}></View>
              <View style={[styles.color, { backgroundColor: '#fd79a8' }]}></View>
            </View>
          </View>
        </View>

      </ScrollView>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btn_outline}>
          <Text>Add To Cart
          <Ionicons name='cart-outline' size={25}/>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.btn}>
          <Text style={{color:Colors.white}}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      </>
  )
}

export default productDetails

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,

  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  star_Ratting: {
    justifyContent: 'space-between'
  },
  txt: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1.1,
    lineHeight: 30
  }, txtDescription: {
    fontSize: 15,
    color: Colors.gray
    ,
    lineHeight: 24,
    marginBottom: 20
  },
  priceView: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  Size_color_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 120
  },
  size_container: {
    width: "50%"
  },
  color_container: {
    width: "50%"
  },
  sizetxt: {
    fontSize: 15,
    fontWeight: '600'
  },
  color: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginHorizontal: 2,
    marginBottom: 2
  },size:{
    flexDirection:'row',
    flexWrap:'wrap',
  },sixe_txt:{
    backgroundColor:Colors.lightGray,
    borderRadius:5,padding:10,
    borderWidth:1,
    marginHorizontal:5,
    marginBottom:10
  },
  btns:{
    flexDirection:'row',
    padding:20,
    marginBottom:30,
    gap:5,
    position:'absolute',
    bottom:0,
    backgroundColor:'white',
    height:90,
  },
  btn:{
    backgroundColor:Colors.primary,
    borderRadius:15,
    width:"50%",
    paddingHorizontal:30,
    paddingVertical:10,
    alignItems:"center",
    justifyContent:'center',
    height:40
  
  },
  btn_outline:{
    
    borderColor:Colors.primary,
    borderWidth:1,
    borderRadius:15,
    width:"50%",
    paddingHorizontal:40,
    paddingVertical:10,
    alignItems:"center",
    justifyContent:'center',
    height:40
  }
})