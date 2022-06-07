import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View ,Text} from "react-native";
const ApiFetch=()=>{
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState([]);

    const getMovie=async()=>{
        try{
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setData(json.movies);
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getMovie();
    },[])

    return (
        <View 
            style={{flex:1,padding:24}}
        >
            {isLoading?<ActivityIndicator/>:(<FlatList
                data={data}
                keyExtractor={({id},index)=>id}
                renderItem={({item})=>{
                    <Text>{item.title},{item.releaseYear}</Text>
                }}
            />)}
        </View>
    );
}

export default ApiFetch