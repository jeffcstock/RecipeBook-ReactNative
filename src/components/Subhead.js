import React from 'react';
import { View, Text } from 'react-native';
import SubheadItem from './SubheadItem';

const Subhead = (props) => {
  return (
    <View style={{ paddingLeft: 20 }}>
      <Text>
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
      </Text>
    </View>
  );
};

export default Subhead;
