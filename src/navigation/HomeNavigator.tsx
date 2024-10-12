import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";
import React from 'react';
import TelaCadastro from "../layouts/TelaCadastro";
import TelaAmaldicoada from "../layouts/TelaAmaldicoada";

//Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
    TelaPrincipal: undefined;
    TelaLogin: undefined;
    TelaCadastro: undefined;
    TelaAmaldicoada: undefined;
};

//Cria a Stack (tipo de navegação onde as telas estão em uma "pilha")
//Com o RootStackParamList definindo as telas da stack
const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaPrincipal" //nome da tela inicial (primeira tela quando entra no aplicativo)
            screenOptions={{ headerShown: false }} //headerShown define se o cabeçalho aparece ou não
        >
            {/* define uma tela dando um nome(igual ao RootStackParamList) e qual o componente será carregado */}
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
            <Stack.Screen name="TelaLogin" component={TelaLogin} />
            <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
            <Stack.Screen name="TelaAmaldicoada" component={TelaAmaldicoada} />
        </Stack.Navigator>
    );
}

//cria as propriedades da Tela, que nesse caso é undefined
//essas propriedades são usadas lá em layouts/TelaPrincipal.tsx
type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;
type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;
type CadatroProps = NativeStackScreenProps<RootStackParamList, 'TelaCadastro'>;
type AmaldicoadaProps = NativeStackScreenProps<RootStackParamList, 'TelaAmaldicoada'>;

// exporta o navegador da pilha para ficar visivel para outros arquivos
export default HomeNavigator;

// exporta as telas para ficar visiveis para outros arquivos
export type { PrincipalProps, LoginProps, CadatroProps,  AmaldicoadaProps};