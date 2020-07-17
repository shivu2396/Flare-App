import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';

export const FlareContent = ({title, title1}) => {
  return (
    <View style={styles.content}>
      <View style={styles.innerbox}>
        <Text> fit</Text>
      </View>
      <View>
        <Text style={styles.innertext}>{title} </Text>
      </View>
    </View>
  );
};
