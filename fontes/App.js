import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "montserrat-italic": require("./assets/fonts/Montserrat-Italic.ttf"),
    "raleway-black": require("./assets/fonts/Raleway-Black.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.principal}>Título principal</Text>
      <Text style={styles.secundario}>Segunda fonte usada</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  principal: {
    fontFamily: "montserrat-italic",
    fontSize: 20,
    marginVertical: 10,
  },

  secundario: {
    fontFamily: "raleway-black",
    fontSize: 17
  }
});
