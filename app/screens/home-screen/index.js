import React, {useState} from 'react';
import {View, FlatList, ScrollView, Text} from 'react-native';

import {styles} from './style';
import {SearchBar, FlareContent, FitnessContent} from '@components';
import {Innerdata} from '@json';

export const HomeScreen = ({navigation}) => {
  const [input, setinput] = useState(Innerdata);
  console.log(input);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
      </View>
      <FlatList
        data={input}
        horizontal={true}
        renderItem={({item}) => (
          <FlareContent title={item.title} title1={item.title1} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.headingtext}>Fitness and run clubs</Text>
      {/* <FlatList
        data={input}
        renderItem={({item}) => (
          <FitnessContent title={item.title} title1={item.title1} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      /> */}
      <FitnessContent />
    </ScrollView>
  );
};
