import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categoryType, ProductType } from '@/typee/typee'
import { Colors } from '@/constants/Colors'
import ProductItem from './ProductItem'

type Props = {
    Sales: ProductType[]
}

const FlashSales = ({ Sales }: Props) => {
    return (
        <View>
            <View style={styles.titlewrapper}>
                <Text style={styles.title}>Flash Sales</Text>
                <Text style={styles.titlebtn}>see All</Text>
            </View>

            <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft:20,paddingRight:20 }} horizontal keyExtractor={(item) => item._id} data={Sales} renderItem={({ index, item }) => (
                <View style={{marginRight:20}}>
                    <ProductItem item={item} index={index} />
                </View>
            )}
            />
        </View>
    )
}

export default FlashSales

const styles = StyleSheet.create({
    titlewrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 20,

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
})