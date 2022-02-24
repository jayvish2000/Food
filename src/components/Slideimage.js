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

            <View style={{ marginTop: 4, aspectRatio: 10 / 6, }}>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={300}
                    onCurrentImagePressed={(index) =>
                        console.log(`image ${index} pressed`)
                    }
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                    sliderBoxHeight={200}
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
                        position: "absolute",
                        bottom: 0,
                        padding: 0,
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                        paddingVertical: 5
                    }}
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                    ImageComponentStyle={{ width: '97%', }}
                    imageLoadingColor="#2196F3"
                    parentWidth={this.state.width}
                />
            </View>
        )
    }
}

export default Slideimage