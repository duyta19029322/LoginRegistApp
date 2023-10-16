import React from "react";
import { Image, StyleSheet, View } from "react-native";
import SocialButton from "../components/SocialButton";
import Button from "../components/Button";
import SuggestText from "../components/SuggestText";
import LoginRegistHeader from "../components/LoginRegistHeader";
import Divider from "../components/Divider";
import InputWithLabel from "../components/InputWithLabel";

type RegisterProps = {
  onSignUp: (isLogin: boolean) => void;
}

const Register = (props: RegisterProps): React.JSX.Element => {
  const { onSignUp } = props;
  const socials = [
    { uri: require("../../iconmonstr-github-11.png"), label: "Github" },
    { uri: require("../../gitlab-seeklogo.com1.png"), label: "Git Lab" },
  ];

  const inputs = [
    {
      label: "Email",
      placeholder: "Enter your email",
      secureTextEntry: false,
      keyboardTypeValue: "default",
    },
    {
      label: "Phone Number",
      placeholder: "Enter your phone number",
      secureTextEntry: false,
      keyboardTypeValue: "numeric",
    },
    {
      label: "Password",
      placeholder: "Please enter your password",
      secureTextEntry: true,
      keyboardTypeValue: "default",
    },
    {
      label: "Confirm Password",
      placeholder: "Please enter your confirm password",
      secureTextEntry: true,
      keyboardTypeValue: "default",
    },
  ];

  const onPress = () => {
    onSignUp(true);
    console.log("Pressing Sign up button");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../UIX-Class-Square.png")}
          style={styles.image}
        />
      </View>
      <LoginRegistHeader
        header="Create an account"
        description="Connect with your friends today!"
      />
      {inputs.map((data, index) => (
        <InputWithLabel
          key={index}
          label={data.label}
          placeholder={data.placeholder}
          secureTextEntry={data.secureTextEntry}
          keyboardTypeValue={data.keyboardTypeValue}
        />
      ))}
      <Button label="Sign Up" onPress={() => onPress()} />
      <Divider label="Or with" />
      <View style={styles.socialWrapper}>
        {socials.map((data, index) => (
          <SocialButton key={index} imageUri={data.uri} label={data.label} />
        ))}
      </View>
      <SuggestText label="Login" text="Already have an account?" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginLeft: 28, marginRight: 28, height: "100%" },
  socialWrapper: { flexDirection: "row" },
  image: { width: 160, height: 160 },
  imageWrapper: { alignItems: "center" },
});

export default Register;
