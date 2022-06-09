import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const Home = () => {
  return (
    <View>
      <Title/>
      <View>
        <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/preview/q-and-a-service-3678714-3098907.png?w=0&h=700'}}
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