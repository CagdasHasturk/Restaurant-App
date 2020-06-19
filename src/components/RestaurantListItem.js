import React from 'react'
import { TouchableOpacity, Text, View, Image, StyleSheet, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { RotationGestureHandler } from 'react-native-gesture-handler';
import { darkTheme, lightTheme } from '../styles';

// address: "330 N State Street"
// area: "Chicago / Illinois"
// city: "Chicago"
// country: "US"
// id: 7267
// image_url: "https://www.opentable.com/img/restimages/7267.jpg"
// lat: 41.888634
// lng: -87.628091
// mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=7267"
// name: "10pin Bowling Lounge"
// phone: "3126440300x"
// postal_code: "60610"
// price: 4
// reserve_url: "http://www.opentable.com/single.aspx?rid=7267"
// state: "IL"

const RestaurantListItem = (props) => {
    const url = props.data.image_url;

    const isThemeDark = props.theme 
    const styles = isThemeDark ? darkTheme : lightTheme
    
    const lightThemelinearColors = ['#fff','#f5f5f5','#bdbdbd']
    const darkThemelinearColors = ['#000','#212121','#fff']

    return(
            <ImageBackground 
                source={{url}} 
                style={styles.restaurantListImage} 
                borderRadius={30}>

                    <LinearGradient
                        style={styles.restaurantListLinearGradient}
                        colors={isThemeDark ? darkThemelinearColors: lightThemelinearColors}>

                        <View style={styles.restaurantListTextContainer}>
                            <Text style={styles.restaurantListTextHeader}>
                                {props.data.name}
                            </Text>
                            <Text style={styles.restaurantListtext}>
                                {props.data.address}
                            </Text>
                            <Text style={styles.restaurantListtext}>
                                {props.data.area}
                            </Text>
                        </View>

                        <View style={styles.restaurantListButtonContainer}>
                            <TouchableOpacity 
                                onPress={props.onPress} 
                                style={styles.restaurantListButton}
                            >
                                <Text style={styles.restaurantListButtonText}>
                                    Go to Restaurant
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </LinearGradient>

            </ImageBackground>
    )
}

export { RestaurantListItem }

