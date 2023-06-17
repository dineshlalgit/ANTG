import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

import {createBottomTabNavigator,createStackNavigator,createSwitchNavigator,createAppContainer} from 'react-navigation';
import Guide from './screens/Guide';
import Ship from './screens/Ship';
import Ferry from './screens/Ferry';
import Bus from './screens/Bus';
import Home from './screens/Home';





export default  createBottomTabNavigator({


 Home: {
   screen:Home,
   navigationOptions: {
     tabBarLabel:'HOME',
     tabBarIcon : ({tintColor})=>(
       <Image source={require('./assets/home.png')}
       style={{height: 24,width: 24,tintColor: tintColor}} />
     )
   }
 },
 Guide: {
   screen:Guide,
   navigationOptions: {
     title:'GUIDE',
     tabBarLabel:'GUIDE',
     tabBarIcon : ({tintColor})=>(
        <Image source={require('./assets/guide.png')}
        style={{height: 24,width: 24,tintColor: tintColor}} />
     )
   }
 },
 Ferry: {
    screen:Ferry,
    navigationOptions: {
     title:'GUIDE',
      tabBarLabel:'FERRY',
      tabBarIcon : ({tintColor})=>(
         <Image source={require('./assets/ferry.png')}
         style={{height: 24,width: 24,tintColor: tintColor}} />
      )
    }
 },
 Ship: {
    screen:Ship,
    navigationOptions: {
     title:'GUIDE',
      tabBarLabel:'SHIP',
      tabBarIcon : ({tintColor})=>(
         <Image source={require('./assets/ship2.png')}
         style={{height: 24,width: 24,tintColor: tintColor}} />
      )
    }
 },
 Bus: {
    screen:Bus,
    navigationOptions: {
      headertitle:'BUS',
      tabBarLabel:'BUS',
      tabBarIcon : ({tintColor})=>(
         <Image source={require('./assets/bus1.png')}
         style={{height: 24,width: 24,tintColor: tintColor}} />
      )
    }
 }
},
{
  tabBarOptions: {
    activeTintColor:'red',
    inactiveTintColor:'grey',
    style: {
      backgroundColor: 'white',
      borderWidth:0,
      shadowOffset:{width:5,height:3},
      shadowColor:'black',
      shadowOpacity:0.5,
      elevation:5
    }
  }
}
)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
