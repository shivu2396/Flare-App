import {StyleSheet} from 'react-native';
import {Size} from '@themes';
import {Colors} from '@themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    height: '15%',
    // height: Size.deviceHeight * 0.2,
    // marginVertical: Size.moderateScale(44),
    // backgroundColor: 'red',
  },

  headingtext: {
    // backgroundColor: 'red',
    letterSpacing: Size.moderateScale(1.2),
    color: Colors.BLACK,
    marginVertical: Size.moderateScale(34),
    marginHorizontal: Size.moderateScale(13),
    fontSize: Size.moderateScale(32),
    fontFamily: 'SFProDisplay-Bold',
  },
  content: {
    height: Size.deviceHeight * 0.2,
    // marginVertical: Size.moderateScale(30),
    // backgroundColor: 'pink',
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },

  passwordtext: {
    marginBottom: Size.moderateScale(50),
    color: Colors.GRAY,
    fontSize: Size.moderateScale(14),
    fontFamily: 'SFProText-Regular',
    textAlign: 'center',
    // marginHorizontal: 60,
  },
  passwordblock: {
    // marginBottom: 30,
    // backgroundColor: 'yellow',
  },
  // passwordtext: {
  //   // marginBottom: 30,
  //   color: Colors.GRAY,
  //   textAlign: 'center',
  //   fontSize: Size.moderateScale(14),
  //   fontFamily: 'SFProText-Regular',
  // },
});
