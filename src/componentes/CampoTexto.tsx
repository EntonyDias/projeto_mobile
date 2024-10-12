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
         <TextInput
            style={[estilo.caixa_texto1, styles.largura_70]}
            defaultValue=""
            onChangeText={(text) => {
               props.mudarTexto(text);
            }}
         />
      </>
   )
}

export default CampoTexto;