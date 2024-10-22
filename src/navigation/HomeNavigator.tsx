import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";
import React from 'react';
import TelaCadastro from "../layouts/TelaCadastro";
import TelaAmaldicoada from "../layouts/TelaAmaldicoada";
import TelaInicial from "../layouts/TelaInicial";
import TelaMaldita from "../layouts/TelaMaldita";
import TelaPaciente from "../layouts/TelaPaciente.tsx";
import TelaCadProduto from "../layouts/TelaProduto.tsx";
import TelaProduto from "../layouts/TelaProduto.tsx";
import TelaConProduto from "../layouts/TelaConProduto.tsx";

//Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
    TelaPrincipal: undefined;
    TelaLogin: undefined;
    TelaCadastro: undefined;
    TelaAmaldicoada: undefined;
    TelaMaldita: {valor: number};
    TelaInicial: undefined;
    TelaPaciente: undefined;
    TelaProduto: undefined;
    TelaConProduto: undefined;
};

//Cria a Stack (tipo de navegação onde as telas estão em uma "pilha")
//Com o RootStackParamList definindo as telas da stack
const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaLogin" //nome da tela inicial (primeira tela quando entra no aplicativo)
            screenOptions={{ headerShown: false }} //headerShown define se o cabeçalho aparece ou não
        >
            {/* define uma tela dando um nome(igual ao RootStackParamList) e qual o componente será carregado */}
              
             <Stack.Screen name="TelaLogin" component={TelaLogin} />
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal}/>
            <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
            <Stack.Screen name="TelaAmaldicoada" component={TelaAmaldicoada} />
            <Stack.Screen name="TelaMaldita" component={TelaMaldita} />
            <Stack.Screen name="TelaInicial" component={TelaInicial} />
            <Stack.Screen name="TelaPaciente" component={TelaPaciente} />
            <Stack.Screen name="TelaProduto" component={TelaProduto} />
            <Stack.Screen name="TelaConProduto" component={TelaConProduto} />
        </Stack.Navigator>
    );
}

//cria as propriedades da Tela, que nesse caso é undefined
//essas propriedades são usadas lá em layouts/TelaPrincipal.tsx
type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;
type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;
type CadatroProps = NativeStackScreenProps<RootStackParamList, 'TelaCadastro'>;
type AmaldicoadaProps = NativeStackScreenProps<RootStackParamList, 'TelaAmaldicoada'>;
type MalditaProps = NativeStackScreenProps<RootStackParamList, 'TelaMaldita'>;
type InicialProps = NativeStackScreenProps<RootStackParamList, 'TelaInicial'>;
type PacienteProps = NativeStackScreenProps<RootStackParamList, 'TelaPaciente'>;
type ProdutoProps = NativeStackScreenProps<RootStackParamList, 'TelaProduto'>;
type ProdutoConProps = NativeStackScreenProps<RootStackParamList, 'TelaConProduto'>;

// exporta o navegador da pilha para ficar visivel para outros arquivos
export default HomeNavigator;

// // exporta as telas para ficar visiveis para outros arquivos
export type { PrincipalProps, CadatroProps,  AmaldicoadaProps, MalditaProps, PacienteProps, InicialProps, ProdutoProps, ProdutoConProps, LoginProps};