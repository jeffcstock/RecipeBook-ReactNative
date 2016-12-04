import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import CardList from './components/CardList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key='main'>
        <Scene
          key='cardList'
          component={CardList}
          title='RecipeBook'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
