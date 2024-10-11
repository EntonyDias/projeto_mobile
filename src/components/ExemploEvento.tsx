import { Alert, Pressable, Text, View } from "react-native";
import { estilo } from "../styles/estilos";
import { styles } from "../styles/styles";

const ExemploEvento = () => {
   function exibirMensagem() {
      console.log('Console fez login na tua conta da steam, tome cuidado');

      Alert.alert('Titulo', 'Clica no botão não mano');
   }

   return (
      <View style={{ flex: 1, alignItems: 'center' }}>
         <Pressable
            style={({ pressed }) => [estilo.botao1, pressed && estilo.click]}
            onPress={() => {exibirMensagem()}}>
            <Text style={estilo.texto_botao1}>Não clique mano</Text>
         </Pressable>
      </View>
   )

}

export default ExemploEvento;