import CampoTexto from "../componentes/CampoTexto.tsx";
import React, { useState } from "react";
import CampoSenha from "../componentes/CampoSenha.tsx";
import { Pressable, Text } from "react-native";
import { estilo } from "../styles/estilos.ts";

const ParteLogin = () => {
   
   const [texto, setTexto] = useState('');
   const [senha, setSenha] = useState ('');

   function pegarTexto (texto: string) {
      setTexto(texto)
   }
   function pegarSenha (senha: string) {
      setSenha(senha)
   }
   
   return (
      <>
         <CampoTexto mudarTexto={pegarTexto}/>
         <CampoSenha mudarSenha={pegarSenha}/>

         <Pressable style={(state) => [estilo.botao1, state.pressed ? { opacity: 0.5 } : null]}
            onPress={() => console.log(texto)}
            >
            <Text style={[estilo.texto_botao1]}>Entrar</Text>
         </Pressable>

      </>
   )
}

export default ParteLogin;