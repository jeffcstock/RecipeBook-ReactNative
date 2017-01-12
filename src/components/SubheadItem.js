import React from 'react';
import { View, Text } from 'react-native';

const SubheadItem = ({ quantity, prefix, suffix }) => {
  return (
    <View style={styles.subheadSectionStyle}>
      <Text style={styles.subtitleStyle}>
        <Text style={styles.light}>
          {prefix}:{'\n'}
        </Text>
        <Text style={styles.subtitleSecondStyle}>
          {quantity} {suffix}
        </Text>
      </Text>
    </View>
  );
};

const styles = {
  subheadSectionStyle: {
    height: 50,
    width: 100
  },
  subtitleStyle: {
    fontFamily: 'WorkSans-SemiBold',
    color: '#555150',
  },
  light: {
    color: '#AFAFAF'
  },
  subtitleSecondStyle: {
    fontSize: 20
  },
};

export default SubheadItem;
