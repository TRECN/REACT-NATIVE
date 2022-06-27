import { StyleSheet, Text, View ,useWindowDimensions,} from 'react-native'
import React,{useState} from 'react'

import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../screens/DiscoverScreen';
import NewsScreen from '../screens/NewsScreen';
import TabNavigation from './TabNavigation'


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
    

    // <View>
    //   <Text>InshortsTab</Text>
    // </View>
  )
}

export default InshortsTab

const styles = StyleSheet.create({})