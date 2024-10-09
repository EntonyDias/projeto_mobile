import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";

type RootStackParamList = {
    TelaPrincipal: undefined;
    TelaLogin:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="TelaLogin" //nome da tela inicial
            screenOptions={{headerShown: true}} //headerShown define se o cabeçalho aparece ou não
            ><Stack.Screen name="TelaLogin" component={TelaLogin} />
            
        </Stack.Navigator>
    );
}

//cria as propriedades da Tela, que nesse caso é undefined
//essas propriedades são usadas lá em layouts/TelaPrincipal.tsx
type PrincipalProps = NativeStackScreenProps<RootStackParamList, 
    'TelaLogin'>;    

export default HomeNavigator;
export type {
    PrincipalProps
};