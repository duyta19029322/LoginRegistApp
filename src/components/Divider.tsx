import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

type DividerProps = {
  label: string;
};

const Divider = (props: DividerProps): React.JSX.Element => {
  const { label } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.line}></View>
      <Text style={styles.divideLabel}>{label}</Text>
      <View style={styles.line}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    borderWidth: 1,
    borderColor: "gray",
    height: 1,
    width: "42%",
  },
  divideLabel: { marginLeft: 8, marginRight: 8 },
});

export default Divider;
