/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { View } from 'react-native';

/*
 * Views
 */
import {CharacterList} from "./src/components/CharacterList"

const App = () => {

  return (
      <View>
        <CharacterList/>
      </View>
  );
};


export default App;
