import React from 'react';
import { View, Text } from 'react-native';
import SubheadItem from './SubheadItem';

const Subhead = (props) => {
  return (
    <View style={{ paddingLeft: 20 }}>
      <Text style={styles.subtitleStyle}>
        <SubheadItem
          prefix={'Serves'}
          quantity={props.yieldSize}
          suffix={''}
        />
        <SubheadItem
          prefix={'Prep'}
          quantity={props.prepTime}
          suffix={'min'}
        />
        <SubheadItem
          prefix={'Cook'}
          quantity={props.cookTime}
          suffix={'min'}
        />

      { /*<View style={[styles.subheadSectionStyle, { marginLeft: -10 }]}> */}
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

export default Subhead;
