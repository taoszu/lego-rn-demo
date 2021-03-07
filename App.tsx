// In App.js in a new project

import * as React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppPageView from './src/lego/page/app-page-view';


function HomeScreen(props: {
  route: any;
  navigation: any;
}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable style={{
        width: 100,
        height:100,
        backgroundColor:"#f0f",
        justifyContent:"center",
        alignItems:"center"
      }} onPress={()=>{
        
        props.navigation.push("LegoPage")
      }}>
      <Text>Home Screen</Text>
      </Pressable>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LegoPage" component={AppPageView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;