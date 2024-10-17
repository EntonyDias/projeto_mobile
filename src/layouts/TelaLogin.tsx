import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { estilo } from "../styles/estilos.ts";
import { margem } from "../styles/margins";
import { borda } from "../styles/bordas.ts";
import React from "react";
import ParteLogin from "../componentes/ParteLogin.tsx";
import { LoginProps } from "../navigation/HomeNavigator.tsx";

const TelaLogin = (props: LoginProps) => {

   function goTelaCadastro(){
      props.navigation.navigate('TelaCadastro')}

   //O retorno da função é o que será construído em tela
   return (
      <ScrollView style={[styles.tela]}>

         <View style={[styles.centralizar, margem.margem_bot88]}>
            <Text style={estilo.titulo40}>Tela Login</Text>
            <Image
               source={require('../images/lulu.png')}
               style={[styles.imagem_200, borda.borda_perfil]}
            />
         </View>

         <View style={[styles.centralizar, styles.tela]}>
            <ParteLogin navigation={props.navigation} route={props.route}/>
         </View>

         <View style={[styles.centralizar, styles.tela, styles.flexivel_central]}>
            <Pressable style={(state) => [estilo.botao1, state.pressed &&  estilo.click]}
            onPress={()=> {goTelaCadastro()}}>
               <Text style={[estilo.texto_botao1]}>Cadastrar-se</Text>
            </Pressable>

            <Pressable style={(state) => [estilo.botao1, state.pressed &&  estilo.click]}
               onPress={() => {}}
            >
               <Text style={[estilo.texto_botao1]}>Esqueceu sua senha</Text>
            </Pressable>
   
         </View>

         <View>
         <Pressable style={(state) => [estilo.botao1, state.pressed &&  estilo.click]}
			onPress={() => {props.navigation.goBack()}}>
				<Text style={[estilo.texto_botao1]}>Voltar</Text>
			</Pressable>
         </View>

      </ScrollView>
   );
};

export default TelaLogin;