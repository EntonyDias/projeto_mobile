import CampoTexto from "../componentes/CampoTexto.tsx";
import React, { useState } from "react";
import CampoSenha from "../componentes/CampoSenha.tsx";
import { Alert, Pressable, Text } from "react-native";
import { estilo } from "../styles/estilos.ts";
import Props, { LoginProps, PrincipalProps } from "../navigation/HomeNavigator.tsx";


const ParteLogin = (props: LoginProps) => {
   
   const [texto, setTexto] = useState('');
   const [senha, setSenha] = useState('');

   function pegarTexto(texto: string) {
      setTexto(texto)
   }
   function pegarSenha(senha: string) {
      setSenha(senha)
   }
   function mensagem(){
      Alert.alert('Infos','Login: ' + texto + '\nSenha: ' + senha)
      props.navigation.navigate('TelaPrincipal')
   }
   return (
      <>
      <Text style={[estilo.titulo30]}>Digite o Login</Text>
         <CampoTexto mudarTexto={pegarTexto} />
      <Text style={estilo.titulo30}>Digite a Senha</Text>
         <CampoSenha mudarSenha={pegarSenha} />

         <Pressable style={(state) => [estilo.botao1, state.pressed ? { opacity: 0.5 } : null]}
            onPress={() => mensagem()
            }
         >
            <Text style={[estilo.texto_botao1]}>Entrar</Text>
         </Pressable>

      </>
   )
}

export default ParteLogin;