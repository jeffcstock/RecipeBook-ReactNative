import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Header } from './components/common/Header';
import reducers from './reducers';
import CardList from './components/CardList';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.backgroundStyle}>
        <Header headerText="RecipeBook" />
        <CardList />
      </View>
    </Provider>
  );
};

const styles = {
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'whitesmoke'
  }
};

export default App;
