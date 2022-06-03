import React, {useState, useEffect} from 'react';
import{View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
const App =()=>{
  const [toggle, setToggle] =useState(false);   
  
  const handleChegeToggle = () => setToggle(oldToggle => !oldToggle);
  
  useEffect(()=>{
    Torch.switchState(toggle);
    console.log('trocou toggle: '+ toggle);
  },[toggle]);

  useEffect(()=>{
    const subscriptionn = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });
    return () => subscriptionn.remove();
  },[]);

  return <View style ={toggle ? style.containerLigth : style.container }>
            <TouchableOpacity onPress={handleChegeToggle}>
             <Image
                 style= {toggle ? style.lightingOn :  style.lightingOff}
                 source={toggle ?require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')}
             />
             <Image
                 style= {style.dioLogo}
                 source={toggle ?require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')}
             />
           </TouchableOpacity>
        </View>
};
export default App;

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerLigth:{
    flex:1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  lightingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },

  
});