import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import COLORS from '../const/Colors';
import apiLivraria from '../services/apiLivraria';

import img150 from '../assets/books/lor150.png';
import {useEffect, useState} from 'react';

const Listagem = () => {

    const [livros, setLivros] = useState([]);
    
    useEffect( () => {
        apiLivraria.get('/listarLivros')
            .then(
                (data)=>{
                    console.log(data);
                }
            ));
    }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.post}>
          <Image style={styles.imagem} source={img150} />
          <Text style={styles.titulo}>O Senhor dos Aneis</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  post: {
    width: '95%',
    alignItems: 'center',
    backgroundColor: COLORS.gray,
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 5,
  },
  imagem: {
    borderRadius: 5,
    marginVertical: 16,
    marginLeft: 16,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Listagem;
