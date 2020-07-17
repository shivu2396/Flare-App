import {StyleSheet} from 'react-native';
import {Size} from '@themes';
import {Colors} from '@themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    // backgroundColor: 'pink',
    height: Size.deviceHeight * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headingtext: {
    textAlign: 'center',
    fontSize: Size.moderateScale(32),
    color: Colors.BLACK,
    fontFamily: 'SFProDisplay-Bold',
  },
  button: {
    marginVertical: Size.moderateScale(25),
    marginHorizontal: Size.moderateScale(35),
    padding: Size.moderateScale(10),
    borderColor: Colors.LIGHTORANGE,
    borderWidth: Size.moderateScale(1.3),
    // backgroundColor: 'red',
  },
  text: {
    color: Colors.LIGHTORANGE,
    textAlign: 'center',
  },
});
