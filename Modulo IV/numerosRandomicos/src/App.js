import React, {useState} from "react";
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';


const App =() =>{

    const[numero, setNumero] =useState(0);

    function handleNumero(){
        const novo_numero = Math.floor(Math.random() * 10)
        setNumero(novo_numero)
    }
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>{numero}</Text>
            <TouchableOpacity style ={style.botao} onPress={handleNumero}>
                <Text style={style.TextGera}>Gerar Numero</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container:{
        backgroundColor: '#FF0000',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero:{
        fontSize: 200,
        color: 'white',
        fontWeight: 'bold',
    },
    botao:{
        backgroundColor:'white',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    TextGera:{
        fontWeight: 'bold',
        color: 'black'
    }
})


export default App;
