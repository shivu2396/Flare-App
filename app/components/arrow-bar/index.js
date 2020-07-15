import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {SvgLeftArrow} from '../../themes/Images/left-arrow';
import {styles} from './style';
export const Arrowbar = ({navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.backimage}>
        <SvgLeftArrow />
      </View>
    </View>
  );
};
