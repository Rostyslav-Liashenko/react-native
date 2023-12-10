import 'react-native-gesture-handler';
import React from 'react';
import ChatScreen from "@app/screens/ChatScreen/ChatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutUsScreen from "@app/screens/AboutUsScreen/AboutUsScreen";
import ProfileScreen from "@app/screens/ProfileScreen/ProfileScreen";

const Drawer = createDrawerNavigator();

function App(): React.ReactElement {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='AboutUs'>
          <Drawer.Screen name='AboutUs' component={AboutUsScreen} />
          <Drawer.Screen name='Profile' component={ProfileScreen} />
          <Drawer.Screen name='Chat' component={ChatScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
