import * as React from "react";
import { StyleSheet, View, TextInput as RnTextInput } from "react-native";

const TextInput = (): React.JSX.Element => {
  return <View style={styles.rectangleView} />;
};
const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: 5,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#c6c6c6",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 41,
  },
});

export default TextInput;
