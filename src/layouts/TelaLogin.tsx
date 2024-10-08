import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";

const TelaLogin = () => {
    //variável
    let imagem = 'https://i.pinimg.com/236x/25/f2/90/25f290e34bf84f62e7e4966530ec97b4.jpg';
    
    //O retorno da função é o que será construído em tela
    return (
      <ScrollView style={styles.centralizar}>
        <Text style={styles.titulo1}>Tela Login</Text>
  
        <View>
          <Text>Texto comum sem estilização</Text>
  
          <Image
            source={require('../images/goth.png')}
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

        <Pressable>
          <Text style={styles.titulo2}>Cadastrar</Text>
        </Pressable>

      </ScrollView>
    );
  };

  export default TelaLogin;