import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    // borderBottomWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    // borderColor: '#ddd',
    position: 'relative',
    overflow: 'hidden'
  }
};

export { CardSection };
