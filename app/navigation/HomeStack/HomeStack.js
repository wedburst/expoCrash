import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import HomeScreen from "../../screen/Home/HomeScreen";
import ProfileScreen from "../../screen/Profile/ProfileScreen";
import RateScreen from "../../screen/Rate/RateScreen";
import HelpScreen from "../../screen/Help/HelpScreen";
import InfoScreen from "../../screen/Info/InfoScreen";
import MenuSvg from "../../../assets/icon/menu.svg";
import AtrasSvg from "../../../assets/icon/atras.svg";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function ProcessStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#BC0D11",
            borderBottomColor: "#ff0000",
          },
          headerLeft: () => (
            <TouchableHighlight
              onPress={() => navigation.toggleDrawer()}
              underlayColor="#BC1D22"
            >
              <MenuSvg width={25} height={25} style={styles.icon} />
            </TouchableHighlight>
          ),
          headerTitle: () => (
            <View style={styles.TitleContent}>
              <Text>HOME</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: "#BC0D11",
            borderBottomColor: "#ff0000",
          },
          headerTitle: () => (
            <View style={styles.TitleContent2}>
              <Text>Perfil</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="RateScreen"
        component={RateScreen}
        options={{
          headerTitleStyle: {},
          headerStyle: {
            backgroundColor: "#BC0D11",
            borderBottomColor: "#ff0000",
          },
          headerTitle: () => (
            <View style={styles.TitleContent2}>
              <Text>Rate</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          headerStyle: {
            backgroundColor: "#BC0D11",
            borderBottomColor: "#ff0000",
          },
          headerTitle: () => (
            <View style={styles.TitleContent2}>
              <Text>Ayuda</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{
          headerStyle: {
            backgroundColor: "#BC0D11",
            borderBottomColor: "#ff0000",
          },
          headerTitle: () => (
            <View style={styles.TitleContent2}>
              <Text>Información</Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TitleContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -50,
  },
  TitleContent2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -150,
  },
  icon: {
    marginRight: 10,
  },
  icon2: {
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
  },
  iconBack: {
    marginLeft: 10,
    paddingHorizontal: 10,
  },

  ontainer: {
    flex: 1,
    marginLeft: -24,
    marginTop: 4,
  },
});
