import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";

const Exemplo8 = () => {
    //variável
    let url = 'https://reactnative.dev/docs/assets/p_cat2.png';
    //O retorno da função é o que será construído em tela
    return (
      <ScrollView>
        <Text style={styles.titulo1}>Exemplo Roxo</Text>
  
        <View>
          <Text>Texto comum sem estilização</Text>
  
          <Image
            source={{uri: url}}
            style={styles.imagem_200}
          />
        </View>
        <Text style={styles.titulo2}>Digite o Login</Text>
        <TextInput
          style={[styles.caixa_texto, styles.largura_70]}
          defaultValue="Digite aqui o Login"
        />
        <Text style={styles.titulo2}>Digite a Senha</Text>
        <TextInput
          style={[styles.caixa_texto, styles.largura_70]}
          defaultValue="Digite aqui a Senha"
        />
      </ScrollView>
    );
  };

  export default Exemplo8;