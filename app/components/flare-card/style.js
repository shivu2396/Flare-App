import {StyleSheet} from 'react-native';
import {Size, Colors} from '@themes';

export default StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: Size.moderateScale(25),
    // marginEnd: Size.moderateScale(15),
    marginVertical: Size.moderateScale(8),
    height: Size.deviceHeight * 0.23,
    // backgroundColor: 'yellow',
  },

  innerbox: {
    borderRadius: Size.moderateScale(10),
    height: Size.deviceHeight * 0.12,
    width: Size.deviceWidth * 0.24,
    backgroundColor: 'green',
  },

  innertext: {
    fontSize: Size.moderateScale(16),
    color: Colors.LIGHTBLACK,
    fontFamily: 'SFProText-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Size.moderateScale(8),
  },
});
