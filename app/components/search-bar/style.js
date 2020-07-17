import {StyleSheet} from 'react-native';
import {Size, Colors} from '@themes';

export default StyleSheet.create({
  searchBar: {
    padding: Size.moderateScale(3),
    flexDirection: 'row',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: Size.moderateScale(73),
    borderRadius: Size.moderateScale(5),
  },
  searchBarInput: {
    width: Size.deviceWidth * 0.74,
    fontSize: Size.moderateScale(14),
  },
  searchBarIcon: {
    margin: Size.moderateScale(14),
  },
});
