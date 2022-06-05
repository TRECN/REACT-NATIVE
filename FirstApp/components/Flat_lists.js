import React from "react";
import { FlatList,Text,View,StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:22
    },
    item:{
        padding:10,
        fontSize:18,
        height:44,
    }
})

const Flat_lists=()=>{
    return(
        <View style={styles.container}>
            <FlatList
                data={[
                    {key:'Rishabh'},
                    {key:'Rishabh1'},
                    {key:'Rishabh2'},
                    {key:'Rishabh3'},
                    {key:'Rishabh4'},
                    {key:'Rishabh5'},
                    {key:'Rishabh6'},
                    {key:'Rishabh7'},
                    {key:'Rishabh8'},
                    {key:'Rishabh9'},
                    {key:'Rishabh10'},
                    {key:'Rishabh11'},
                    {key:'Rishabh12'},
                    {key:'Rishabh13'},
                    {key:'Rishabh14'},
                    {key:'Rishabh15'},
                    
                ]}
                renderItem={({item})=><Text
             style={styles.item}>{item.key}</Text>}
            />

            
        </View>
    );
}

export default Flat_lists