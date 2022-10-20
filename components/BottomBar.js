import AppLoading from 'expo-app-loading';
import { View, Text, StyleSheet, Image } from 'react-native';
import { processFontFamily, useFonts } from 'expo-font';

const BottomBar = () => {

    let [fontsLoaded] = useFonts({
        Sydney: require('../assets/Fonts/Sydney-Serial-Regular.ttf'),
        SydneyBold: require('../assets/Fonts/Sydney-Serial-Bold.ttf'),
      });
      if (!fontsLoaded) return <AppLoading />;

return (
    <View style={styles.container}>
        <View style={styles.bar}>
            <View style={styles.feature}>
                <Image
                    source={require('../assets/Icons/discover_light.png')}
                    style={styles.bottomIcon}
                />
                <Text style={styles.bottomText}>
                    Discover
                </Text>
            </View>
            <View style={styles.feature}>
                <Image
                    source={require('../assets/Icons/heart_light.png')}
                    style={styles.bottomIcon}
                />
                <Text style={styles.bottomText}>
                    Matches
                </Text>
            </View>
            <View style={styles.feature}>
                <Image
                    source={require('../assets/Icons/messages_light.png')}
                    style={styles.bottomIcon}
                />
                <Text style={styles.bottomText}>
                    DMs
                </Text>
            </View>
        </View>
        
   </View>
    );
};

export default BottomBar;

const styles = StyleSheet.create({
    container: {
        padding: 0,
        width: '100%',
        height: '10%',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0
    },
    bar: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'    
    },
    feature: {
        height: '80%',
        width: '20%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bottomIcon: {
        height: '60%',
        resizeMode: 'contain'
    },
    bottomText: {
        fontFamily: 'Sydney',
        fontSize: 15,
        color: 'white',
        marginTop: 4
    }
});
