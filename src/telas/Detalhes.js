import React, {useState, useEffect} from "react";

import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import COLORS from "../const/Colors";
import apiLivraria from "../services/apiLivraria";
import capaLivro150 from "../assets/books/lor150.png"

export const Detalhes = ({route, navigation}) => {

    const {cod_livro} = route.params;

    const [livro, setLivro] = useState({
        cod_livro: '',
        titulo:'',
        descricao:'',
        imagem:''
    });

    useEffect(
        ()=>{
            apiLivraria.get(`/listarLivros/${cod_livro}`)
            .then(
                (livro)=>{
                    setLivro(livro.data[0])
                    //console.log(livro.data[0].descricao)
                }
            )
            setLivro
        }
    );

    const excluir = () => {

        try {
            apiLivraria.delete(`excluirLivro/${livro.cod_livro}`); 
            navigation.navigate('Listagem');
        } catch (error) {
        }
    }

    return (

        <ScrollView style={styles.scroll}>

            <View style={styles.container}>


                <View style={styles.post}>
                    <Image style={styles.imagem} source={capaLivro150}/>
                    <Text style={styles.titulo}>{livro.titulo}</Text>
                    <Text style={styles.descricao}>{livro.descricao}</Text>
                </View>

                <View style={styles.botoes}>
                    <TouchableOpacity
                        style={[styles.botao, {backgroundColor: COLORS.gray}]}
                        onPress={()=>{navigation.navigate('Editar', {cod_livro:livro.cod_livro})}}>
                        <Text
                        style={styles.textoBotao}>
                            EDITAR
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.botao, {backgroundColor: COLORS.red}]}
                        onPress={()=>{excluir()}}>
                        <Text
                        style={styles.textoBotao}>
                            EXCLUIR
                        </Text>
                    </TouchableOpacity>
                    
                </View>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    scroll: {
        backgroundColor: COLORS.white,
    },
    container: {
        alignItems: 'center',
        backgroundColor: COLORS.white,
        height: '100%',
        justifyContent: 'center'
    },
    post: {
        width: '90%',
        alignItems: 'center',
        backgroundColor: COLORS.back,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 5,
        borderWidth: 5,
        borderColor: COLORS.black,
        borderRadius: 15
    },
    imagem: {
        borderRadius: 5,
        marginVertical: 16,
        marginLeft: 16,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.black
    },
    descricao: {
        width: '100%',
        fontSize: 16,
        textAlign: 'justify'
    },
    botoes : {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        //backgroundColor: COLORS.blue,
        alignItems: 'center'
    },
    botao: {
        width: '40%',
        marginHorizontal: 10,
    },
    textoBotao: {
        padding: 10,
        textAlign: 'center',
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
});