import { Alert } from "react-native";
import Exemplo1 from "../components/Exemplo1";
import { AmaldicoadaProps, MalditaProps } from "../navigation/HomeNavigator";
import ExemploCalculo from "../components/ExemploCalculo";
import Exemplo2_Gato from "../components/Exemplo2_Gato";
import ExemploEvento from "../components/ExemploEvento";
import ExemploState from "../components/ExemploState";
import ExemploStylesText from "../components/ExemploStyleText";
import { useState } from "react";

const TelaMaldita = (props: MalditaProps) => {

const [valor] = useState (props.route.params.valor);

   return (
      <>
   {
   valor == 1 ?
   <Exemplo1/>
   :(valor == 2 ?
   <Exemplo2_Gato/>
   :(valor == 3 ?
   <ExemploEvento/>
   :(valor == 4 ?
   <ExemploState/>
   :(valor == 5 &&
   <ExemploStylesText/>
   ))))
   }
   </>
   )
}

export default TelaMaldita; 