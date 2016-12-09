import React from 'react';
import { View } from 'react-native';

const Hr = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]} />
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  }
};

export { Hr };
