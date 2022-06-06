import React from "react";
import { SectionList, StyleSheet } from "react-native";

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
        padding:'10',
        fontSize:10,
        height:44,
    }
})

const Section_List=()=>{
    return(
        <View>
            <SectionList
                sections={[
                    {title:'D',data:['rishabh1','rishabh2','rishabh3']},
                    {title:'A',data:['raj1','raj2','raj3','raj4','raj5','raj6']},

                ]}
                renderItem={({item})=><Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({sections})=><Text style={styles.sectionHeader}>{sections.title}</Text>}
                keyExtractor={(item,index)=>index}
            />
        </View>
    );
}

export default Section_List