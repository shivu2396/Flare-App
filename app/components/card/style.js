import {StyleSheet} from 'react-native';
import {Size} from '../../themes/size';
import {Colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  headingtext: {
    letterSpacing: Size.moderateScale(1.2),
    color: Colors.BLACK,
    marginVertical: Size.moderateScale(15),
    marginHorizontal: Size.moderateScale(15),
    fontSize: Size.moderateScale(32),
    fontFamily: 'SFProDisplay-Bold',
  },
  content: {
    // height: '10%',
    // backgroundColor: 'red',
    // marginVertical: Size.moderateScale(45),
  },
  contenttitle: {
    marginVertical: Size.moderateScale(15),
    height: Size.moderateScale(50),
    fontSize: Size.moderateScale(16),
    fontFamily: 'SFProText-Regular',
    marginHorizontal: Size.moderateScale(20),
    borderBottomWidth: Size.moderateScale(0.3),
    borderColor: Colors.LIGHTGRAY,
  },
});
