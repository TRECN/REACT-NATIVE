import { StyleSheet, Text, View ,useWindowDimensions,} from 'react-native'
import React,{useState} from 'react'

import { SceneMap, TabView } from 'react-native-tab-view';

const DiscoverScreen=()=>(
    <View style={{flex:1, backgroundColor:'#ff4081'}} />
)

const NewsScreen=()=>(
    <View style={{flex:1, backgroundColor:'#673ab7'}} />
)

const renderScene = SceneMap({
    first:DiscoverScreen,
    second:NewsScreen,
});

const InshortsTab = () => {
  const layout = useWindowDimensions();

  const [index,setIndex] = useState(0);
  const [routes]=useState([
      {key:'first',title:'Discover'},
      {key:'second',title:'News'},
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