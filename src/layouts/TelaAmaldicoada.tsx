import React from "react";
import { View, Pressable, ScrollView, Text } from "react-native";
import { estilo } from "../styles/estilos";
import { styles } from "../styles/styles";
import { AmaldicoadaProps } from "../navigation/HomeNavigator";

const TelaAmaldicoada = (props: AmaldicoadaProps) => {

	return (

		<ScrollView style={[styles.tela]}>

			<Pressable style={(state) => [estilo.botao1, state.pressed &&  estilo.click]}
			onPress={() => {props.navigation.navigate('TelaMaldita', {valor: 1})}}>
				<Text style={[estilo.texto_botao1]}>Exemplo 1</Text>
			</Pressable>

			<Pressable style={(state) => [estilo.botao1, state.pressed &&  estilo.click]}
			onPress={() => {props.navigation.navigate('TelaMaldita', {valor: 2})}}>
				<Text style={[estilo.texto_botao1]}>Exemplo 2</Text>
			</Pressable>

			<Pressable style={(state) => [estilo.botao1, state.pressed &&  estilo.click]}
			onPress={() => {props.navigation.navigate('TelaMaldita', {valor: 3})}}>
				<Text style={[estilo.texto_botao1]}>Exemplo 3</Text>
			</Pressable>

			<Pressable style={(state) => [estilo.botao1, state.pressed &&  estilo.click]}
			onPress={() => {props.navigation.navigate('TelaMaldita', {valor: 4})}}>
				<Text style={[estilo.texto_botao1]}>Exemplo 4</Text>
			</Pressable>

			<Pressable style={(state) => [estilo.botao1, state.pressed &&  estilo.click]}
			onPress={() => {props.navigation.navigate('TelaMaldita', {valor: 5})}}>
				<Text style={[estilo.texto_botao1]}>Exemplo 5</Text>
			</Pressable>

			<Pressable style={(state) => [estilo.botao1, state.pressed &&  estilo.click]}
			onPress={() => {props.navigation.goBack()}}>
				<Text style={[estilo.texto_botao1]}>Voltar</Text>
			</Pressable>
		</ScrollView>
	);
}
{ [] }

//exportando o componente TelaPrincipal para ficar visivel	
export default TelaAmaldicoada;
