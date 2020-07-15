import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

export const Loginbutton = ({navigation}) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.button}
          colors={['#FFA21A', '#FFBF2A', '#FFBF2A']}>
          <Text style={styles.buttontext}> Login</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
