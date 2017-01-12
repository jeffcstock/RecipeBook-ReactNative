import React from 'react';
import { View, Text, Image } from 'react-native';

const HeaderWithIcon = ({ icon, text }) => {
  return (
    <View style={styles.sectionStyle}>
      <View>
        <Image source={icon} style={styles.iconStyle} />
      </View>
      <View style={{ paddingLeft: 15 }}>
        <Text style={styles.ingredientHeaderStyle}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = {
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
  iconStyle: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  ingredientHeaderStyle: {
    fontFamily: 'WorkSans-SemiBold',
    color: '#555150',
    fontSize: 24,
    marginTop: 10,
  },
}

export default HeaderWithIcon;
