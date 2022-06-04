import React from "react";
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity}  from 'react-native';
import foto from './assets/foto.jpg';
import Icon from 'react-native-vector-icons/Feather'
import Card from './components/Card';


const App =() =>{

  function handleRedeSocial(redeSocial){
    switch(redeSocial){
      case 'linkedin':
        Alert.alert('linkedin')
      break
      case 'instagram':
        Alert.alert('instagram')
      break
      case 'github':
        Alert.alert('github')
      break

    }
  }

  return (
   
      <View style={style.page}>
          <View style={style.containerCabecalho}>
            <Image source={foto} style={style.foto}/>
            <Text style={style.nome}> Bruno Benedicto</Text>
            <Text style={style.funcao}> Estudante de ciencias da computação e agrárias</Text>
            <View style ={style.redesSociais}>
              <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
                <Icon name ="github" size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> handleRedeSocial('instagram')}>
                  <Icon name ="instagram" size={30}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
                    <Icon name ="linkedin" size={30}/>
                </TouchableOpacity>
              
            </View>
          </View>
        <Card titulo= "formação academica">
          <Text style= {style.cardContentText}> Engenharia agricola e ambiental - UFRPE </Text>
          <Text style= {style.cardContentText}> Licenciatura em computação - UFRPE </Text>
          <Text style= {style.cardContentText}> Tec. jodos digitais - INUNABUCO </Text>
        </Card>
        <Card titulo= "Expereiancia profissional">
          <Text style= {style.cardContentText}> EM BUSCA DE MUDANÇA DE CARREIRA</Text>

        </Card>
      </View>
  
  );
};

const style = StyleSheet.create({
 
  page:{
    backgroundColor: '#E7E7E7',
    flex: 1,
    justifyContent: 'center'
  },
  containerCabecalho:{
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  foto:{
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome:{
    fontSize:32,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao:{
    color: '#939393',
    marginBottom: 10
  },
  redesSociais:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  },
  cardContentText:{
    color: '#939393',
    marginBottom: 10,
    fontWeight: 'bold'
  }
});

export default App;