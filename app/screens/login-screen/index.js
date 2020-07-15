import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';

import {styles} from './style';
import {Arrowbar, Createbutton} from '@components';

// import {Flarecard} from '@components';

export const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Arrowbar />

      <View style={styles.heading}>
        <Text style={styles.headingtext}>Welcome back </Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.contenttitle}
          placeholder="What's your email?"
          placeholderTextColor="#9B9B9B"
        />
        <TextInput
          style={styles.contenttitle1}
          placeholder="And yourpassword?"
          placeholderTextColor="#9B9B9B"
        />
      </View>

      <Createbutton />
      <View style={styles.passwordblock}>
        <Text style={styles.passwordtext}> Forgot Password?</Text>
      </View>
    </View>
  );
};
