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
});
