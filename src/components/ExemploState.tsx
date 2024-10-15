import React, { useState } from "react"
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { estilo } from "../styles/estilos";
import { styles } from "../styles/styles";

const ExemploState = () => {

   //Funciona para guardar o texto do campo
   const [nome, setNome] = useState ('bom dia');
   const[sobrenome, setSobrenome] = useState('');

   //Não funciona para guardar o texto do campo
   // let fraseVariavel = '' as String;

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

         {
            //Se o texto tiver mais de 8 caracteres, irá contruir o Text
            nome.length >= 8 && 
            <Text style={estilo.titulo30}> Isso é verdade </Text>
         }
         {
            //Se o texto tiver mais de 8 caracteres, irá contruir o Text
            //Senão, irá construir a outra condição
            nome.length >= 8 ?
            <Text style={estilo.titulo30}> Isso é verdade </Text>
            :
            <Text style={estilo.titulo30}> Isso é falso </Text>
         }
          {
            //Se o texto tiver mais de 8 caracteres, irá contruir o Text
            //Senão, irá construir a outra condição
            //Corrente de If e Else, mó top 
            nome.length >= 8 ?
            <Text style={estilo.titulo30}> Isso é verdade </Text>
            :( nome.length <= 8 ?
            <Text style={estilo.titulo30}> Isso é falso </Text>
            :<Text style={estilo.titulo30}> Isso esta vazio </Text>
            )
         
         }

      </View>
   )
}

export default ExemploState;