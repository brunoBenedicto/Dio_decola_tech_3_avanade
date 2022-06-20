import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';
import { useState } from 'react';

const colorGithub = 'black';
const colorFontGithub = '#C9D1D9';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/28581183?v=4';
const urlToMyGithub = 'https://github.com/brunoBenedicto';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
          console.log('Link aprovado');
          console.log('Abrindo link....');
          await Linking.openURL(urlToMyGithub);
        }
      };

    const [ligaDesliga, setLigaDesliga] = useState(false);
    
    function ligarDesligar(){
        return setLigaDesliga(!ligaDesliga);
    }

    return (
        <SafeAreaView  style={style.container}>
            <StatusBar backgroundColor ={colorGithub} barStyle = "ligth-content" />
            
            <View style={style.content}>
                <Image 
                    style ={style.avatar} 
                    source={{uri:imageProfileGithub}}
                    accessibilityLabel = "bruno de oculos escuros olhando pra esqueda"
                    />
                
                <Text 
                    style ={[style.defaultText, style.name ]}
                    accessibilityLabel = "Nome: Bruno Benedicto">
                        Bruno Benedicto
                </Text>
                
                <Text 
                    style ={[style.defaultText, style.descricao ]}
                    accessibilityLabel = "Descrição: Estudante de Licenciatura em Computação pela UFRPE. Técnico em Programação de Jogos pela Universidade Joaquim Nabuco.">
                        Estudante de Licenciatura em Computação pela UFRPE. Técnico em Programação de Jogos pela Universidade Joaquim Nabuco.
                </Text>
            </View>
            
            <View style ={style.viewDesafio}>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                
                
            </View>
            
            <View style ={style.viewDesafio}>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View><View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                
                
            </View>

            <View style ={style.viewDesafio}>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                
                
            </View>

            <View style ={style.viewDesafio}>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                
                
            </View>

            <View style ={style.viewDesafio}>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View><View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.letraDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                
                
            </View>
            
            <View style ={style.viewDesafio}>
            <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View><View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                <View style={style.quadradoDesafio}>
                    <Text></Text>
                </View>
                
                
            </View>

            
        <View style={style.content}>
           <Pressable onPress={handlePressGoToGithub}>
                <View style ={style.button}>
                    <Text style = {style.defaultText}> Open in Github</Text>
                </View>
           </Pressable>
        </View>    
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center'
    },
    content:{
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center'
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth:2,
    },
    defaultText:{
        color: 'white',
    },
    name:{
        fontWeight: 'bold',
        fontSize: 24,
        color: colorFontGithub,
    },
    descricao:{
        fontSize: 14,
        fontWeight: 'bold',
        color: colorFontGithub,
    },
    button:{
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: "blue",
        borderRadius: 10,
        padding: 20,
        height: 60,
        width: 250,
    },
    viewDesafio:{
        alignItems: 'center',
        flexDirection: 'row',
        padding: 2,
        justifyContent: 'center',
    },
    quadradoDesafio: {
        backgroundColor: '#754e07',
        width: 20,
        borderRadius: 10,
        paddingHorizontal: 10 
    },
    letraDesafio:{
        backgroundColor: '#f5a30c',
        width: 20,
        borderRadius: 10,
        paddingHorizontal: 10 
    }

});