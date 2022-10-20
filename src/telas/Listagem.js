import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import COLORS from '../const/Colors';
import apiLivraria from '../services/apiLivraria';

import img150 from '../assets/books/lor150.png';

const Listagem = ({navigation}) => {

    const [livros, setLivros] = useState([]);
    
    useEffect( 
      () => {
        apiLivraria.get('/listarLivros')
        .then(
                (data)=>{
                  setLivros(data.data)
                }
        )
      },
      []
    );
  return (
    <ScrollView>
      <View style={styles.container}>
          {
            livros.map(
              livro => (
                <TouchableOpacity
                  key={livro.cod_livro}
                  style={styles.post}
                  onPress={()=>navigation.navigate('Detalhes', {cod_livro: livro.cod_livro})}>
                  <View style={styles.postContainer}>
                    <Image style={styles.imagem} source={img150} />
                    <Text style={styles.titulo} >{livro.titulo}</Text>
                  </View>
                </TouchableOpacity>
              ) 
            )
          }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
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
  postContainer: {
    width: '95%',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
   //elevation: 5,
    //borderWidth: 5,
    //borderColor: COLORS.black,
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
});

export default Listagem;
