import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const colorGithub = '#010409'
const App = () => {
    return (
        <SafeAreaView  style={style.container}>
            <StatusBar backgroundColor ={colorGithub} barStyle = "ligth-content" />
            <View>
                <Text style={style.text}>hello world</Text>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1
    },
    text:{
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
    }
});