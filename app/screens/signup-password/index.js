import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Arrowbar, Textcard, Buttons} from '@components';

export const SignupPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Arrowbar />
      </TouchableOpacity>
      <Text style={styles.headingtext}>Choose your password </Text>
      <Textcard text="At least 8 characters" />
      <View style={styles.footer}>
        <Buttons text="Continue" />
      </View>
    </View>
  );
};
