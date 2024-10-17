import React from 'react';
import { Pressable, StyleSheet, View, Text, ScrollView, Animated, Easing } from 'react-native';
import { InicialProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import Exemplo2 from '../components/Exemplo2_Gato';
import ExemploStylesView from '../components/ExemploStyleView';
import { estilo } from '../styles/estilos';
import TelaLogin from "../layouts/TelaLogin";
import ExemploState from '../components/ExemploState';
import App from '../componentes/Teste';

//componente chamado TelaPrincipal que recebe PrincipalProps como parametro
//e constroi uma view com o componente HelloWorld e Exemplo1 dentro

const TelaInicial = (props: InicialProps) => {

	const valorEscala = new Animated.Value(0);

	function goTelaLogin(){
      props.navigation.navigate('TelaLogin')
   }

	return (
		<ScrollView style={[styles.tela, {flexDirection: 'column-reverse'}]}>
		<View 
		style={[]}>
			<Pressable style={(state) => [estilo.botao2, state.pressed && {opacity: 0.3}]}
			onPress={() => {goTelaLogin()}}>
				<Text style={[estilo.texto_botao1]}>Logar</Text>
			</Pressable>

			<App/>

		</View>
		
		</ScrollView>
	);
}
{ [] }

//exportando o componente TelaPrincipal para ficar visivel	
export default TelaInicial;
