import React from 'react';
import {Text} from 'react-native';
import { styles } from '../styles/styles';
import { estilo } from '../styles/estilos';

type NomeProps = {
    nome:string;
    sobrenome: string;
}

const NomePersonalizado = (props: NomeProps) => {
  return (
    <Text style={estilo.titulo30}>
        {props.nome + ' ' + props.sobrenome}
    </Text>
  )
};



export default NomePersonalizado;