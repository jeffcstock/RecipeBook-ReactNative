import React from 'react';
import { View, Text } from 'react-native';

const Ingredient = ({
                      ingredientId,
                      ingredientName,
                      ingredientQuantity
                    }) => {
  return (
    <View key={ingredientId} style={styles.ingredientRowStyle}>
      <View>
        <Text style={styles.ingredientStyle}>
          {ingredientName}
        </Text>
      </View>
      <View>
        <Text style={styles.quantityStyle}>
          {ingredientQuantity}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  ingredientRowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    paddingTop: 10,
    paddingBottom: 10
  },
  ingredientStyle: {
    fontFamily: 'Work Sans',
    textAlign: 'left',
    fontSize: 16,
    color: '#555150',
  },
  quantityStyle: {
    fontFamily: 'WorkSans-SemiBold',
    color: '#555150',
    fontSize: 18
  },
};

export default Ingredient;
