import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Login,Register,Splash,Home,DaftarJual,Jual,Notifikasi,Akun} from '../Screens'
import { BottomNavigator } from '../Components'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp= () => {

  return(
      <Tab.Navigator  tabBar={props => <BottomNavigator {...props} />}  >
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Notifikasi" component={Notifikasi} options={{headerShown: false}}/>
        <Tab.Screen name="Jual" component={Jual} options={{headerShown: false}}/>
        <Tab.Screen name="DaftarJual" component={DaftarJual} options={{headerShown: false}}/>
        <Tab.Screen name="Akun" component={Akun} options={{headerShown: false}}/>
      </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component = {Splash} options={{headerShown: false}}/> 
        <Stack.Screen name="Login" component = {Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component = {Register} options={{headerShown: false}}/>  
        <Stack.Screen name="MainApp" component = {MainApp} options={{headerShown: false}}/>   
    </Stack.Navigator>
  )
}


export default Router