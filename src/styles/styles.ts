import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   tela: {
      backgroundColor: '#330033'
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
      gap: 8
   }

});

export { styles };