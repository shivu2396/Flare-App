import * as React from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './style';
import {Colors} from '@themes';

export const FitnessContent = ({catageory, subtitle}) => {
  return (
    <View style={styles.fitnessbox}>
      <View style={styles.fitnesscontent}>
        <Text> </Text>
      </View>
      <Text style={styles.fitnestitle}>{catageory}</Text>
      <Text style={styles.fitnesheading}>{subtitle}</Text>
    </View>
  );
};
