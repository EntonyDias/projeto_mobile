import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Pressable, Alert } from "react-native";
import CampoSenha from "../componentes/CampoSenha";
import CampoTexto from "../componentes/CampoTexto";
import { estilo } from "../styles/estilos";
import { styles } from "../styles/styles";
import { CadatroProps } from "../navigation/HomeNavigator";


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

   return (
      <ScrollView style={[styles.tela]}>
         <View style={[styles.centralizar, styles.tela, {marginTop: 88}]}>
            <Text style={[estilo.titulo30]}>Digite o Login</Text>
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
            <Pressable style={[estilo.botao1]}
            onPress={() => {if (senha == senhaConf){
               Alert.alert('Cadastro efetuado com sucesso!!','Email: '+ email +'\nSenha: ' + senha)
            } else {Alert.alert('Cadastro não foi possivel efetuar', 'Motivo: confirmação de senha incorreta')}
            }}
            >
               <Text style={[estilo.texto_botao1]}>Salvar</Text>
            </Pressable>

            <Pressable style={[estilo.botao1]}
               onPress={() => { props.navigation.goBack() }}>
               <Text style={[estilo.texto_botao1]}>Cancelar</Text>
            </Pressable>
         </View>
      </ScrollView>
   )
}

export default TelaCadastro;