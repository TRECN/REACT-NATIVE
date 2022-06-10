import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.al}>
      <Text>Quizzer</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  al:{
    justifyContent:'center',
    alignItems:'center'
  }
})