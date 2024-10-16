import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({

   titulo40: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#CC66CC'
   },
   titulo30: {
      fontSize: 30,
      fontWeight: 'heavy',
      color: '#CC66CC'
   },
   botao1: {
      justifyContent: 'center',
      backgroundColor: '#892EB4',
      paddingVertical: 8,
      paddingHorizontal: 8,
      marginTop: 18,
      marginBottom: 18,
      borderRadius: 22,
      borderTopEndRadius: 3,
      borderBottomStartRadius: 3,
      margin: 18,
      alignItems: 'center'
   },
   botao2: {
      justifyContent: 'center',
      backgroundColor: '#892EB4',
      paddingVertical: 8,
      paddingHorizontal: 8,
      marginTop: 18,
      marginBottom: 18,
      borderRadius: 22,
      borderTopEndRadius: 3,
      borderBottomStartRadius: 3,
      margin: 18,
      opacity: 0.8,
      alignItems: 'center'
   },
   botaoInvi: {
      justifyContent: 'center',
      backgroundColor: '#892EB4',
      paddingVertical: 8,
      paddingHorizontal: 8,
      marginTop: 18,
      marginBottom: 18,
      borderRadius: 22,
      borderTopEndRadius: 3,
      borderBottomStartRadius: 3,
      margin: 18,
      opacity: 0.8,
      alignItems: 'center'
   },

   texto_botao1: {
      fontSize: 25,
      color: 'black'
   },

   caixa_texto1: {
      color: 'white',
      fontSize: 20,
      borderWidth: 1,
      borderRadius: 4,
      margin: 3,
      borderColor: '#FFCCFF'
   },

   click: {
      opacity: 0.5
   },
});

export { estilo }