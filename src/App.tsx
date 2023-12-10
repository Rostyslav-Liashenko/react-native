import 'react-native-gesture-handler';
import React from 'react';
import ChatScreen from "@app/screens/ChatScreen/ChatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigation from "@app/navigation/TabNavigation/TabNavigation";
import CustomDrawerContent from "@app/navigation/CustomDrawerContent/CustomDrawerContent";

const Drawer = createDrawerNavigator();

function App(): React.ReactElement {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Info'
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name='Info'
            component={TabNavigation}
            options={{
              drawerLabel: 'Інфо',
            }}
          />
          <Drawer.Screen
            name='Chat'
            component={ChatScreen}
            options={{
              drawerLabel: 'Чат',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
