import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'

import {darkTheme, lightTheme} from '../styles';
import {SvgSearch} from '../SvgComponents'

const SearchBar = (props) => {

    const isThemeDark = props.theme
    const styles = isThemeDark ? darkTheme : lightTheme

    return(
        <View style={styles.searchBarContainer}>
            <SvgSearch style={styles.svgColor}/>
            <TextInput 
                style={styles.searchBarTextInput}
                placeholder={`${props.placeholder} ara..`}
                placeholderTextColor={styles.searchBarTextInput.color}
                onChangeText={props.onSearch}>
            </TextInput>
        </View>
    )
}

export {SearchBar}

