import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

type LoginRegistHeaderProps = {
  header: string;
  description: string;
};

const LoginRegistHeader = (
  props: LoginRegistHeaderProps
): React.JSX.Element => {
  const { header, description } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.biggerAndBold}>{header}</Text>
      <Text>{description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  biggerAndBold: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default LoginRegistHeader;
