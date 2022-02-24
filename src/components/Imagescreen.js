import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get("window");

const Imagescreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <View style={styles.Wrapper}>
                    <Image
                        source={require("../../assets/image/listTwo.png")}
                        style={styles.ImgWrapper}
                    />
                    <Text style={styles.TextWrapper}>Product
                        Category</Text>
                </View>
                <View style={styles.Wrapper}>
                    <Image
                        source={require("../../assets/image/trophy.png")}
                        style={styles.ImgWrapper}
                    />
                    <Text style={styles.TextWrapper}>Best
                        Selling products </Text>
                </View>
                <View style={styles.Wrapper}>
                    <Image
                        source={require("../../assets/image/List.png")}
                        style={styles.ImgWrapper}
                    />
                    <Text style={styles.TextWrapper}>Product
                        List</Text>
                </View>

            </View>

            <View style={styles.Lower}>

                <View>
                    <Image source={require("../../assets/image/sidearrow.jpg")}
                        style={styles.arrow}
                    />
                </View>

                <View style={styles.LowerWrapper}>
                    <Image source={require("../../assets/image/C.png")}
                        style={styles.LowerImg}
                    />
                    <Text style={styles.TextWrapper}>FootPrint &
                    </Text>
                    <Text style={styles.TextWrapper}>Location</Text>
                </View>
                <View style={styles.LowerWrapper}>
                    <Image source={require("../../assets/image/trophygold.png")}
                        style={styles.LowerImg}
                    />
                    <Text style={styles.TextWrapper}>Reward &
                    </Text>
                    <Text style={styles.TextWrapper}>Certification</Text>
                </View>
                <View style={styles.LowerWrapper}>
                    <Image source={require("../../assets/image/review.png")}
                        style={styles.LowerImg}
                    />
                    <Text style={styles.TextWrapper}>Feedback &
                    </Text>
                    <Text style={styles.TextWrapper}>comments</Text>
                </View>

                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', }}>

                    <Image source={require("../../assets/image/arrowTwo.jpg")}
                        style={styles.arrow}
                    />

                </View>
            </View>


        </View>
    );
};

export default Imagescreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly', alignItems: 'baseline'
    },
    Header: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-around',
        paddingHorizontal: 30,
    },
    Wrapper: {
        width: wp(50),

    },
    ImgWrapper: {
        resizeMode: 'cover',
        height: 60,
        width: 60,
        alignSelf: 'center',

    },
    TextWrapper: {
        fontSize: 10,
        textAlign: 'center',
        direction: 'rtl',
        // alignSelf: 'center',

    },
    Lower: {
        top: 10,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',

    },
    LowerWrapper: {
        width: 100,
        height: 80,



    },
    LowerImg: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
        alignSelf: 'center',
    },
    arrow: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
    }
});
