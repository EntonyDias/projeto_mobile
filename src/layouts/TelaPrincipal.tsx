import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import Exemplo2 from '../components/Exemplo2_Gato';
import ExemploStylesView from '../components/ExemploStyleView';
import { estilo } from '../styles/estilos';
import TelaLogin from "../layouts/TelaLogin";

//componente chamado TelaPrincipal que recebe PrincipalProps como parametro
//e constroi uma view com o componente HelloWorld e Exemplo1 dentro
const TelaPrincipal = (props: PrincipalProps) => {

	function goTelaLogin(){
      props.navigation.navigate('TelaLogin')
   }

	return (
		<View
			style={styles.tela}>
			{/*<HelloWorld />			 */}
			{/*<Exemplo1 />			 */}
			{/* <ExemploStylesView/> */}
			<Pressable style={[estilo.botao1]}
			onPress={() => {goTelaLogin()}}>
				<Text style={[estilo.texto_botao1]}>Fazer Login</Text>
			</Pressable>
		</View>
	);
}
{ [] }

//exportando o componente TelaPrincipal para ficar visivel	
export default TelaPrincipal;
