import React, { useState, useEffect } from "react";
import { ProdutoConProps } from "../navigation/HomeNavigator";
import { Produto } from "../types/Produto";
import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { estilo } from "../styles/estilos";
import firestore from "@react-native-firebase/firestore";

const TelaConProduto = (props: ProdutoConProps) => {

   const [produtos, setProdutos] = useState([] as Produto[]);

   //Buscar os dados quando abrir a tela
   useEffect(() => {
      const subscribe = firestore()
         .collection('produtos')
         .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => {

               return {
                  id: doc.id,
                  ...doc.data()
               }
            }) as Produto[];
            setProdutos(data);
         })
      return () => subscribe();
   }, []);

   return (
      <View>
         <View style={styles.tela}>
            <Text style={estilo.titulo40}>Listagem de Produtos</Text>
            <FlatList
               data={produtos}
               renderItem={(info) =>
                  <ItemProduto
                     numeroOrdem={info.index + 1}
                     prod={info.item} />
               } />
         </View >

         <View style={styles.centralizar}>
               <Pressable style={[estilo.botao1]}
               onPress={() => {props.navigation.goBack()}}>
                  <Text style={estilo.botao1}>Voltar</Text>
               </Pressable>
         </View>
      </View>
   )
}

type ItemProdutoProps = {
   numeroOrdem: number;
   prod: Produto;
}

const ItemProduto = (props: ItemProdutoProps) => {
   return (
      <View style={styles.tela}>
         <View style={[styles_local.dados_card]}>
            <Text style={[estilo.titulo30]}> {props.numeroOrdem + ' - ' + props.prod.nome}</Text>
            <Text style={[estilo.titulo20]}> ID: {props.prod.id}</Text>
            <Text style={[estilo.titulo20]}> Código de Barras: {props.prod.codigoBar}</Text>
            <Text style={[estilo.titulo20]}>Preço: R${props.prod.preco.toFixed(2)}</Text>
         </View>
      </View>
   );
}

export default TelaConProduto;

