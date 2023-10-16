import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type InputWithLabelProps = {
  label: string;
  placeholder: string;
  secureTextEntry: boolean;
  keyboardTypeValue: string;
};

const InputWithLabel = (props: InputWithLabelProps) => {
  const { label, placeholder, secureTextEntry, keyboardTypeValue } = props;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
		keyboardType={keyboardTypeValue}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: 5,
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 15,
    height: 40,
  },
});

export default InputWithLabel;
