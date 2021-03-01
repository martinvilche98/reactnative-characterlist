/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/redux/rootReducer'
/*
 * Views
 */
import {CharacterListView} from "./src/components/CharacterList"

const Root = () => {

  return (
      <Provider store={store}>
        <CharacterListView/>
      </Provider>
  );
};


export default Root;
