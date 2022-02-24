import React from "react";
import { Text, StyleSheet, View, Image } from 'react-native';


const Header = () => {
    return (
        <View style={styles.view}>
            <Image source={require('../../../assets/image/capital.png')} />
        </View>
    );
};

export default Header

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        paddingBottom: 5
    },
})
