import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const App = ()=>{
  const [count,setCount] = useState(0);
  const [data,setData] = useState(100);
  // useEffect(()=>{
  //   console.warn("do some animation ");
    
  // },[count])
  // useEffect(()=>{
  //   console.warn("call some api here ");
    
  // },[data])
  return(
    <View>
      <Text style={{textAlign:'center',backgroundColor:'#98fb98',fontSize:23}}>Use Effect hook as for life Cycle Methods</Text>
      <Text style={{textAlign:'center',backgroundColor:'#9acd32',fontSize:20}}>{data} useEffect as ComponentdidUpdate {count}</Text>
      <Button title='update Counter' onPress={()=>setCount(count+1)}></Button>
      <Button title='update Data' onPress={()=>setData(data+1)}></Button>
      <User info={{data,count}}/>
    </View>
  )
}
const User = (props)=>{
  useEffect(()=>{
    console.warn(props.info.data);
    console.warn("Run this props when data props is updated");
    
  },[props.info.data])
  useEffect(()=>{
    console.warn(props.info.count);
    console.warn("Run this props when count props is updated");
    
  },[props.info.count])
  return(
    <View>
      <Text style={{color:'orange',backgroundColor:'purple',fontSize:23,textAlign:'center'}}>
        Data : {props.info.data}</Text>
        <Text style={{color:'red',backgroundColor:'cyan',fontSize:23,textAlign:'center'}}>
        Count : {props.info.count}</Text>
    </View>
  )
}

export default App;


