import React from 'react';
import { Pressable, StyleSheet, View, Text, ScrollView, Animated, Easing, Image } from 'react-native';
import { InicialProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import { estilo } from '../styles/estilos';
import App from '../componentes/Teste';
import ImageBackgroundComponent from "../images/enderLilie.jpg";

//componente chamado TelaPrincipal que recebe PrincipalProps como parametro
//e constroi uma view com o componente HelloWorld e Exemplo1 dentro

const TelaInicial = (props: InicialProps) => {

	const valorEscala = new Animated.Value(1);
	const animacao = () => {

	}

	function goTelaLogin() {
		props.navigation.navigate('TelaLogin')
	}

	return (
		<>
		<Image source={require('../images/enderLilie.jpg')}></Image>
		<ScrollView style={[styles.tela, { flexDirection: 'column-reverse' }]}>
			<View
				style={[]}>
				<Pressable style={(state) => [estilo.botaoInvi, state.pressed && { opacity: 0.3 }]}
					onPress={() => { goTelaLogin() }}>
					<App />
				</Pressable>

			</View>

		</ScrollView>
		
		</>
	);
}
{ [] }

//exportando o componente TelaPrincipal para ficar visivel	
export default TelaInicial;
