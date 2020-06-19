import React from 'react'
import {StyleSheet,Dimensions} from 'react-native'


const darkTheme = StyleSheet.create({
        container: {
            flex:1, backgroundColor:'#212121'
        },
        ImageBackground: {
            flex:1.5,
            resizeMode:"cover",
        },
        headerBarContainer: {
            flexDirection:'row',
            paddingTop:50, 
            paddingHorizontal:10,
            alignItems:'center',
            justifyContent:"space-between"
        },
        
        //Cities Page
        cityFlatListContainer: {
            flex:3,
        },
        cityListItemButton: {
            backgroundColor:'#303030',
            width:Dimensions.get('window').width/2.2,
            height:100,
            padding:10,
            margin:10,
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            justifyContent:"center",
            alignItems:"center"
        },
        cityListItemButtonText: {
            color:'#BDBDBD',
            fontFamily:'DiwanMishafi',
            fontWeight:"bold",
            fontSize:18,
        },
        svgContainer:{
            flex:1, 
            flexDirection:"row",
            alignItems:"center", 
            justifyContent:"flex-end",
        },
        svgColor : {
            color:'#fff'
        },
        switch:{
            marginLeft:5,
        },

        //SearchBar Component
        searchBarContainer:{
            flex:2,
            flexDirection:'row',
            alignItems:"center",
            borderRadius:10,
            padding:10,
            backgroundColor:'#21212190',
        },
        searchBarTextInput : {
            color:'#fff',
            fontSize:16,
            padding:5,
        },
        
        //Counter Component
        counterContainer: {
            backgroundColor:'#303030',
            margin:10,
            paddingVertical:15,
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            justifyContent:"center",
            alignItems:"center"
        },
        counterText: {
            color:'#fff',
            textAlign: 'center',
               fontSize: 18,
               textShadowColor: '#fff',
               textShadowOffset: { width: 2, height: 2 },
               textShadowRadius: 5
        },

        //Restaurants Page
        restaurantListImage: {
            width:Dimensions.get('window').width / 1.25,
            height:300,
            margin:20,
        },
        restaurantListLinearGradient: {
          flex:1,
          opacity:0.7,
          borderRadius:30,
        },
        restaurantListTextContainer: {
            flex:1,
            padding:20,
        },
        restaurantListtext: {
            color:'#fff',
            marginVertical:5,
        },
        restaurantListTextHeader:{
            color:'#fff',
            marginBottom:5,
            fontSize:16,
            fontWeight:'bold'
        },
        restaurantListButtonContainer: {
            flex:1,
            justifyContent:'flex-end',
            alignItems:"center"
            
        },
        restaurantListButton: {
            marginBottom:10,
            padding:10,
            borderRadius:30,
            backgroundColor:'#212121',
            alignItems:"center"
        },
        restaurantListButtonText: {
            color:'#fff'
        },
        restaurantFlatListContainer: {
            flex:3,
            alignItems:"center",
        },

        //RestaurantDetails Page
        safeAreaContainer:{
            backgroundColor:'#111', flex:1
        },
        topContainer: {
            backgroundColor:'#212121',
            flex:1,
            padding:20,
        },
        imageContainer: {
            flex:1,
            justifyContent:"flex-end",
            alignItems:"center",
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        restaurantNameText: {
            fontSize:20,
            fontWeight:'800',
            marginBottom:20,
            textAlign:"center",
            color:'#03A9F4'
        },
        bottomContainer: {
            flex:1,
            justifyContent:"space-around"
        },
        detailsButton:{
            padding:15,
            backgroundColor:'#03A9F4',
            flexDirection:'row',
            alignItems:"center",
            marginVertical:5,
            borderRadius:20,
        },
        detailsButtonText: {
            fontSize:16,
            color:'#fff',
            marginHorizontal:10,
            fontWeight:'bold',
        },
        horizontalLine : {
            borderWidth:1,
            borderColor:'#fff',
            marginVertical:20,
        }
    });


    const lightTheme = StyleSheet.create({
        container: {
            flex:1, backgroundColor:'#fff'
        },
        ImageBackground: {
            flex:1.5,
            resizeMode:"cover",
        },
        headerBarContainer: {
            flexDirection:'row',
            paddingTop:50, 
            paddingHorizontal:10,
            alignItems:'center',
            justifyContent:"space-between"
        },

        //CitiesPage
        cityFlatListContainer: {
            flex:3,
        },
        cityListItemButton: {
            backgroundColor:'#F5F5F5',
            width:Dimensions.get('screen').width/2.2,
            height:100,
            padding:10,
            margin:10,
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            justifyContent:"center",
            alignItems:"center"
    
        },
        cityListItemButtonText: {
            color:'#212121',
            fontFamily:'DiwanMishafi',
            fontWeight:"bold",
            fontSize:18,
        },
        svgSunColor: {
            color:'#fff'
        },
        svgContainer:{
            flex:1, 
            flexDirection:"row",
            alignItems:"center", 
            justifyContent:"flex-end",
        },
        svgColor : {
            color:'#000'
        },
        switch:{
            marginLeft:5,
        },

        //SearchBar Component
        searchBarContainer:{
            flex:2,
            flexDirection:'row',
            alignItems:"center",
            borderRadius:10,
            padding:10,
            backgroundColor:'#ffffff90',
        },
        searchBarTextInput : {
            color:'#212121',
            fontSize:16,
            padding:5,
        },
        
        //Counter Component
        counterContainer: {
            backgroundColor:'#F5F5F5',
            margin:10,
            paddingVertical:15,
            shadowColor: "#212121",
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            justifyContent:"center",
            alignItems:"center"
        },
        counterText: {
            color:'#212121',
               textAlign: 'center',
               fontSize: 18,
               textShadowColor: '#212121',
               textShadowOffset: { width: 2, height: 2 },
               textShadowRadius: 5
        },

        //Restaurants Page
        restaurantListImage: {
            width:Dimensions.get('window').width / 1.25,
            height:300,
            margin:20,
        },
        restaurantListLinearGradient: {
          flex:1,
          opacity:0.7,
          borderRadius:30,
        },
        restaurantListTextContainer: {
            flex:1,
            padding:20,
        },
        restaurantListtext: {
            color:'#212121',
            marginVertical:5,
        },
        restaurantListTextHeader:{
            color:'#212121',
            marginBottom:5,
            fontSize:16,
            fontWeight:'bold'
        },
        restaurantListButtonContainer: {
            flex:1,
            justifyContent:'flex-end',
            alignItems:"center"
            
        },
        restaurantListButton: {
            marginBottom:10,
            padding:10,
            borderRadius:30,
            backgroundColor:'#fff',
            alignItems:"center"
        },
        restaurantListButtonText: {
            color:'#212121'
        },
        restaurantFlatListContainer: {
            flex:3,
            alignItems:"center",
        },

        //RestaurantDetails Page
        safeAreaContainer:{
            backgroundColor:'#111', flex:1
        },
        topContainer: {
            backgroundColor:'#fff',
            flex:1,
            padding:20,
        },
        imageContainer: {
            flex:1,
            justifyContent:"flex-end",
            alignItems:"center",
            shadowColor: "#212121",
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        restaurantNameText: {
            fontSize:20,
            fontWeight:'800',
            marginBottom:20,
            textAlign:"center",
            color:'#03A9F4'
        },
        bottomContainer: {
            flex:1,
            justifyContent:"space-around"
        },
        detailsButton:{
            padding:15,
            backgroundColor:'#03A9F4',
            flexDirection:'row',
            alignItems:"center",
            marginVertical:5,
            borderRadius:20,
        },
        detailsButtonText: {
            fontSize:16,
            color:'#fff',
            marginHorizontal:10,
            fontWeight:'bold',
        },
        horizontalLine : {
            borderWidth:1,
            borderColor:'#212121',
            marginVertical:20,
        }
    });

export {darkTheme, lightTheme}