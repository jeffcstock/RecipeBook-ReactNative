import React from 'react';
import { Text } from 'react-native';

const Description = ({ description }) => {
  return (
    <Text style={styles.descriptionStyle}>
      {description}
    </Text>
  );
};

const styles = {
  descriptionStyle: {
    fontSize: 18,
    fontFamily: 'CrimsonText-Italic',
    color: '#555150',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    lineHeight: 20,
  },
};

export default Description;
