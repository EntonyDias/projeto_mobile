import React, { useState } from "react";
import { View, Pressable, ScrollView, Text, TextInput, StyleSheet, FlatList, Alert } from "react-native";
import CampoTexto from "../componentes/CampoTexto";
import { estilo } from "../styles/estilos";
import { styles } from "../styles/styles";
import { PacienteProps } from "../navigation/HomeNavigator";

const TelaPaciente = (props: PacienteProps) => {

type Paciente = {
   nome: string;
   idade: number;
   descricao: string;
   caso: number;
}

   const [nomePac, setNomePac] = useState('');
   const [idade, setIdade] = useState('');
   const [descricao, setDescricao] = useState('');
   const [lista, setLista] = useState([] as Paciente[]);
   const [caso, setCaso] = useState('');
   
   function verificarCampos() {
      if (nomePac == '') {
         Alert.alert('Nome em branco', 'Digite o nome do paciente')
         return false;
      }
      if (idade == '') {
         Alert.alert('Idade em branco', 'Digite a idade do paciente')
         return false;
      }
      if (descricao == '') {
         Alert.alert('Descricao vazia', 'Escreva sobre a efermidade do paciente')
         return false;
      }
      if (caso == '') {
         Alert.alert('Risco vazio', 'Digite o numero de risco')
         return false;
      } else if (caso < '1' || caso > '5') {
         Alert.alert('Risco Inválido', 'Digite um código válido de 1 a 5')
         return false;
      }
      
      return true
   }
   
   function pegarNomePac(nomePac: string) {
      setNomePac(nomePac);
   };
   function pegarIdade(idade: string) {
      setIdade(idade);
   };
   function pegarDescricao(descricao: string) {
      setDescricao(descricao);
   };
   function pegarCaso(caso: string) {
      setCaso(caso);
   };
   

   function criarPaciente(){
      if(verificarCampos()){
      let novoPaciente = {nome: nomePac, idade: parseInt(idade), descricao: descricao, caso: parseInt(caso)} as Paciente; 
      setLista((antigaLista) => [...antigaLista, novoPaciente]);
   }
   }

   return (
      <>
         <View style={[styles.centralizar, styles.tela, { paddingTop: 18 }]}>
            <Text style={[estilo.titulo30]}>Nome:</Text>
            <CampoTexto mudarTexto={pegarNomePac} />

            <Text style={[estilo.titulo30]}>Idade:</Text>
            <CampoTexto mudarTexto={pegarIdade} />

            <Text style={[estilo.titulo30]}>Enfermidade:</Text>
            <CampoTexto mudarTexto={pegarDescricao} />

            <Text style={[estilo.titulo30]}>Risco de 1 a 5:</Text>
            <CampoTexto mudarTexto={pegarCaso} />

            <Pressable style={(state) => [estilo.botao1, state.pressed && estilo.click]}
               onPress={() => {{criarPaciente()}}}>
               <Text style={[estilo.texto_botao1]}>
                  Adicionar
               </Text>
            </Pressable>
         </View>

      <ScrollView style={[styles.tela]}>
         <View style={[styles.centralizar, styles.tela, styles.flexivel_central]}>
         
        <FlatList data = {lista} renderItem={(info) => {
         return (<>
         {
            info.item.caso == 1 ?
            <View style={estilu.ficha1}>
               <Text style={{fontSize: 25, color:'black'}}>Leve</Text>
            <Text style={{color:'black'}}>
               {('\nNome: '+info.item.nome + '\nIdade: '+info.item.idade+'\nEnfermidade: '+info.item.descricao)}
            </Text>
            </View>
            :
            info.item.caso == 2 ?
            <View style={estilu.ficha2}>
               <Text style={{fontSize: 25, color:'black'}}>Menos Grave</Text>
            <Text style={{color:'black'}}>
               {('\nNome: '+info.item.nome + '\nIdade: '+info.item.idade+'\nEnfermidade: '+info.item.descricao)}
            </Text>
            </View>
            :
            info.item.caso == 3 ?
            <View style={estilu.ficha3}>
               <Text style={{fontSize: 25, color:'black'}}>Urgência</Text>
            <Text style={{color:'black'}}>
               {('\nNome: '+info.item.nome + '\nIdade: '+info.item.idade+'\nEnfermidade: '+info.item.descricao)}
            </Text>
            </View>
            :
            info.item.caso == 4 ?
            <View style={estilu.ficha4}>
               <Text style={{fontSize: 25, color:'black'}}>Muita URGÊNCIA</Text>
            <Text style={{color:'black'}}>
               {('\nNome: '+info.item.nome + '\nIdade: '+info.item.idade+'\nEnfermidade: '+info.item.descricao)}
            </Text>
            </View>
            :
            info.item.caso == 5 &&
            <View style={estilu.ficha5}>
               <Text style={{fontSize: 25, color:'black'}}>EMERGÊNCIA</Text>
            <Text style={{color:'black'}}>
               {('\nNome: '+info.item.nome + '\nIdade: '+info.item.idade+'\nEnfermidade: '+info.item.descricao)}
            </Text>
            </View>
         }
         </>)
        }}/>

         </View>
      </ScrollView>
      </>
   )
}

export default TelaPaciente

const estilu = StyleSheet.create({
ficha1: {
   color: 'black',
   justifyContent: 'center',
   backgroundColor: 'blue',
   paddingVertical: 8,
   paddingHorizontal: 8,
   marginTop: 8,
   marginBottom: 8,
   borderRadius: 22,
   borderTopEndRadius: 3,
   borderBottomStartRadius: 3,
   margin: 18,
},ficha2: {
   color: 'black',
   justifyContent: 'center',
   backgroundColor: 'green',
   paddingVertical: 8,
   paddingHorizontal: 8,
   marginTop: 8,
   marginBottom: 8,
   borderRadius: 22,
   borderTopEndRadius: 3,
   borderBottomStartRadius: 3,
   margin: 18
},ficha3: {
   color: 'black',
   justifyContent: 'center',
   backgroundColor: 'yellow',
   paddingVertical: 8,
   paddingHorizontal: 8,
   marginTop: 8,
   marginBottom: 8,
   borderRadius: 22,
   borderTopEndRadius: 3,
   borderBottomStartRadius: 3,
   margin: 18
},ficha4: {
   color: 'black',
   justifyContent: 'center',
   backgroundColor: 'orange',
   paddingVertical: 8,
   paddingHorizontal: 8,
   marginTop: 8,
   marginBottom: 8,
   borderRadius: 22,
   borderTopEndRadius: 3,
   borderBottomStartRadius: 3,
   margin: 18
},ficha5: {
   color: 'black',
   justifyContent: 'center',
   backgroundColor: 'red',
   paddingVertical: 8,
   paddingHorizontal: 8,
   marginTop: 8,
   marginBottom: 8,
   borderRadius: 22,
   borderTopEndRadius: 3,
   borderBottomStartRadius: 3,
   margin: 18
}
})