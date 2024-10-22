import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { Produto } from "../types/Produto";
import { ProdutoProps } from "../navigation/HomeNavigator";
import { estilo } from "../styles/estilos";
import { styles } from "../styles/styles";
import CampoTexto from "../componentes/CampoTexto";

const TelaProduto = (props: ProdutoProps) => {
  const [nome, setNome] = useState('');
  const [codigoBar, setcodigoBar] = useState('');
  const [preco, setPreco] = useState('');

function pegarNome(nome: string){
    setNome(nome);
}

  function cadastrar() {
    if (verificaCampos()) {

      //crie um objeto do tipo Produto
      let produto = {
        nome: nome,
        codigoBar: codigoBar,
        preco: Number.parseFloat(preco)
      } as Produto;

      //adiciona o objeto produto na tabela produtos
      firestore()
        .collection('produtos')
        .add(produto)
        .then(() => {
          Alert.alert("Produto", "Cadastrado com sucesso!");
          props.navigation.goBack();
        })
        .catch((error) => console.log(error));

    }
  }

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

  return (
    <View style={styles.tela}>
      <Text style={estilo.titulo40}>CADASTRO DE PRODUTO</Text>

      <Text style={estilo.titulo30}>Nome</Text>
      <CampoTexto mudarTexto={pegarNome}/>

      <Text style={estilo.titulo30}>Código de Barras</Text>
      <TextInput
        maxLength={14}
        style={estilo.caixa_texto1}
        onChangeText={(text) => { setcodigoBar(text) }} />

      <Text style={estilo.titulo30}>Preço</Text>
      <TextInput
        maxLength={7}
        style={estilo.caixa_texto1}
        onChangeText={(text) => { setPreco((text)) }} />  

      <Pressable
        style={estilo.botao1}
        onPress={() => cadastrar()}>
        <Text style={estilo.texto_botao1}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

export default TelaProduto;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   caixa_texto: {
//     width: '70%',
//     color: 'black',
//     borderWidth: 1,
//     borderRadius: 4,
//     margin: 3
//   },
//   botao: {
//     justifyContent: 'center',
//     backgroundColor: 'green',
//     paddingVertical: 10,
//     paddingHorizontal: 30
//   },
//   desc_botao: {
//     fontSize: 20
//   },
//   text_area: {
//     borderWidth: 1,
//     borderColor: 'grey'
//   }
// });