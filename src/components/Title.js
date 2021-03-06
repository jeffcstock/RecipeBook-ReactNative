import React from 'react';
import { View, Text } from 'react-native';

const Title = ({ title }) => {
  return (
    <View>
      <Text style={styles.recipeTitleStyle}>
        {title}
      </Text>
    </View>
  );
};

const styles = {
  recipeTitleStyle: {
    fontSize: 30,
    fontFamily: 'Crimson Text',
    color: '#555150',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    lineHeight: 30
  }
};

export default Title;
