import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import HomeStack from "./HomeStack/HomeStack";

const AppDrawer = createDrawerNavigator();

export function DrawerNavigator({navigation, route}) {
  return (
    <AppDrawer.Navigator
      drawerContent={props => <DrawerContent {...props}/>}
      drawerPosition="right"
      route={route}
      screenOptions={{
        itemStyle: { marginVertical: 30 },
      }}
      drawerStyle={{
          width: '85%',
      }}
      initialRouteName="Home"
    >
        <AppDrawer.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
    </AppDrawer.Navigator>
  );
}
