import React from "react";
import { View, Pressable, ScrollView, Text } from "react-native";
import { estilo } from "../styles/estilos";
import { styles } from "../styles/styles";
import { AmaldicoadaProps } from "../navigation/HomeNavigator";

const TelaAmaldicoada = (props: AmaldicoadaProps) => {

	return (
		<ScrollView
			style={styles.tela}>
			<Pressable style={[estilo.botao1]}
			onPress={() => {props.navigation.goBack()}}>
				<Text style={[estilo.texto_botao1]}>Fazer Login</Text>
			</Pressable>
		</ScrollView>
	);
}
{ [] }

//exportando o componente TelaPrincipal para ficar visivel	
export default TelaAmaldicoada;
