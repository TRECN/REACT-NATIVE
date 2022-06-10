import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const Home = () => {
  return (
    <View>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image source={require('../assets/imgQuiz.png')}
        style={styles.banner}
        resizeMode='contain'
        />
      </View>
      <TouchableOpacity>
            <Text> Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    bannerContainer:{
      justifyContent:'center',
      alignItems:'center'
    },
    banner:{
        height:300,
        width:300,
    }
})