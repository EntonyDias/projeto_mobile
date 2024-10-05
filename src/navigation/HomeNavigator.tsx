import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";

type RootStackParamList = {
    TelaPrincipal: undefined;
    
};

const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="TelaPrincipal" //nome da tela inicial
            screenOptions={{headerShown: false}} //headerShown define se o cabeçalho aparece ou não
            ><Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        </Stack.Navigator>
    );
}

//cria as propriedades da TelaPrincipal, que nesse caso é undefined
//essas propriedades são usadasd lá em layouts/TelaPrincipal.tsx
type PrincipalProps = NativeStackScreenProps<RootStackParamList, 
    'TelaPrincipal'>;    

export default HomeNavigator;
export type {
    PrincipalProps
};