import React from 'react';
import {TextInput as RnTextInput, View, StyleSheet} from 'react-native';

type TextInputProps = {
  value?: string;
  secureTextEntry: boolean;
};

function TextInput(props: TextInputProps): React.JSX.Element {
  const {value, secureTextEntry} = props;
  return (
    <View style={styles.wrapper}>
      <RnTextInput value={value} secureTextEntry={secureTextEntry} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    padding: 10,
  },
});

export default TextInput;
