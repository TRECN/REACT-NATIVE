import {  Text, View ,FlatList,TouchableOpacity,Image ,StyleSheet} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements/dist/icons/Icon';


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
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-lg`}>
                <View>
                    <Image
                    style={styles.img}
                        source={{
                            uri:item.image,
                        }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name='arrowright'
                        type='antdesign'
                        color="white"
                    />
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