import React from 'react';
import { Produto } from '../types/Produto.tsx';
import { FlatList, Text, View } from 'react-native';
import { styles } from "../styles/styles";
import { estilo } from "../styles/estilos.ts";


type ListaProdutosProps = {
   listaProdutos: Produto[]
}

const ListaProdutos = (props: ListaProdutosProps) => {

   return(
      <>
      <FlatList
         data = {props.listaProdutos}
         renderItem={(info) =>{
            return(
               <View style={estilo.botao1}>
               <Text>
                  {'Nome: ' + info.item.nome}
               </Text>
               <Text>
                  {'Codigo: ' + info.item.codigo}
               </Text>
               <Text>
                  {'Preço: ' + info.item.preco.toFixed(2)}
               </Text>
               </View>
            )
         } 

         }
      />
      </>
   )
   
}

export default ListaProdutos;
