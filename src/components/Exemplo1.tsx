import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Pressable } from 'react-native';
import { styles } from '../styles/styles';

const Exemplo1 = () => {
  //variável
  let url = 'https://reactnative.dev/docs/assets/p_cat2.png';

  //O retorno da função é o que será construído em tela
  return (
    //Painel que desliza (com scroll)
    <ScrollView>
      {/*texto ou label*/}
      <Text style={styles.titulo1}>Exemplo 1 com style</Text>

      {/*painel*/}
      <View>
        <Text>Text comum sem estilização</Text>

        {/*imagem, o campo source é o caminho da imagem*/}
        <Image
          source={{uri: url}}
          style={styles.imagem_200}
        />
      </View>

      {/*caixa de texto*/}
      <TextInput
        style={[styles.caixa_texto, styles.largura_70]}
        defaultValue="Digite aqui"
      />

      {/*Pressable é um botão*/}
      <Pressable>
        <text style={styles.titulo2}>Isso é um botão</text>
      </Pressable>

    </ScrollView>
  );
};

export default Exemplo1;

