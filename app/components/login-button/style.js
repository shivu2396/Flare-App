import {StyleSheet} from 'react-native';
import {Size} from '../../themes/size';

export const styles = StyleSheet.create({
  footer: {
    // height: '15%',
    // backgroundColor: 'green',
  },
  button: {
    marginVertical: Size.moderateScale(50),
    marginHorizontal: Size.moderateScale(30),
    height: Size.moderateScale(45),
    // padding: Size.moderateScale(14),
    // backgroundColor: 'red',
  },
  buttontext: {
    marginVertical: Size.moderateScale(10),
    textAlign: 'center',
    fontSize: Size.moderateScale(18),
    color: 'white',
  },
});
