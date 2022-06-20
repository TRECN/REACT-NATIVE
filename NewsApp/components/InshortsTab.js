import { StyleSheet, Text, View ,useWindowDimensions,} from 'react-native'
import React,{useState} from 'react'

import { SceneMap, TabView } from 'react-native-tab-view';

const FirstRoute=()=>(
    <View style={{flex:1, backgroundColor:'#ff4081'}} />
)

const secondRoute=()=>(
    <View style={{flex:1, backgroundColor:'#673ab7'}} />
)

const renderScene = SceneMap({
    first:FirstRoute,
    second:secondRoute,
});

const InshortsTab = () => {
  const layout = useWindowDimensions();

  const [index,setIndex] = useState(0);
  const [routes]=useState([
      {key:'first',title:'First'},
      {key:'second',title:'Second'},
  ]);
  
  return (
    <TabView
        navigationState={{index,routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width:layout.width}}
    />

    // <View>
    //   <Text>InshortsTab</Text>
    // </View>
  )
}

export default InshortsTab

const styles = StyleSheet.create({})