import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

const Register = (): React.JSX.Element => {
  return (
    <View style={[{ marginLeft: 28, marginRight: 28 }]}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../UIX-Class-Square.png")} style={{ width: 160, height: 160 }} />
      </View>
      <View style={styles.header}>
        <Text style={styles.biggerAndBold}>Create an account</Text>
        <Text>Connect with your friends today!</Text>
      </View>
      <View>
        <Text style={styles.inputLabelBold}>Email</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder={"Enter your email"}
        />
      </View>
      <View>
        <Text style={styles.inputLabelBold}>Phone Number</Text>
        <TextInput
          style={styles.textInputStyle}
          keyboardType="numeric"
          placeholder="Enter your phone number"
        />
      </View>
      <View>
        <Text style={styles.inputLabelBold}>Password</Text>
        <TextInput
          style={styles.textInputStyle}
          secureTextEntry={true}
          placeholder="Please enter your password"
        />
      </View>
      <View>
        <Text style={styles.inputLabelBold}>Confirm Password</Text>
        <TextInput
          style={styles.textInputStyle}
          secureTextEntry={true}
          placeholder="Please enter your confirm password"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable
          style={{ width: "100%" }}
          onPress={() => console.log("Pressing Sign up button")}
        >
          <Text style={styles.button}>Sign Up</Text>
        </Pressable>
      </View>
      <View
        style={{
          marginTop: 15,
          marginBottom: 15,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            height: 1,
            width: "40%",
          }}
        ></View>
        <Text style={{ marginLeft: 8, marginRight: 8 }}>Or With</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            height: 1,
            width: "41%",
          }}
        ></View>
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <View
          style={{
            alignItems: "center",
            width: "47%",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
        >
          
        <Pressable onPress={() => console.log('Pressing gitlab button')}>
          <View
            style={{
              flexDirection: "row",
              width: "55%",
              alignItems: "center",
            }}
          >
            <Image source={require("../../iconmonstr-github-11.png")} />
            <Text style={{ marginLeft: 10 }}>Github</Text>
          </View>
          </Pressable>
        </View>
        <View
          style={{
            alignItems: "center",
            width: "47%",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginLeft: 10,
          }}
        >
          <Pressable onPress={() => console.log('Pressing github button')}>
          <View
            style={{
              width: "55%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../gitlab-seeklogo.com1.png")} />
            <Text style={{ marginLeft: 10 }}>Git Lab</Text>
          </View>
          </Pressable>
        </View>
      </View>
      <View style={{ marginTop: 30, marginBottom: 30, alignItems: 'center' }}>
        <View
          style={{
            width: "50%",
            flexDirection: "row",
          }}
        >
          <Text>Already have an account?</Text>
          <Text style={{ marginLeft: 5, fontWeight: "bold" }}>Login</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlignVertical: "center",
    textAlign: "center",
    height: 41,
    color: "white",
    backgroundColor: "#351a96",
    borderRadius: 5,
  },
  textInputStyle: {
    padding: 5,
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 15,
  },
  header: {
    marginBottom: 20,
  },
  inputLabelBold: {
    fontWeight: "bold",
  },
  biggerAndBold: {
    fontWeight: "bold",
    fontSize: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default Register;
