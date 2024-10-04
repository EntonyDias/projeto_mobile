import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaPrincipal from "../layouts/TelaLogin";

type RootStackParamList = {
    TelaPrincipal: undefined;
    
};

const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="TelaPrincipal" //nome da tela inicial
            screenOptions={{headerShown: false}} //headerShown define se o cabeçalho apareec ou não
            ><Stack.Screen name="TelaPrincipal" component={TelaLogin} />
        </Stack.Navigator>
    );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList, 
    'TelaPrincipal'>;    

export default HomeNavigator;
export type {
    PrincipalProps
};