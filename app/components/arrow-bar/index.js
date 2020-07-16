import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {SvgLeftArrow} from '../../themes/Images/left-arrow';
import {styles} from './style';
export const Arrowbar = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backimage}>
        <SvgLeftArrow />
      </TouchableOpacity>
    </View>
  );
};
