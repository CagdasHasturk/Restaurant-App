import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Button, Linking, ImageBackground,} from 'react-native'

import {darkTheme, lightTheme} from '../styles';
import {SvgHome, SvgMapPin, SvgPhone} from '../SvgComponents'

const RestaurantDetails = ({ route }) => {

    const url = route.params.restaurant.image_url;
    const isThemeDark = route.params.theme
    const styles = isThemeDark ? darkTheme : lightTheme

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.topContainer}>
                
                    <ImageBackground
                        style={styles.imageContainer}
                        source={{url}}
                        >
                            <Text style={styles.restaurantNameText}>
                                {route.params.restaurant.name.toUpperCase()}
                            </Text>
                    </ImageBackground>
                
                <View style={styles.horizontalLine} />

                <View style={styles.bottomContainer}>
                    <View>
                        <TouchableOpacity style={styles.detailsButton}>
                            <SvgMapPin />
                            <Text style={styles.detailsButtonText}>
                                {route.params.restaurant.area}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.detailsButton} >
                            <SvgHome />
                            <Text  style={styles.detailsButtonText}>
                                {route.params.restaurant.address}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.detailsButton}>
                            <SvgPhone />
                            <Text  style={styles.detailsButtonText}>
                                {route.params.restaurant.phone}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Button title="Rezervasyon Yaptır" 
                            onPress={
                            () => 
                            Linking.openURL(route.params.restaurant.reserve_url)
                        } />

              </View>
            </View>
        </SafeAreaView>
    )
}

export {RestaurantDetails}

