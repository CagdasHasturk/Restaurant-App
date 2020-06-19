
import React, { useState, useEffect } from 'react'
import {View, Text, FlatList, ImageBackground, Switch, ActivityIndicator,Alert} from 'react-native'
import Axios from 'axios'

import {CityListItem, SearchBar, CounterText} from '../components'
import {darkTheme, lightTheme} from '../styles';
import {SvgMoon, SvgSun} from '../SvgComponents'

const image = require('../assets/citiesScreen.jpg');


const Cities = ({ navigation }) => {
    
    const [originaCityList, setOriginalCityList] = useState([])
    const [cityList, setCityList] = useState([])
    const [cityCount, setCityCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [isThemeDark, setIsThemeDark] = useState(false)
    const [styles, setStyles] = useState(isThemeDark ? darkTheme : lightTheme)

    const toggleSwitch = () => {
        setIsThemeDark(!isThemeDark)
        setStyles(isThemeDark ? lightTheme : darkTheme)
    };

    useEffect(() => {
        fetchCities()
    },[])


    const fetchCities = async() => {
        try {
            let {data} = await Axios.get('https://opentable.herokuapp.com/api/cities');
            setCityList(data.cities)
            setOriginalCityList(data.cities)
            setCityCount(data.count)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            Alert.alert("Bir hata oluştu!")
        }
    } 

    const renderCities = ({ item }) => {
        return <CityListItem 
                data={item} 
                theme={isThemeDark}
                onPress={
                    () => navigation.navigate('Restaurants',{ city: item, theme:isThemeDark }) 
                }/>
        }

    const searchCities = (text) => {
        let filteredCityList = originaCityList.filter(
            (item) =>{
                const cityName = item.toUpperCase();
                const textData = text.toUpperCase();
                return cityName.indexOf(textData) > -1
            }
        )

        setCityList(filteredCityList);
        setCityCount(filteredCityList.length)
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={image} 
                style={styles.ImageBackground} 
                borderBottomRightRadius={100}
                borderBottomLeftRadius={100}
                >
                    <View style={styles.headerBarContainer}>
                        <SearchBar 
                            placeholder='Şehir'
                            onSearch={searchCities} 
                            theme={isThemeDark}/>
                            <View 
                                style={styles.svgContainer}>
                                    {
                                        isThemeDark ? 
                                        <SvgMoon style={styles.svgColor}/> : 
                                        <SvgSun style={styles.svgSunColor}/> 
                                    }
                                <Switch
                                    trackColor={{ false: "#212121", true: "#BDBDBD" }}
                                    thumbColor={isThemeDark ? "#303030" : "#fff"}
                                    ios_backgroundColor="#3e3e3e"
                                    onChange={toggleSwitch}
                                    value={isThemeDark}
                                    style={styles.switch}
                                />
                            </View>
                    </View>
           </ImageBackground>
            
                {
                loading ?
                    <View style={styles.acitivityIndicator}>
                        <ActivityIndicator size="large" />
                    </View>
                    :
                    <View style={styles.cityFlatListContainer}>
                        <CounterText 
                            countNumber={cityCount} 
                            text="Şehir" 
                            theme={isThemeDark}
                        />
                        <FlatList 
                            keyExtractor={(_, index) => index.toString()}
                            numColumns={2}
                            horizontal={false}
                            refreshing={loading} 
                            onRefresh={fetchCities} 
                            data={cityList} 
                            renderItem={renderCities} 
                        >
                        </FlatList>
                    </View>
                }
       </View>
    )
}

export {Cities}




