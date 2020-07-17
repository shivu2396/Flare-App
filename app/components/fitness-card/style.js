import {StyleSheet} from 'react-native';
import {Size, Colors} from '@themes';

export default StyleSheet.create({
  fitnessbox: {
    // flex: 1,
    width: Size.deviceWidth * 0.47,
    // height: Size.deviceHeight * 0.9,
    // backgroundColor: 'red',
  },
  fitnesscontent: {
    marginStart: Size.moderateScale(20),
    marginTop: Size.moderateScale(31),
    // marginVertical: Size.moderateScale(40),
    borderRadius: Size.moderateScale(5),
    height: Size.deviceHeight * 0.19,
    width: Size.deviceWidth * 0.41,
    backgroundColor: 'green',
  },
  content: {
    backgroundColor: 'red',
  },
  fitnestitle: {
    marginTop: Size.moderateScale(8),
    marginRight: Size.moderateScale(50),
    marginLeft: Size.moderateScale(15),
    fontFamily: 'SFProText-Regular',
    color: Colors.DARKGRAY,
    fontSize: Size.moderateScale(14),
    textAlign: 'center',
  },
  fitnesheading: {
    marginTop: Size.moderateScale(3),
    marginRight: Size.moderateScale(50),
    marginLeft: Size.moderateScale(15),
    fontSize: Size.moderateScale(16),
    fontFamily: 'SFProText-Medium',
    color: Colors.BLACK,
    textAlign: 'center',
  },
});
