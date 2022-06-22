import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const screen = Dimensions.get('window');
const ButtonWidth = screen.width / 4;



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
