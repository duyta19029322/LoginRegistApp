import * as React from "react";
import {Text, StyleSheet, View} from "react-native";

const InputLabel = () => {
  	
  	return (
    		<View style={styles.emailParent}>
      			<Text style={[styles.email, styles.emailTypo]}>Password</Text>
      			<View style={styles.instanceChild} />
      			<Text style={[styles.sophatleatnintrealive, styles.emailTypo]}>Please Enter Your Password</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	emailTypo: {
    		textAlign: "left",
    		fontFamily: "Manrope-SemiBold",
    		fontWeight: "600",
    		fontSize: 14,
    		position: "absolute"
  	},
  	email: {
    		top: "0%",
    		color: "#00004d",
    		left: "0%"
  	},
  	instanceChild: {
    		height: "61.19%",
    		top: "38.81%",
    		right: "0%",
    		bottom: "0%",
    		borderRadius: 5,
    		backgroundColor: "#fff",
    		borderStyle: "solid",
    		borderColor: "#c6c6c6",
    		borderWidth: 1,
    		left: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	sophatleatnintrealive: {
    		top: "53.73%",
    		left: "3.62%",
    		color: "rgba(31, 31, 31, 0.43)"
  	},
  	emailParent: {
    		flex: 1,
    		height: 67,
    		width: "100%"
  	}
});

export default InputLabel;
