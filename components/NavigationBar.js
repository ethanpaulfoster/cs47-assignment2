import AppLoading from 'expo-app-loading';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';

const NavigationBar = () => {
    let [fontsLoaded] = useFonts({
      Sydney: require('../assets/Fonts/Sydney-Serial-Regular.ttf'),
      SydneyBold: require('../assets/Fonts/Sydney-Serial-Bold.ttf'),
    });
    if (!fontsLoaded) return <AppLoading />;

    return (
        <View style={styles.container}>
            <View style={styles.iconBox}>
              <Image
                source={require('../assets/Icons/menu_light.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.appName}>
                ensom
            </Text>
            <View style={styles.iconBox}>
                <Image
                    source={require('../assets/Icons/sun.png')}
                    style={styles.icon}
                />
            </View>
       </View>
        );
    };
  
  export default NavigationBar;
  
  const styles = StyleSheet.create({
    container: {
      height: '10%',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20
    },
    iconBox: {
      height: '95%',
      width: '20%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20
    },
    appName: {
      fontFamily: 'SydneyBold',
      fontSize: 30
    },
    icon: {
      height: '75%',
      resizeMode: 'contain'
    }
  });
  