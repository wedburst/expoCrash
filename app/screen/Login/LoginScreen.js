import React, { useContext } from "react";
import { Text, View, TouchableHighlight, Image } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, margin: 50 }}>
      <Image source={require("../../../assets/assets/wash/washlogin.jpg")} />
      <TouchableHighlight
        style={{ backgroundColor: "#ff0", padding: 10, alignItems: "center" }}
        onPress={async () =>
          await login("felixmartinez@gmail.com", "qqwerty", 1)
        }
      >
        <Text>Login</Text>
      </TouchableHighlight>
    </View>
  );
}
