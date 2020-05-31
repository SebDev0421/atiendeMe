import {StyleSheet} from 'react-native'

const Style = StyleSheet.create({
    buttonPrimary: {
        alignItems: "center",
        backgroundColor: "#2BAEF7",
        borderRadius: 13,
        paddingBottom: 12,
        paddingTop: 12,
        paddingLeft: 33,
        paddingRight: 33 
    },
    buttonSecondary:{
        alignItems: "center",
        borderColor: "#2BAEF7",
        borderWidth: 1,
        borderRadius: 13,
        paddingBottom: 12,
        paddingTop: 12,
        paddingLeft: 33,
        paddingRight: 33 
    },
    TextHeadline: {
        fontSize: 24,
        textAlign: 'center',
        color:'black'
    },
    TextBig:{
        fontSize: 40,
        textAlign: 'center',
        color:'black'
    },
    TextTitle: {
        fontSize: 20,
    },
    TextButton:{
        fontSize: 14,
        color: 'white'
    },
    TextMenu:{
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        borderColor: 'black',
        borderBottomWidth: 1,
        padding: '3.5%'
    },
    TextError:{
        fontSize: 14,
        color:'red',
        textAlign:'center'
    }
})
export default Style 