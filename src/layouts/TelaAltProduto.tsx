import React, { useState, useEffect } from "react";
import { ProdutoAltProps } from "../navigation/HomeNavigator";
import { Produto } from "../types/Produto";
import { Alert, FlatList, Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { estilo } from "../styles/estilos";
import firestore from "@react-native-firebase/firestore";


const TelaAltProduto = (props: ProdutoAltProps) => {

  const [nome, setNome] = useState('');
  const [codigoBar, setCodigoBar] = useState('');
  const [preco, setPreco] = useState('');

  //Carrrega os states com os dados do produto do banco de dados
  //Usando o id que recebeu como propriedade ao navegar para essa tela de alteração
  async function carregar() {
    const resultado = await firestore()
      .collection('produtos')
      .doc(id)
      .get();

    const produto = {
      id: resultado.id,
      ...resultado.data()
    } as Produto;

    setNome(produto.nome);
    setCodigoBar(produto.codigoBar);
    setPreco(produto.preco.toString());
  };
  
  //irá chamar a função de carregar
  useEffect(() => {
    carregar();
  }, []);

  function verificaCampos() {
    if (nome == '') {
      Alert.alert("Nome em branco",
        "Digite um nome")
      return false;
    }
    if (codigoBar == '') {
      Alert.alert("Código de Barras em branco",
        "Digite um código de barras")
      return false;
    }
    if (preco == '') {
      Alert.alert("Preço em branco",
        "Digite um preço")
      return false;
    }
    if (codigoBar == '') {
      Alert.alert("Código de Barras em branco",
        "Digite um código de barras")
      return false;
    }
    let precoNumero = Number.parseFloat(preco)
    if (precoNumero <= 0) {
      Alert.alert("Precço incorreto",
        "Digite um preço maior que zero"
      )
      return false;
    }

    return true;
  }

  function alterar(id: string) {
    if (verificaCampos()) {
      let produto = {
        nome: nome,
        codigoBar: codigoBar,
        preco: Number.parseFloat(preco)
      } as Produto;

      firestore()
        .collection('produtos')
        .doc(id)
        .update(produto)
        .then(() => {
          Alert.alert("Produto", "Alterado com sucesso!")
          props.navigation.goBack();
        })
        .catch((error) => console.log(error));
    }
  }
  return <></>
}

export default TelaAltProduto;