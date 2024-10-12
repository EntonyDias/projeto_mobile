import { Text, TextInput } from "react-native"
import { estilo } from "../styles/estilos"
import { styles } from "../styles/styles"
import { useState } from "react"
import React from "react"

type SenhaProps = {
   mudarSenha: (texto: string) => void
}


const CampoSenha = (props: SenhaProps) => {

   return (
      <>
         <TextInput
            style={[estilo.caixa_texto1, styles.largura_70]}
            defaultValue=""
            secureTextEntry={true}
            onChangeText={(text) => {
               props.mudarSenha(text);
            }}
         />
      </>)

}

export default CampoSenha;