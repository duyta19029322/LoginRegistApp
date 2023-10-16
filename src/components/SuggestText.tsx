import * as React from "react";
import { StyleSheet, View, TextInput as RnTextInput, Text } from "react-native";

type SuggestTextProps = {
  label: string;
  text: string;
};

const SuggestText = (props: SuggestTextProps): React.JSX.Element => {
  const { label, text } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.items}>
        <Text>{text}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: { marginLeft: 5, fontWeight: "bold" },
  wrapper: { marginTop: 10, marginBottom: 30, alignItems: "center" },
  items: { flexDirection: "row" },
});

export default SuggestText;
