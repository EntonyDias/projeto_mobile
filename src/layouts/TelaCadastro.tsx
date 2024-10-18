import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Pressable, Alert } from "react-native";
import CampoSenha from "../componentes/CampoSenha";
import CampoTexto from "../componentes/CampoTexto";
import { estilo } from "../styles/estilos";
import { styles } from "../styles/styles";
import { CadatroProps } from "../navigation/HomeNavigator";
import auth from "@react-native-firebase/auth";

const TelaCadastro = (props: CadatroProps) => {

   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [senhaConf, setSenhaConf] = useState('');

   function pegarEmail(email: string) {
      setEmail(email);
   };
   function pegarSenha(senha: string) {
      setSenha(senha);
   };
   function cadastrar() {
      if (verificarCampos()) {
         auth().createUserWithEmailAndPassword(email, senha).then(() => {
            Alert.alert("conta", "Cadastrado com sucesso"),
            props.navigation.goBack();
         })
            .catch((lugarOndeColocoOErro) => { tratamentoDeErros(String(lugarOndeColocoOErro)) });
      }
   }

   function tratamentoDeErros(erro: string) {
      console.log(erro);

      if (erro.includes("[auth/invalid-email]")) {
         Alert.alert("Email inválido", "Digite um email válido")
      } else if (erro.includes("[auth/weak-password]")) {
         Alert.alert("Senha Fraca", "Digite uma senha mais poderosa de no minimo 8 letras")
      } else if (erro.includes("[auth/email-already-in-use]")) {
         Alert.alert("Email em uso", "O email inserido já esta cadastrado")
      } else { Alert.alert("Erro", erro) }
   }

   function verificarCampos() {
      if (email == '') {
         Alert.alert('Email em branco', 'Digite um email')
         return false;
      }
      if (senha == '') {
         Alert.alert('Senha em branco', 'Digite uma senha de no minimo 8 digitos')
         return false;
      } else if (senha != senhaConf) {
         Alert.alert('As senhas não são iguais', 'Tente confirmar a senha novamente')
         return false;
      }
      return true
   }


   return (
      <ScrollView style={[styles.tela]}>
         <View style={[styles.centralizar, styles.tela, { marginTop: 88 }]}>
            <Text style={[estilo.titulo30]}>Digite o Email</Text>
            <CampoTexto mudarTexto={pegarEmail} />

            <Text style={estilo.titulo30}>Digite a Senha</Text>
            <CampoSenha mudarSenha={pegarSenha} />

            <Text style={estilo.titulo30}>Confirme a Senha</Text>
            <TextInput style={[estilo.caixa_texto1, styles.largura_70]}
               defaultValue=""
               secureTextEntry={true}
               onChangeText={(text) => {
                  setSenhaConf(text);
               }}
            />
         </View>
         <View style={[styles.centralizar, styles.tela, styles.flexivel_central]}>
            <Pressable style={(state) => [estilo.botao1, state.pressed && estilo.click]}
               onPress={() => {[cadastrar()]}
               }
            >
               <Text style={[estilo.texto_botao1]}>Cadastrar</Text>

            </Pressable>

            <Pressable style={(state) => [estilo.botao1, state.pressed && estilo.click]}
               onPress={() => { props.navigation.goBack() }}>
               <Text style={[estilo.texto_botao1]}>Cancelar</Text>
            </Pressable>
         </View>
      </ScrollView>
   )
}

export default TelaCadastro;