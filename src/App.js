import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: "AIzaSyAeft5iG8384dOGQWbxAk1wig2DHtYV2rk",
        authDomain: "manager-react-native-84368.firebaseapp.com",
        databaseURL: "https://manager-react-native-84368.firebaseio.com",
        projectId: "manager-react-native-84368",
        storageBucket: "manager-react-native-84368.appspot.com",
        messagingSenderId: "809176878923"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;