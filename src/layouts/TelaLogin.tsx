import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { estilo } from "../styles/estilos.ts";
import { margem } from "../styles/margins";
import { borda } from "../styles/bordas.ts";
import ExemploCalculo from "../components/ExemploCalculo.tsx";
import AlunoAprovado from "../components/Aprovado.tsx"

const TelaLogin = () => {

   //O retorno da função é o que será construído em tela
   return (
      <ScrollView style={[styles.tela]}>

         <View style={[styles.centralizar, margem.margem_bot88]}>
            <Text style={estilo.titulo40}>Tela Login</Text>
            <Image
               source={require('../images/lulu.png')}
               style={[styles.imagem_200, borda.borda_perfil]}
            />
         </View>

         <View style={[styles.centralizar, styles.tela, margem.margem_bot88]}>
            <Text style={[estilo.titulo30]}>

               Digite o Login</Text>

            <TextInput
               style={[estilo.caixa_texto1, styles.largura_70]}
               defaultValue=""
               secureTextEntry={true}/>

            <Text style={estilo.titulo30}>Digite a Senha</Text>
            <TextInput
               style={[estilo.caixa_texto1, styles.largura_70]}
               defaultValue=""
            />

            <Pressable style={(state) => [estilo.botao1, state.pressed ? {opacity: 0.5} : null ]}>
               <Text style={[estilo.texto_botao1]}>Entrar</Text>
            </Pressable>

         </View>

      {/*  <AlunoAprovado nome='entony' nota1={7} nota2={2}/>   */}
      {/*   <ExemploCalculo valor1={1} valor2={2} />            */}

         <View style={[styles.centralizar, styles.tela, styles.flexivel_central]}>
            <Pressable style={[estilo.botao1]}>
               <Text style={[estilo.texto_botao1]}>Cadastrar-se</Text>
            </Pressable>

            <Pressable style={[estilo.botao1]}>
               <Text style={[estilo.texto_botao1]}>Esqueceu sua senha</Text>
            </Pressable>
         </View>

      </ScrollView>
   );
};

export default TelaLogin;