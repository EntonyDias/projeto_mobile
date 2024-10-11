import React, { useState } from "react"
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { estilo } from "../styles/estilos";
import { styles } from "../styles/styles";

const ExemploState = () => {

   //Funciona para guardar o texto do campo
   const [nome, setNome] = useState ('bom dia');
   const[sobrenome, setSobrenome] = useState('');

   //Não funciona para guardar o texto do campo
   let fraseVariavel = '' as String;

   function exibirMensagem() {
      Alert.alert(
         'Personagem' +
         'Nome:' + nome + '\nSobrenome: ' + sobrenome
      )
   }

   return (
      <View style={{flex: 1, alignItems: 'center'}}>
         <Text style={estilo.titulo40}>
            Frase
         </Text>
         <TextInput
         style={[estilo.caixa_texto1, {width: 88}]}
         onChangeText={(text) => {
            //Guarda no state
            setNome(text);
         }} />

         <Pressable style={(state) => [estilo.botao1, state.pressed && estilo.click]}
            onPress={() => {exibirMensagem()}} >
            <Text style={estilo.texto_botao1}>Adentrar</Text>
         </Pressable>

      </View>
   )
}

export default ExemploState;