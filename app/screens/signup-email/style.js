import {StyleSheet} from 'react-native';
import {Size} from '@themes';
import {Colors} from '@themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    height: '17%',
    // backgroundColor: 'red',
  },
  headingtext: {
    letterSpacing: Size.moderateScale(1.2),
    color: Colors.BLACK,
    marginVertical: Size.moderateScale(30),
    marginHorizontal: Size.moderateScale(18),
    fontSize: Size.moderateScale(30),
    fontFamily: 'SFProDisplay-Bold',
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
});
