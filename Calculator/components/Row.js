import { StyleSheet, View } from 'react-native'
import React from 'react'

export default ({children}) => (
    <View 
        style={styles.row}
    >
      {children}
    </View>
  
)



const styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    }

})