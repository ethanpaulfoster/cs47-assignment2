import AppLoading from 'expo-app-loading';
import { View, Text, StyleSheet, Image } from 'react-native';
import { processFontFamily, useFonts } from 'expo-font';

const Body = () => {

    let [fontsLoaded] = useFonts({
        Sydney: require('../assets/Fonts/Sydney-Serial-Regular.ttf'),
        SydneyBold: require('../assets/Fonts/Sydney-Serial-Bold.ttf'),
      });
      if (!fontsLoaded) return <AppLoading />;

return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Image
                source={require('../assets/Profiles/mtl.jpg')}
                style={styles.profilePic}
            />
            <Text style={styles.name}>
                MTL
            </Text>
            <Text style={styles.distance}>
                2 miles away
            </Text>
        </View>
        <View style={styles.promptBox}>
            <Text style={styles.prompt}>
                My hottest take
            </Text>
            <View style={styles.audioBox}>
                <Image
                    source={require('../assets/Icons/player_light.png')}
                    style={styles.player}
                />
                <Image 
                    source={require('../assets/Icons/audio_waveform_light.png')}
                    style={styles.audio}
                />
            </View>
        </View>
   </View>
    );
};

export default Body;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '75%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
        paddingHorizontal: 30
    },
    profile: {
        height: '65%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePic: {
        height: '100%',
        width: '100%',
        borderRadius: 5,
        position: 'relative'
    },
    name: {
        fontFamily: 'Sydney',
        fontSize: 30,
        color: 'white',
        position: 'absolute',
        top: 0,
        left: 10
    },
    distance: {
        fontFamily: 'Sydney',
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    promptBox: {
        backgroundColor: 'white',
        flexDirection: 'column',
        height: '25%',
        width: '100%',
        borderRadius: 20,
        marginTop: 20
    },
    prompt: {
        fontFamily: 'Sydney',
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
        marginTop: 10
    },
    audioBox: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    player: {
        width: 50,
        resizeMode: 'contain',
        marginLeft: 15
    },
    audio: {
        width: 220,
        resizeMode: 'contain',
        marginRight: 15

    }
});
