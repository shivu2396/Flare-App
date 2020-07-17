import React from 'react';
import {View, TextInput} from 'react-native';

import {SvgLoupe, Colors} from '@themes';
import styles from './style';

export const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <SvgLoupe style={styles.searchBarIcon} />
      <TextInput
        style={styles.searchBarInput}
        placeholder='Try "Running in London" '
        placeholderTextColor={Colors.GRAY}
      />
    </View>
  );
};
