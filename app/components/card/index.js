import * as React from 'react';
import {View, TextInput} from 'react-native';

import {styles} from './style';
import {Colors} from '@themes';

export const Textcard = (props) => {
  return (
    <View style={styles.content}>
      <TextInput
        style={styles.contenttitle}
        placeholder={props.text}
        placeholderTextColor={Colors.GRAY}
      />
      {/* <TextInput
        style={styles.contenttitle1}
        placeholder={props.text1}
        placeholderTextColor={Colors.GRAY}
      /> */}
    </View>
  );
};
