import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles';

type CalculoProps = {
   valor1: number;
   valor2: number;
   valor3: number;
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

   if (props.valor2 != 0) {
   function dividir1 (){
      return props.valor1 / props.valor2;
   } return 0}

   if (props.valor1 != 0) {
      function dividir2 (){
         return props.valor2 / props.valor1;
      } return 0}

   function multiplicar (){
      return props.valor1 * props.valor2;
   }

   return (
      <>
      <Text style={styles.titulo2}>somar()</Text>
      </>
   );

};

export default ExemploCalculo;