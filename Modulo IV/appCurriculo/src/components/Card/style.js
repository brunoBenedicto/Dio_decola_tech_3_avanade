import {StyleSheet} from 'react-native'

const style =StyleSheet.create ({
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
    
})

export default style;