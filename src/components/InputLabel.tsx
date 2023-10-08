import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type InputLabelProps = {
  label: string;
};

function InputLabel(props: InputLabelProps): React.JSX.Element {
  const {label} = props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
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

export default InputLabel;
