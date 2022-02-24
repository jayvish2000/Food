import React from "react";
import { View, StyleSheet, Button, } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import WebView from "react-native-webview";
const Video = () => {

    return (
        <View style={styles.container}>
            <WebView
                mediaPlaybackRequiresUserAction={false}
                allowsInlineMediaPlayback={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://www.youtube.com/embed/dA0VGEbbw4g?playlist=dA0VGEbbw4g&loop=1&modestbranding=1&controls=0&autoplay=2&disablekb=1&fs=0' }}
            />
        </View>
    )
}
export default Video

const styles = StyleSheet.create({
    container: {

        width: "100%",
        height: 200,

        marginTop: 10, backgroundColor: 'red'
    },
})
