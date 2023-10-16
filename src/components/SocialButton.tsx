import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";

type SocialButtonProps = {
  imageUri: any;
  label: string;
};

function SocialButton({
  imageUri,
  label,
}: SocialButtonProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log("Pressing gitlab button")}>
        <View style={styles.wrapper}>
          <Image source={imageUri} style={{ marginRight: 5 }} />
          <Text>{label}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "44%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SocialButton;
