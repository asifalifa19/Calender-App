import September from './Second';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

const First = ({ navigation }) => {
    const navigateToNextScreen = () => {
        navigation.navigate('September'); 
      };
    return (
        <>
            <View>
                <View>
                    <TouchableOpacity onPress={navigateToNextScreen}>
                        <Text></Text>
                        <Image source={require('./assets/Slider.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.First} >Welcome Michael!</Text>

                <Text style={styles.second} >It'S Time to Organize your Day!</Text>
            </View>
            <View >
                <ImageBackground source={require("./assets/Group.png")}
                    style={{ height: 600, width: 370, }} >
                    <Image source={require("./assets/Slide.png")}
                        style={styles.Image} >
                    </Image>
                </ImageBackground>

            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 78,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Container: {
        width: 131,
        height: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    First: {
        padding: 15,
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '500',
        color: '#01041D',
        letterSpacing: 1,
    },

    Second: {

        height: 600,
        width: 370,
        opacity: 0.9,
    },
    image: {

       alignItems:'flex-end',
        width: 50,
        left: 300,
    },

    Image: {

        height: 80,
        width: 80,
        padding: 30,
        margin: 150,
        top: 260,
        left: 0,


    },
    second: {
        color: '#01041D',
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        letterSpacing: 1,
    }


});
export default First;