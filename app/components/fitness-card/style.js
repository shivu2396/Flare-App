import {StyleSheet} from 'react-native';
import {Size, Colors} from '@themes';

export default StyleSheet.create({
  fitnessbox: {
    // flex: 1,
    // marginVertical: Size.moderateScale(30),
    width: Size.deviceWidth * 0.9,
    // height: Size.deviceHeight * 0.9,
    // backgroundColor: 'red',
  },
  fitnesscontent: {
    marginStart: Size.moderateScale(26),
    marginVertical: Size.moderateScale(30),
    borderRadius: Size.moderateScale(10),
    height: Size.deviceHeight * 0.18,
    width: Size.deviceWidth * 0.38,
    backgroundColor: 'green',
  },
});
