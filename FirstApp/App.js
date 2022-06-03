// import React from "react";
// import {Text,View,Image,ScrollView,TextInput} from 'react-native'

// const App=()=>{
//   return(
//     // <View style={{
//     //   flex:1,
//     //   justifyContent:"center",
//     //   alignItems:"center"
//     //   }}>
//     //   <Text>
//     //     Hello Welcomme to the app
//     //   </Text>
//     // </View>

//     <ScrollView>
//       <Text>
//         Some text
//       </Text>
//       <View>
//         <Text>Some more Text</Text>
//         <Image 
//             source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',
//           }}
//           style={{width:200,height:200}}
//         />

//       </View>
//       <TextInput
//         style={{
//           height:40,
//           borderColor:'gray',
//           borderWidth:1
//         }}
//         />
//     </ScrollView>
//   )
// }

// export default App

import React from "react";
import { Text,View } from "react-native";
import Cat from './components/Cat'

const App =()=>{
  return (
    <View>
      <Cat name="Rishabh"/>
      <Cat name="Rishabh"/>
      <Cat name="Rishabh"/>

    </View>
  );
}

export default App