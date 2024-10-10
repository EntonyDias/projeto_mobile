import React from 'react';
import {FlatList, InteractionManager, StyleSheet, Text, View } from 'react-native';

type ListaSimplesProps = {
   listaPessoas: string[]
}

const ListaSimples = (props: ListaSimplesProps) => {  

   return(
      <FlatList
      data={props.listaPessoas}
      renderItem={({ item }) => {
         return (
            <Text style={styles.item}>
               Nome: {item}
            </Text>
         );
      }}
      />
   );
}

type ItemProps={
   nome: string
}

const ItemSimples = (props: ItemProps) => {
   return (
      <view>
         <Text style={styles.item2}>
            {props.nome}
         </Text>
      </view>
   );
}

export default ListaSimples;

const styles = StyleSheet.create({
   item: {
      padding: 18,
      fontSize: 15,
      color:'purple',
      borderColor:'green',
      borderWidth: 5,
      borderRadius: 8,
      margin: 8 
   },
   item2:{
      padding: 8,
      fontSize: 18,
      color:'purple',
      borderColor:'black',
      borderWidth: 3,
      borderRadius: 8,
      margin: 8 
   }
})