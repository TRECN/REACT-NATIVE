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

const ButtonComp = ({ title, size, theme,setCalc,setResult,calc,result}) => {
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


    const ops=['/','*','+','-','.','%']
  
    const updateCalc=(val)=>{
      if(ops.includes(val)&&calc==='')
      {
        return;
      }
      if(calc===''&&val=='0')
        return
      if(ops.includes(val)&&ops.includes(calc.slice(-1)))
      {
        setCalc(calc.slice(0,-1)+val)
        return
      }
      setCalc(calc+val)
      if(!ops.includes(val)){
        setResult(eval(calc+val).toString())
      }
    }

    const delLast=()=>{
      if(calc=='')
        return;

      const value= calc.slice(0,-1)
      setCalc(value)

      if(value==''){
          setResult('0')
          return
      }
      if(!ops.includes(value.charAt(value.length-1)))
        setResult(eval(value).toString())
      
      else
        setResult(eval(value.slice(0,-1)))
        
    }

    const equals=()=>{
      setCalc(result)
    }

    const AC=()=>{
      setCalc('')
      setResult('0')
    }

    const clickBtn=(title)=>{
      if(title=='DEL'){
        delLast()

      }
      else if(title=='=')
        equals()
      else if(title=='AC')
        AC()
      else
        updateCalc(title)
    }

    return (
      <TouchableOpacity onPress={()=>clickBtn(title)} style={BtnStyle}>
        <Text style={TxtStyle}>{title}</Text>
      </TouchableOpacity>
    );
};

export default ButtonComp;
