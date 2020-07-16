import * as React from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {styles} from './style';
import {Arrowbar, Textcard, Buttons} from '@components';

export const SignupEmail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Arrowbar />
      <View style={styles.heading}>
        <Text style={styles.headingtext}>What's your email {'\n'}address?</Text>
      </View>
      <Textcard text="me@gmail.com" />
      <KeyboardAvoidingView behavior="position" style={styles.footer}>
        <Buttons text="Continue" />
      </KeyboardAvoidingView>
    </View>
  );
};
