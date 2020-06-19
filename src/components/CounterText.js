import React from 'react'
import {View, Text} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler'

import {darkTheme, lightTheme} from '../styles';

const CounterText = (props) => {

    const isThemeDark = props.theme
    const styles = isThemeDark ? darkTheme : lightTheme

    return(
        <Animatable.View animation="bounceIn" style={styles.counterContainer}>
            <Text style={styles.counterText}>
               {
               `${props.countNumber} ${props.text} bulundu`
               } 
            </Text>
        </Animatable.View>
    )
}

export {CounterText}
 