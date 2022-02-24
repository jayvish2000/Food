import { SliderBox } from "react-native-image-slider-box";
import { View } from "react-native";
import React, { Component } from 'react'

export class Slideimage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: '',

            images: [
                require('../../assets/image/american.png'),
                require('../../assets/image/professional.png'),
                require('../../assets/image/restaurant.png'),
            ],
        }
    }
    render() {
        return (

            <View style={{ marginTop: 2, width: '100%', justifyContent: 'center' }}>
                <SliderBox
                    images={this.state.images}
                    // sliderBoxHeight={200}

                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    dotStyle={{
                        width: 12,
                        height: 12,
                        borderRadius: 12,
                        marginHorizontal: 6,
                        padding: 0,
                        margin: 0
                    }}
                    paginationBoxStyle={{
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                        paddingVertical: 10,


                    }}
                    paginationBoxVerticalPadding={4}
                    autoplay
                    circleLoop
                    ImageComponentStyle={{ width: '98%' }}
                    imageLoadingColor="#2196F3"
                    parentWidth={this.state.width}
                />
            </View>
        )
    }
}

export default Slideimage