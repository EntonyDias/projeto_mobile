import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { estilo } from "../styles/estilos.ts";
import { margem } from "../styles/margins";
import { borda } from "../styles/bordas.ts";
import ExemploCalculo from "../components/ExemploCalculo.tsx";
import AlunoAprovado from "../components/Aprovado.tsx"
import ListaSimples from "../components/ListaSimples.tsx"
import { Animal } from "../types/Animal.ts";
import ListaAnimais from "../components/ListaAnimais.tsx";
import ListaProdutos from "../components/ListaProdutos.tsx";
import { Produto } from "../types/Produto.ts";

const TelaLogin = () => {

   {/*let listaPessoas = ['entony', 'pedro'] as string[];
   let animal1 = {nome: 'lily', especie: 'neko'} as Animal; 
   let animal2 = {nome: 'purple', especie: 'imp'} as Animal;
   let listaAnimais = [animal1, animal2] as Animal[];*/}
   let produto1 = {nome: 'lily', codigo:88888888, preco: 88.88}
   let produto2 = {nome: 'purple', codigo:333, preco: 33.33}

   let listaProdutos = [produto1, produto2] as Produto[];

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

      <View 
      style={styles.tela}>
   
      <ListaProdutos listaProdutos={listaProdutos}/>
      {/*<ListaAnimais listaAnimais={listaAnimais}/>            */}
      {/*   <ListaSimples listaPessoas={listaPessoas}/>         */}
         
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