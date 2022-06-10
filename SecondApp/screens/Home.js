import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const Home = () => {
  return (
    <View>
      <Title/>
      <View>
        <Image source={{uri:''}}
        style={styles.banner}/>
      </View>
      <TouchableOpacity>
            <Text> Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300
    }
})