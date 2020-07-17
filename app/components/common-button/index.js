import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {Colors} from '@themes';

export const Buttons = (props) => {
  return (
    <TouchableOpacity onPress={props.button}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        locations={[0, 0.2, 1]}
        style={styles.button}
        colors={[Colors.ORANGE, Colors.YELLOW, Colors.LIGHTYELLOW]}>
        <Text style={styles.buttontext}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
