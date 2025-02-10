import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { icons } from '@/constants/Icon'

type Props = {
    onPress: () => void,
    onLongPress: () => void,
    isFocused: boolean,
    label: string,
    routeName: string
}

const TabBarButtom = (props: Props) => {
    const { onPress, onLongPress, isFocused, label, routeName } = props
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 5 }}
        >
            {routeName == 'cart' ? <View style={{
                backgroundColor: Colors.highlight,
                paddingHorizontal: 6,
                paddingVertical: 0,
                position: 'absolute',
                top:-10,
                right:20,
                borderRadius:10,
                zIndex:10
            }}>
                <Text>3</Text>
            </View> : ''}
            {icons[routeName]({ color: isFocused ? Colors.primary : Colors.gray })}

            <Text style={{ color: isFocused ? Colors.primary : Colors.gray }}>
                {label}
            </Text>
        </Pressable>
    )
}

export default TabBarButtom