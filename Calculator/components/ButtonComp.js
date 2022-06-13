import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const screen = Dimensions.get('window');
const ButtonWidth = screen.width / 4;

const styles = StyleSheet.create({
  Btn: {
    backgroundColor: '#333333',
    borderRadius: Math.floor(ButtonWidth),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Math.floor(ButtonWidth - 10),
    margin: 5,
  },
  Txt: {
    color: '#fff',
    fontSize: 25,
  },
  TxtSecond: {
    color: '#060606',
  },
  BtnDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
  },
  BtnSecondary: {
    backgroundColor: '#a6a6a6',
  },
  BtnAccent: {
    backgroundColor: '#f09a36',
  },
  BtnEqual:{
    backgroundColor:'orange',
  },
  TxtEqual:{
    textAlign:'center',
    fontSize:50
  }
});

const ButtonComp = ({onPress, title, size, theme}) => {
  const BtnStyle = [styles.Btn];
  const TxtStyle = [styles.Txt];

    if (size == 'double')
      BtnStyle.push(styles.BtnDouble)

    if(theme=='secondary'){
      BtnStyle.push(styles.BtnSecondary);
      TxtStyle.push(styles.TxtSecond)
    }else if(theme=='accent'){
      BtnStyle.push(styles.BtnAccent)
    }else if(theme=='equal'){
      BtnStyle.push(styles.BtnEqual)
      TxtStyle.push(styles.TxtEqual)
    }



    return (
      <TouchableOpacity onPress={()=>onPress} style={BtnStyle}>
        <Text style={TxtStyle}>{title}</Text>
      </TouchableOpacity>
    );
};

export default ButtonComp;
