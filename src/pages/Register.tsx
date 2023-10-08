import React from 'react';
import {Pressable, Text, View} from 'react-native';
import InputLabel from '../components/InputLabel';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const Register = (): React.JSX.Element => {
  return (
    <View>
      {/* Title of login form */}
      <View>
        <Text>Register</Text>
      </View>
      {/* Email Input */}
      <View>
        <InputLabel label="Email" />
        <TextInput secureTextEntry={false} />
      </View>
      {/* Password Input */}
      <View>
        <InputLabel label="Password" />
        <TextInput secureTextEntry={false} />
      </View>
      {/* Confirm Password Input */}
      <View>
        <InputLabel label="Confirm password" />
        <TextInput secureTextEntry={false} />
      </View>
      <View>
        <Button
          value="Register"
          onPress={function (): void {
            console.log('Pressing register button');
          }}
        />
      </View>
      {/* Redirect to Login */}
      <View>
        <Text>
          Already have an account?
          <Pressable>
            <Text>Login</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default Register;
