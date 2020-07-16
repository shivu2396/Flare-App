import * as React from 'react';
import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

import {Arrowbar, Textcard, Buttons} from '@components';

import {styles} from './style';

export const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Arrowbar />
      <View style={styles.heading}>
        <Text style={styles.headingtext}> Welcome back</Text>
      </View>
      <View style={styles.content}>
        <Textcard text="What's your email" />
        <Textcard text="And your password" />
      </View>
      <KeyboardAvoidingView behavior="position" style={styles.footer}>
        <Buttons text="Login" button={() => navigation.navigate('Signup')} />
        {/* <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.passwordtext}> Forgot password?</Text>
        </TouchableOpacity> */}
      </KeyboardAvoidingView>
    </View>
  );
};
