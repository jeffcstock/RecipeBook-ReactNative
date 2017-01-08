import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import CardList from './components/CardList';
import RecipeDetail from './components/RecipeDetail';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router
      titleStyle={styles.navBarTitleStyle}
      navigationBarStyle={styles.navBarStyle}
      sceneStyle={{ paddingTop: 60 }}
    >
    <Scene key='index' title="RecipeBook">
      <Scene key='cardList' component={CardList} title='RecipeBook' />
      <Scene key='recipeDetail' component={RecipeDetail} title='RecipeBook' />
    </Scene>
      <Scene key='auth'>
        <Scene
          key='login'
          component={LoginForm}
          title='Please Login'
        />
      </Scene>
    </Router>
  );
};

const styles = {
  navBarStyle: {
    backgroundColor: 'whitesmoke'
  },
  navBarTitleStyle: {
    fontFamily: 'Crimson Text',
    fontSize: 22,
    color: '#555150',

  }
};
console.disableYellowBox = true
export default RouterComponent;
