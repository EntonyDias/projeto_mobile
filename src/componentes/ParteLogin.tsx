import CampoTexto from "../componentes/CampoTexto.tsx";
import React, { useState } from "react";
import CampoSenha from "../componentes/CampoSenha.tsx";
import { Alert, Pressable, Text } from "react-native";
import { estilo } from "../styles/estilos.ts";
import Props, { LoginProps, PrincipalProps } from "../navigation/HomeNavigator.tsx";
import auth from "@react-native-firebase/auth";
import TelaLogin from "../layouts/TelaLogin.tsx";

   const [texto, setTexto] = useState('');
   const [senha, setSenha] = useState('');

const ParteLogin = (props: LoginProps) => {

   

   function pegarTexto(texto: string) {
      setTexto(texto)
   }
   function pegarSenha(senha: string) {
      setSenha(senha)
   }

   function logar() {
      if (verificarCampos()) {
         auth()
         .signInWithEmailAndPassword(texto, senha).then(() => {
            props.navigation.navigate('TelaPrincipal');
         })
            .catch((lugarOndeColocoOErro) => { tratamentoDeErros(String(lugarOndeColocoOErro)) });
      }
   }

   function verificarCampos () {
      if (texto == '') {
         Alert.alert('Login em branco', 'Digite o login')
         return false;
      }
      if (senha == '') {
         Alert.alert('Senha em branco', 'Digite a senha corretamente')
         return false;
      }
   }

   function tratamentoDeErros(erro: string) {
      console.log(erro);

      if (erro.includes("[auth/invalid-email]")) {
         Alert.alert("Email inválido", "Digite um email válido")
      }
      else if (erro.includes("[ INVALID_LOGIN_CREDENTIALS ]")) {
         Alert.alert("Login ou senha incorretos", "")
      }
      else if (erro.includes("[auth/invalid-credential]")) {
         Alert.alert("Login ou senha incorretos", "")
      }
      else { Alert.alert("Erro", erro) }
   }

   return (
      <>
         <Text style={[estilo.titulo30]}>Digite o Login</Text>
         <CampoTexto mudarTexto={pegarTexto} />

         <Text style={estilo.titulo30}>Digite a Senha</Text>
         <CampoSenha mudarSenha={pegarSenha} />

         <Pressable style={(state) => [estilo.botao1, state.pressed ? { opacity: 0.5 } : null]}
            onPress={() => logar()
            }
         >
            <Text style={[estilo.texto_botao1]}>Entrar</Text>
         </Pressable>

      </>
   )
}

export default ParteLogin;
export function oi(){
   Alert.alert("oi","OIE")
}
export function redefinirSenha() {
   if (texto == '') {
      Alert.alert("Email em branco", "Preencha o email")
      return
   }
auth().sendPasswordResetEmail(texto).then(()=>
Alert.alert("Redefinir senha", "Enviamos um email para você redefinir sua senha"))
.catch((error) => console.log(error))
}