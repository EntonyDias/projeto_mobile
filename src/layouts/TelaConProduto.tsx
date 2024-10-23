import React, { useState, useEffect } from "react";
import { ProdutoConProps } from "../navigation/HomeNavigator";
import { Produto } from "../types/Produto";
import { Alert, FlatList, Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { estilo } from "../styles/estilos";
import firestore from "@react-native-firebase/firestore";

const TelaConProduto = (props: ProdutoConProps) => {

   function goTelaAltProduto() {
      props.navigation.navigate('TelaAltProduto')
  }

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

   function deletarProduto(id: string){
      firestore()
      .collection('produtos')
      .doc(id)
      .delete()
      .then (() => {
         Alert.alert("Produto", "Removido com sucesso!");
      }) .catch((error) => console.log(error));
   }

   return (
      <View>
         <View style={styles.tela}>
            <Text style={estilo.titulo40}>Listagem de Produtos</Text>
            <FlatList
               data={produtos}
               renderItem={(info) =>
                  <ItemProduto
                     numeroOrdem={info.index + 1}
                     prod={info.item}
                     onDeletar={deletarProduto}
                     onAlterar={goTelaAltProduto}/>
               } />
         </View >

         <View style={[styles.centralizar, styles.tela, styles.flexivel_central]}>
            <Pressable style={[estilo.botao1]}
               onPress={() => {props.navigation.navigate('TelaProduto')}}>
                  <Text style={estilo.texto_botao1}>Adicionar um novo Produto</Text>
               </Pressable>
         </View>
         <View style={[styles.centralizar, styles.tela, styles.flexivel_central]}>
               <Pressable style={[estilo.botao1]}
               onPress={() => {props.navigation.goBack()}}>
                  <Text style={estilo.texto_botao1}>Voltar</Text>
               </Pressable>
         </View>
      </View>
   )
}

type ItemProdutoProps = {
   numeroOrdem: number;
   prod: Produto;
   onAlterar: Function;
   onDeletar: (id: string) => void;
}

const ItemProduto = (props: ItemProdutoProps) => {
   
   return (
      <View style={styles.tela}>
         <View style={[estilo.botao2]}>
            <Text style={[estilo.titulo30]}> {props.numeroOrdem + ' - ' + props.prod.nome}</Text>
            <Text style={[estilo.titulo20]}> ID: {props.prod.id}</Text>
            <Text style={[estilo.titulo20]}> Código de Barras: {props.prod.codigoBar}</Text>
            <Text style={[estilo.titulo20]}>Preço: R${props.prod.preco.toFixed(2)}</Text>
            <View style={[estilo.card1, styles.flexivel_central, {backgroundColor: 'purple'}]}>
            <Pressable style={[estilo.botao1]}
            onPress={() => props.onDeletar(props.prod.id)}>
               <Text style={estilo.texto_botao1}> 
                  Deletar
               </Text>
            </Pressable>
            <Pressable style={[estilo.botao1, {margin: 3}]}
            onPress={() => props.onAlterar()}>
               <Text style={estilo.texto_botao1}> 
                  Alterar
               </Text>
            </Pressable>
         </View>
         </View>
         
      </View>
   );
}

export default TelaConProduto;

