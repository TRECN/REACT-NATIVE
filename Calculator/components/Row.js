import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Row = ({component}) => {
  return (
    <View 
        style={styles.row}
    >
      {component}
    </View>
  )
}

export default Row

const styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    }

})