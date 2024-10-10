import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles';
import { estilo } from '../styles/estilos';

type CalculoProps = {
   valor1: number;
   valor2: number;
}



const ExemploCalculo = (props: CalculoProps) => {
   
   function somar (){
      return props.valor1 + props.valor2;
   }
   
   function subtrair1 (){
      return props.valor1 - props.valor2;
   }

   function subtrair2 (){
      return props.valor2 - props.valor1;
   }

   
   function dividir1 (){
   if (props.valor2 != 0) {
      return props.valor1 / props.valor2;
   } return 0}

   
   function dividir2 (){
   if (props.valor1 != 0) {
      return props.valor2 / props.valor1;
   } return 0}

   function multiplicar (){
      return props.valor1 * props.valor2;
   }

   return (
      <>
      <Text style={estilo.titulo30}> Soma: {somar()}</Text>
      <Text style={estilo.titulo30}> Subtração 1: {subtrair1()}</Text>
      <Text style={estilo.titulo30}> Subtração 2: {subtrair2()}</Text>
      <Text style={estilo.titulo30}> Divisão 1: {dividir1()}</Text>
      <Text style={estilo.titulo30}> Divisão 2: {dividir2()}</Text>
      <Text style={estilo.titulo30}> Multiplicação: {multiplicar()}</Text>
      </>
   );

};

export default ExemploCalculo;