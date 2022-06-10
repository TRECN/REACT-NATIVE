import { StyleSheet, Text, View ,TouchableOpacity,Image,Svg} from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const Home = () => {
  return (
    <View>
      <Title/>
      <View style={styles.banner}>
        <Image source={require('../assets/imgQuiz.png')}/>
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