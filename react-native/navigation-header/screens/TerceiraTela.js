import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./HeaderButton";

export default TerceiraTela = props => {
  return (
    <View style={styles.screen}>
      <Text>Terceira</Text>
      <Button
        title="Voltar para segunda"
        onPress={() => props.navigation.goBack()}
      />
    </View>
  );
};

TerceiraTela.navigationOptions = () => {
  /**
   * color and iconSize are passed through props
   * to HeaderButton.
   */
  return {
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="shape-plus"
          color="white"
          iconSize={25}
          onPress={() => console.log("pressed...")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
