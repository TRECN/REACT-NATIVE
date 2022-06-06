import React from "react";
import { View,Text,SectionList, StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20
    },
    sectionHeader:{
        padding:5,
        fontSize:10,
        fontWeight:'bold',
        backgroundColor:'green'
    },
    item:{
        padding:10,
        fontSize:10,
        height:44
    },
})

const Section_Lists=()=>{
    return(
        <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}

export default Section_Lists