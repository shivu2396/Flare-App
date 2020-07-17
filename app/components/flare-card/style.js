import {StyleSheet} from 'react-native';
import {Size, Colors} from '@themes';

export default StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: Size.moderateScale(20),
    // marginEnd: Size.moderateScale(15),
    marginVertical: Size.moderateScale(10),
    height: Size.deviceHeight * 0.22,
    // backgroundColor: 'yellow',
  },

  innerbox: {
    borderRadius: Size.moderateScale(5),
    height: Size.deviceHeight * 0.12,
    width: Size.deviceWidth * 0.26,
    backgroundColor: 'green',
  },

  innertext: {
    fontSize: Size.moderateScale(16),
    color: Colors.DARKBLACK,
    fontFamily: 'SFProText-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Size.moderateScale(5),
  },
});
