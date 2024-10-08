import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#FFFACD'
    },
    titulo1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'purple'
    },
    titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#663399'
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    texto_botao: {
        fontSize: 20,
        color: 'white'
    },
    
    caixa_texto: {
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },

    largura_70: {
        width: '70%'
    },

    imagem_200: {
        width: 200,
        height: 200
    },
    centralizar:{
        
    }
});

export {styles};