import {StyleSheet} from 'react-native';
import {Size} from '@themes';
import {Colors} from '@themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // heading: {
  //   // height: '15%',
  //   backgroundColor: 'green',
  // },
  headingtext: {
    letterSpacing: Size.moderateScale(1.2),
    color: Colors.BLACK,
    marginVertical: Size.moderateScale(5),
    marginHorizontal: Size.moderateScale(18),
    fontSize: Size.moderateScale(33),
    fontFamily: 'SFProDisplay-Bold',
  },
  // content: {
  //   // backgroundColor: 'yellow',
  // },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
});
