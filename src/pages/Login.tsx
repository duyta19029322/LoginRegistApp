import React from "react";
import { Image, StyleSheet, View } from "react-native";
import SocialButton from "../components/SocialButton";
import Button from "../components/Button";
import SuggestText from "../components/SuggestText";
import LoginRegistHeader from "../components/LoginRegistHeader";
import Divider from "../components/Divider";
import InputWithLabel from "../components/InputWithLabel";

type LoginProps = {
  onLogin: (isLogin: boolean) => void;
}

const Login = (props: LoginProps): React.JSX.Element => {
  const { onLogin } = props;

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
      label: "Password",
      placeholder: "Please enter your password",
      secureTextEntry: true,
      keyboardTypeValue: "default",
    },
  ];

  const onPress = () => {
    onLogin(false);
    console.log("Pressing login button");
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
        header="Hi, Welcome Back!"
        description="Hello again, you've been missed!"
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
      <Button label="Login" onPress={() => onPress()} />
      <Divider label="Or with" />
      <View style={styles.socialWrapper}>
        {socials.map((data, index) => (
          <SocialButton key={index} imageUri={data.uri} label={data.label} />
        ))}
      </View>
      <SuggestText label="Sign Up" text="Don't have an account?" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginLeft: 28, marginRight: 28, height: "100%" },
  socialWrapper: { flexDirection: "row" },
  image: { width: 160, height: 160 },
  imageWrapper: { alignItems: "center" },
});

export default Login;
