import React, { Component } from 'react';
import { ListView, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Spinner } from './common';
import CardDetail from './CardDetail';
import { fetchData } from '../actions/RecipeActions';

class CardList extends Component {
  constructor() {
    super();
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }

  componentWillMount() {
    this.props.fetchRecipes();
  }

  renderRow(recipe) {
    return (
      <CardDetail
      key={recipe.id}
      recipe={recipe}
      onPress={() => { Actions.recipeDetail(recipe); }}
      />
    );
  }

  render() {
    const stateFromRedux = this.dataSource.cloneWithRows(this.props.recipes);

    if (this.props.isLoading) {
      return (
        <View style={styles.spinnerStyle}>
          <Spinner />
        </View>
      );
    }

    return (
      <ScrollView style={styles.bgStyle}>
        <Text style={styles.headingStyle}>
          All Recipes
        </Text>
        <ListView
          dataSource={stateFromRedux}
          renderRow={this.renderRow}
          enableEmptySections
        />
    </ScrollView>
    );
  }
}

const styles = {
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  headingStyle: {
    fontSize: 24,
    fontFamily: 'Crimson Text',
    padding: 15,
    color: '#555150'
  },
  bgStyle: {
    backgroundColor: 'whitesmoke'
  }
};

const mapStateToProps = state => state.recipes;

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes() {
      dispatch(fetchData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
