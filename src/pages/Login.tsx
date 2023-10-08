import React from 'react';
import {Pressable, Text, View} from 'react-native';
import InputLabel from '../components/InputLabel';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const Login = (): React.JSX.Element => {
  return (
    <View>
      {/* Title of login form */}
      <View>
        <Text>Login</Text>
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
      <View>
        <Button
          value="Login"
          onPress={function (): void {
            console.log('Pressing login button');
          }}
        />
      </View>
      {/* Redirect to Register */}
      <View>
        <Text>
          Don't have an account?
          <Pressable>
            <Text>Register</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default Login;
