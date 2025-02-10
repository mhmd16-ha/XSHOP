import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type Props = {}

const InputField = (props: React.ComponentProps<typeof TextInput>) => {
    return (
        <TextInput style={styles.txtInput}
            {...props}
        />
    )
}
export default InputField;
const styles = StyleSheet.create({

    txtInput: {
        backgroundColor: Colors.white,
        alignSelf: 'stretch',
        paddingHorizontal: 18,
        paddingVertical: 12,
        fontSize: 16,
        color: Colors.black,
        marginBottom: 30

    }
})