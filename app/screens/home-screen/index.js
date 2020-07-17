import React, {useState} from 'react';
import {View, FlatList, ScrollView, Text} from 'react-native';

import {styles} from './style';
import {SearchBar, FlareContent, FitnessContent} from '@components';
import {Innerdata, Fitnessdata} from '@json';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const HomeScreen = ({navigation}) => {
  const [input, setinput] = useState(Innerdata);
  const [fitness, setfitness] = useState(
    Fitnessdata.filter((Fitnessdata) => Fitnessdata.id < 5),
  );

  const [activity, setactivity] = useState(Fitnessdata);
  // const [displaydata, setdisplaydata] = useState(
  //   Fitnessdata.filter((Fitnessdata) => Fitnessdata.id < 5),
  // );
  // console.log(displaydata);
  console.log('activity', activity);
  console.log('fitness', fitness);
  console.log('input', input);

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
      <FlatList
        data={fitness}
        renderItem={({item}) => (
          <FitnessContent subtitle={item.subtitle} catageory={item.catageory} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setfitness(
            Fitnessdata.filter((Fitnessdata) => Fitnessdata.id < activity + 3),
          );
          setactivity(activity + 3);
        }}>
        <Text style={styles.text}>See all Fitness and run clubs</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
