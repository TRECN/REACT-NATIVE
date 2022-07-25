import {  Text, View ,FlatList,TouchableOpacity,Image ,StyleSheet} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';


const data=[
    {
        id:"1",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:'MapScreen'

    },
    {
        id:"2",
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen:'EatsScreen'

    },
];

const NavOptions = () => {
  return (
    <FlatList 
        data={data}
        keyExtractor={(item)=>item.id}
        horizontal
        renderItem={({item})=>(
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image
                    style={styles.img}
                        source={{
                            uri:item.image,
                        }}
                    />
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
      
  )
}

export default NavOptions
const styles = StyleSheet.create({
    img:{
        width:120,
        height:120,
        resizeMode:'contain'
    },
})