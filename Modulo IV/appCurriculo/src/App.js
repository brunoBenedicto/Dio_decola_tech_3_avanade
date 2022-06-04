import React from "react";
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity}  from 'react-native';
import foto from './assets/foto.jpg';
import Icon from 'react-native-vector-icons/Feather'



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
            <Text style={style.funcao}> função</Text>
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
            
          <View style={style.cardConteiner}>
            <View style={style.card}>
              <View style={style.cardHeader}>
                  <Text style={style.textHeader}> Experiencia Profisional</Text>
              </View>
              <View style={style.cardContent}>
                  <Text style={style.cardContentText}> Em busca </Text>
              </View>
            </View>

            <View style={style.card}>
              <View style={style.cardHeader}>
                  <Text style={style.textHeader}> Formação Academica</Text>
              </View>
              <View style={style.cardContent}>
                  <Text style={style.cardContentText}> Engenharia agrícola e ambiental - UFRPE</Text>
                  <Text style={style.cardContentText}> Licenciatura em Computação - UFRPE </Text>
                  <Text style={style.cardContentText}> Tec. Jogos Digitais - UNINABUCO </Text>
              </View>
            </View>
          
          </View>

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
  card:{
    width: '80%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor:'white',
  },
  cardConteiner:{
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 20,
  },
  cardHeader:{
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader:{
    fontWeight:'bold',
    fontSize: 20
  },
  
  cardContent:{
    marginTop:0,
  },
  cardContentText:{
    color: '#939393',
    marginBottom: 10,
  }

});

export default App;