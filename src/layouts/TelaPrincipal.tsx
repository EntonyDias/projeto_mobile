import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import Exemplo2 from '../components/Exemplo2_Gato';
import ExemploStylesView from '../components/ExemploStyleView';

//componente chamado TelaPrincipal que recebe PrincipalProps como parametro
//e constroi uma view com o componente HelloWorld e Exemplo1 dentro
const TelaPrincipal = (props: PrincipalProps) => {
    return (
        <View 
            style={styles.tela}>
            <HelloWorld/>
            <Exemplo1/>
            {/* <ExemploStylesView/> */}
        </View>
    );
}

//exportand o componente TelaPrincipa para ficar vi
export default TelaPrincipal;
