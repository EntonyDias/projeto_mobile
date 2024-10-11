import React, { useState } from "react"
import { Text, TextInput } from "react-native"
import { estilo } from "../styles/estilos"
import { styles } from "../styles/styles"

type TextoProps = {
   mudarTexto: (texto: string) => void
}

const CampoTexto = (props: TextoProps) => {

   return (
      <>
         <Text style={[estilo.titulo30]}>
            Digite o Login</Text>
         <TextInput
            style={[estilo.caixa_texto1, styles.largura_70]}
            defaultValue=""
            onChangeText={(text) => {
               props.mudartexto(text);
            }}
         />
      </>
   )
}

export default CampoTexto;