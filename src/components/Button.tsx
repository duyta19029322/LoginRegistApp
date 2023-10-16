import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
};

function Button({ label, onPress }: ButtonProps): React.JSX.Element {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.button}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#351a96",
    minHeight: 41,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  button: {
    color: "white",
  },
});

export default Button;
