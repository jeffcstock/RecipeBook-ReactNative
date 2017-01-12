import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Title from './Title';
import Description from './Description';
import Subhead from './Subhead';
import HeaderWithIcon from './HeaderWithIcon';
import HarvestIcon from '../StaticImages/harvest.png';
import RecipeIcon from '../StaticImages/recipe-icon.png';

const RecipeDetail = (recipe) => {
  const {
    title,
    feature,
    description,
    yieldSize,
    prepTime,
    cookTime,
    ingredients,
    steps
  } = recipe;

  const {
    bgStyle,
    imageStyle,
    ingredientRowStyle,
    ingredientStyle,
    quantityStyle,
    stepNumberStyle,
  } = styles;

  return (
    <ScrollView style={bgStyle}>
      <Image style={imageStyle} source={{ uri: feature.url }} />
      <Title title={title} />
      <Description description={description} />
      <Subhead
        yieldSize={yieldSize}
        prepTime={prepTime}
        cookTime={cookTime}
      />
      <HeaderWithIcon icon={HarvestIcon} text={'Ingredients:'} />

    <View>
      {ingredients.map(({ ingredientId, ingredientQuantity, ingredientName }) => {
      return (
          <View key={ingredientId} style={ingredientRowStyle}>
            <View>
              <Text style={ingredientStyle}>
                {ingredientName}
              </Text>
            </View>
            <View>
              <Text style={quantityStyle}>
                {ingredientQuantity}
              </Text>
            </View>
          </View>
        );
      })}
    </View>

    <HeaderWithIcon icon={RecipeIcon} text={'Directions:'} />

    <View style={{ marginRight: 30 }}>
      {steps.map(({ stepId, stepBody }, index) => {
      return (
          <View key={stepId} style={ingredientRowStyle}>
            <Text style={stepNumberStyle}>
              {index + 1}
            </Text>
            <Text style={ingredientStyle}>
              {stepBody}
            </Text>
          </View>
        );
      })}
    </View>

    </ScrollView>
  );
};

const styles = {
  bgStyle: {
    backgroundColor: 'whitesmoke'
  },
  imageStyle: {
    height: 200,
    flex: 1,
    margin: 0,
    width: null,
  },
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
  stepNumberStyle: {
    fontFamily: 'WorkSans-SemiBold',
    color: '#555150',
    fontSize: 22,
    paddingRight: 15
  },
};

export default RecipeDetail;
