import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { darkTheme, lightTheme } from '../styles'

const CityListItem = (props) => {
    
    const styles = props.theme ? darkTheme : lightTheme

    return(
        <Animatable.View animation="bounceInUp">

            <TouchableOpacity 
                onPress={props.onPress} 
                style={styles.cityListItemButton}
            >
                <Text style={styles.cityListItemButtonText}>
                        {props.data}
                </Text>
            </TouchableOpacity>

        </Animatable.View>
    )
}

export {CityListItem}


