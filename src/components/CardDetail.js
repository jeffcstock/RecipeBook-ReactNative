import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from './common';

const CardDetail = ({ recipe }) => {
  const {
    title,
    yieldSize,
    cookTime,
    prepTime,
    feature
  } = recipe;

  const {
    cardHeaderStyle,
    recipeTitleStyle,
    imageStyle,
    subheadSectionStyle,
    subtitleStyle,
    light
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={cardHeaderStyle}>
          <Text style={recipeTitleStyle}>
            {title}
          </Text>
        </View>
      </CardSection>

      <CardSection style={{ marginTop: 15 }}>
        <View style={{ paddingLeft: 15 }}>
          <Text>
            <View style={subheadSectionStyle}>
              <Text style={subtitleStyle}>
                <Text style={light}>
                  Serves:{'\n'}
                </Text>
                <Text>
                  {yieldSize}
                </Text>
              </Text>
            </View>

            <View style={subheadSectionStyle}>
              <Text style={subtitleStyle}>
                <Text style={light}>
                  Prep Time:{'\n'}
                </Text>
                <Text>
                  {prepTime} min
                </Text>
              </Text>
            </View>

            <View style={subheadSectionStyle}>
              <Text style={subtitleStyle}>
                <Text style={light}>
                  Cook Time:{'\n'}
                </Text>
                <Text>
                  {cookTime} min
                </Text>
              </Text>
            </View>
          </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: feature.url }}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  cardHeaderStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeTitleStyle: {
    fontSize: 24,
    fontFamily: 'Crimson Text',
    color: '#555150',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    lineHeight: 25
  },
  imageStyle: {
    height: 200,
    flex: 1,
    margin: 0,
    width: null,
    overflow: 'hidden',
    opacity: 0.8
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
  }
};

export default CardDetail;
