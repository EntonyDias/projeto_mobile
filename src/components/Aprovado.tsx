import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles';
import { estilo } from '../styles/estilos';

type AprovadoProps = {
   nome: string;
   nota1: number;
   nota2: number;
}


const AlunoAprovado = (props: AprovadoProps) => {

   function aprovadoAluno () {

      let media = (props.nota1 + props.nota2) / 2;

      if (media >= 7){
         return "esta aprovado";
      } else return "esta reprovado, evolua como ser humano"
   }

   return (
      <>
      <Text style={estilo.titulo30}>
         Aluno: {props.nome} {aprovadoAluno()}
      </Text>
      </>
   )

}

export default AlunoAprovado;