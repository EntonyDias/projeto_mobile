import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({

   titulo40: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#B300FF'
   },
   titulo30: {
      fontSize: 30,
      fontWeight: 'heavy',
      color: '#B300FF'
   },
   botao1: {
      justifyContent: 'center',
      backgroundColor: '#892EB4',
      paddingVertical: 8,
      paddingHorizontal: 8,
      marginTop: 18,
      borderRadius: 22,
      borderTopEndRadius: 3,
      borderBottomStartRadius: 3
   },
   texto_botao1: {
      fontSize: 25,
      color: 'black'
   },

   caixa_texto1: {
      color: 'black',
      fontSize: 20,
      borderWidth: 1,
      borderRadius: 4,
      margin: 3
   },

});

export { estilo }