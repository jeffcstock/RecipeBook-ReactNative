import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Title from './Title';
import Description from './Description';
import Subhead from './Subhead';

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
    subheadSectionStyle,
    subtitleStyle,
    subtitleSecondStyle,
    light,
    ingredientHeaderStyle,
    sectionStyle,
    iconStyle,
    ingredientRowStyle,
    ingredientStyle,
    quantityStyle,
    stepNumberStyle,
  } = styles;

  const harvest = require('../StaticImages/harvest.png');
  const recipeIcon = require('../StaticImages/recipe-icon.png');

  return (
    <ScrollView style={bgStyle}>
      <Image
        style={imageStyle}
        source={{ uri: feature.url }}
      />

    <Title title={title} />
    <Description description={description} />
    <Subhead
      yieldSize={yieldSize}
      prepTime={prepTime}
      cookTime={cookTime}
    />

    <View style={sectionStyle}>
      <View>
        <Image source={harvest} style={iconStyle} />
      </View>
      <View style={{ paddingLeft: 15 }}>
        <Text style={ingredientHeaderStyle}>
          Ingredients:
        </Text>
      </View>
    </View>

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

    <View style={sectionStyle}>
      <View>
        <Image source={recipeIcon} style={iconStyle} />
      </View>
      <View style={{ paddingLeft: 15 }}>
        <Text style={ingredientHeaderStyle}>
          Directions:
        </Text>
      </View>
    </View>

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
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 20,
    marginTop: 20,
    alignItems: 'flex-end',
    marginBottom: 15,
    marginLeft: 20,
    paddingRight: 10
  },
  ingredientHeaderStyle: {
    fontFamily: 'WorkSans-SemiBold',
    color: '#555150',
    fontSize: 24,
    marginTop: 10,
  },
  iconStyle: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
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
