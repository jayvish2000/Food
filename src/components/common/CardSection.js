import React from 'react'
import { StyleSheet, View } from 'react-native'

const CardSection = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}
export default CardSection

const styles = StyleSheet.create({
    container: {
        marginTop: '33%',
        padding: 40,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',

        aspectRatio: 10 / 3, width: '100%'

    }
})
