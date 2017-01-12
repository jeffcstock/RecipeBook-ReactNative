import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import Title from './Title';
import Description from './Description';
import Subhead from './Subhead';
import HeaderWithIcon from './HeaderWithIcon';
import Ingredient from './Ingredient';
import Step from './Step';

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

  return (
    <ScrollView style={styles.bgStyle}>
      <Image
        style={styles.imageStyle}
        source={{ uri: feature.url }}
      />
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
            <Ingredient
              ingredientId={ingredientId}
              ingredientName={ingredientName}
              ingredientQuantity={ingredientQuantity}
            />
          );
        })}
      </View>

      <HeaderWithIcon icon={RecipeIcon} text={'Directions:'} />

      <View style={{ marginRight: 30 }}>
        {steps.map(({ stepId, stepBody }, index) => {
        return (
            <Step
              stepId={stepId}
              stepBody={stepBody}
              index={index}
            />
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
};

export default RecipeDetail;
