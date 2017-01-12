import React from 'react';
import { View, Text } from 'react-native';

const SubheadItem = ({ quantity, prefix, suffix }) => {
  return (
    <View style={styles.subheadSectionStyle}>
      <Text style={styles.subtitleStyle}>
        <Text style={{ color: '#AFAFAF' }}>
          {prefix}:{'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>
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
};

export default SubheadItem;
