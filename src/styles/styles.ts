import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   tela: {
      flex: 1,
      backgroundColor: '#E2B8FA'
   },
   titulo1: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#B300FF'
   },
   titulo2: {
      fontSize: 30,
      fontWeight: 'heavy',
      color: '#B300FF'
   },
   botao: {
      justifyContent: 'center',
      backgroundColor: 'green',
      paddingVertical: 10,
      paddingHorizontal: 30,
      marginTop: 20,
      borderRadius: 10
   },

   largura_70: {
      width: '70%'
   },

   imagem_200: {
      width: 200,
      height: 200
   },
   
   centralizar: {
      alignItems: 'center'
   },

   flexivel_central: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 38
   }

});

export { styles };