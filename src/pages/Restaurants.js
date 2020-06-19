import React, { useState, useEffect } from 'react'
import {View, Text, ImageBackground, FlatList} from 'react-native'
import Axios from 'axios'

import {darkTheme, lightTheme} from '../styles';
import {RestaurantListItem, SearchBar ,CounterText} from '../components'


const image = require('../assets/restoranScreen.jpg');


const Restaurants = ({navigation, route}) => {
    const [originalrestaurantList, setOriginalRestaurantList] = useState([])
    const [restaurantList, setRestaurantList] = useState([])
    const [restaurantCount, setRestaurantCount] = useState(0)
    const [loading, setLoading] = useState(true)

    const isThemeDark = route.params.theme
    const styles = isThemeDark ? darkTheme : lightTheme
    
    useEffect(() => {
        fetchRestaurants()
    }, [])

    const fetchRestaurants = async () => {
        let {data} = await Axios.get(`https://opentable.herokuapp.com/api/restaurants?city=${route.params.city}`)
        setRestaurantList(data.restaurants)
        setOriginalRestaurantList(data.restaurants)
        setRestaurantCount(data.restaurants.length)
        setLoading(false)
    } 
    const renderRestaurants = ({ item }) => {
        return  <RestaurantListItem 
                    theme={isThemeDark} 
                    data={item} 
                    onPress={
                        () => navigation.navigate('RestaurantDetails', { restaurant:item, theme:isThemeDark }) 
                    }
                />
    }

    const searchRestaurant = (text) => {
        let filteredRestaurantList = originalrestaurantList.filter(
            (item) => {
                const restaurantName = item.name.toUpperCase();
                const textData = text.toUpperCase();
                return restaurantName.indexOf(textData) > -1
            }
        )
        setRestaurantList(filteredRestaurantList);
        setRestaurantCount(filteredRestaurantList.length);
    }


    return (
        <View style={styles.container}>
            <ImageBackground 
                style={styles.ImageBackground} 
                source={image} 
                borderBottomRightRadius={100} 
                borderBottomLeftRadius={100}
            >
                <View style={styles.headerBarContainer}>
                    <SearchBar 
                        placeholder='Şehir'
                        onSearch={searchRestaurant} 
                        theme={isThemeDark}
                    />
                </View>
            </ImageBackground>
           
            <CounterText 
                theme={isThemeDark}
                countNumber={restaurantCount} 
                text="Restoran">
            </CounterText> 

             <View style={styles.restaurantFlatListContainer}> 
                <FlatList
                    refreshing={loading}
                    onRefresh={fetchRestaurants}
                    data={restaurantList}
                    renderItem={renderRestaurants}>
                </FlatList>
             </View>     
        </View>
        
    )
}

export {Restaurants}

