import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { margem } from "../styles/margins";
import { borda } from "../styles/bordas.ts";

const TelaLogin = () => {
   //variável
   let imagem = 'https://i.pinimg.com/236x/25/f2/90/25f290e34bf84f62e7e4966530ec97b4.jpg';

   //O retorno da função é o que será construído em tela
   return (
      <ScrollView style={[styles.tela]}>

         <View style={[styles.centralizar, margem.margem_bot88]}>
            <Text style={styles.titulo1}>Tela Login</Text>
            <Image
               source={require('../images/goth.png')}
               style={[styles.imagem_200, borda.borda_perfil]}
            />
         </View>

         <View style={[styles.centralizar, styles.tela, margem.margem_bot88]}>
            <Text style={[styles.titulo2]}>

               Digite o Login</Text>

            <TextInput
               style={[styles.caixa_texto, styles.largura_70]}
               defaultValue=""
               secureTextEntry={true}/>

            <Text style={styles.titulo2}>Digite a Senha</Text>
            <TextInput
               style={[styles.caixa_texto, styles.largura_70]}
               defaultValue=""
            />

            <Pressable style={(state) => [styles.botao2, state.pressed ? {opacity: 0.5} : null ]}>
               <Text style={[styles.texto_botao]}>Entrar</Text>
            </Pressable>

         </View>

         <View style={[styles.centralizar, styles.tela, styles.flexivel_central]}>
            <Pressable style={[styles.botao2]}>
               <Text style={[styles.texto_botao]}>Cadastrar-se</Text>
            </Pressable>

            <Pressable style={[styles.botao2]}>
               <Text style={[styles.texto_botao]}>Esqueceu sua senha</Text>
            </Pressable>
         </View>

      </ScrollView>
   );
};

export default TelaLogin;