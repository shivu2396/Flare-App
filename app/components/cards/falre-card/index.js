// import * as React from 'react';
// import {View, Text, TextInput, FlatList} from 'react-native';
// import {styles} from './style';

// export const Flarecard = ({title, option}) => {
//   return (
//     <View>
//       <View style={styles.heading}>
//         <Text style={styles.headingtext}>{title}</Text>
//       </View>
//       <FlatList
//         scrollEnabled={false}
//         data={option}
//         renderItem={({item}) => (
//           <View style={styles.content}>
//             <TextInput
//               style={styles.contenttitle}
//               placeholder="What's your email?"
//               placeholderTextColor="#9B9B9B"
//             />
//             <TextInput
//               style={styles.contenttitle1}
//               placeholder="And yourpassword?"
//               placeholderTextColor="#9B9B9B"
//             />
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };
