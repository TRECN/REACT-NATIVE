import {  Text, View ,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'

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
        horizontal
        renderItem={({item})=>(
            <TouchableOpacity>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )}
    />
    
  )
}

export default NavOptions