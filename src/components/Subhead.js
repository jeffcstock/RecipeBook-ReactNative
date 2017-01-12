import React from 'react';
import { View, Text } from 'react-native';
import SubheadItem from './SubheadItem';

const Subhead = ({ yieldSize, prepTime, cookTime }) => {
  return (
    <View style={{ paddingLeft: 20 }}>
      <Text>
        <SubheadItem
          prefix={'Serves'}
          quantity={yieldSize}
          suffix={''}
        />
        <SubheadItem
          prefix={'Prep'}
          quantity={prepTime}
          suffix={'min'}
        />
        <SubheadItem
          prefix={'Cook'}
          quantity={cookTime}
          suffix={'min'}
        />
      </Text>
    </View>
  );
};

export default Subhead;
