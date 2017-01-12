import React from 'react';
import { View, Text } from 'react-native';

const Step = ({ stepId, stepBody, index }) => {
  return (
    <View key={stepId} style={styles.rowItemStyle}>
      <Text style={styles.stepNumberStyle}>
        {index + 1}
      </Text>
      <Text style={styles.textStyle}>
        {stepBody}
      </Text>
    </View>
  );
};

const styles = {
  stepNumberStyle: {
    fontFamily: 'WorkSans-SemiBold',
    color: '#555150',
    fontSize: 22,
    paddingRight: 15
  },
  rowItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    fontFamily: 'Work Sans',
    textAlign: 'left',
    fontSize: 16,
    color: '#555150',
  },
};

export default Step;
