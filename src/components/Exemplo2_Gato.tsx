import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles';
import { estilo } from '../styles/estilos';

const getNomeCompleto = (
  primeiroNome: string, 
  nomeMeio: string, 
  ultimoNome: string) => {

  return primeiroNome + ' ' + nomeMeio + ' ' + ultimoNome;
};

const Gato = () => {
  return (
    <Text style={estilo.titulo30}>
      Olá, eu sou o gato
      {getNomeCompleto('Fulano', 'da Silva', 'Sauro')} !
    </Text>
  )
};

export default Gato;