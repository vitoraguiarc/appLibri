import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView  } from "react-native";
import Input from "../componentes/Input";
import Button from "../componentes/Button";
import COLORS from "../const/Colors";

const Cadastro = ()=>{

    const name = 'TELA DE CADASTRO';
  
    return(

      <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.title}>
            CADASTRO DE LIVRO 
          </Text>

          <View style={styles.viewForm}>

            <Input label="TÍTULO" />
            <Input label="DESCRIÇÃO"/>
            <Input label="CAPA"/>

            <Button title={"CADASTRAR"}/>

          </View>
        </ScrollView>
      </SafeAreaView>

       
        
    );
  
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.back
  },
  scroll: {
    paddingTop: 50,
    paddingHorizontal: 20
  },
  title: {
    color: COLORS.black,
    fontSize: 25,
    fontWeight: "bold"
  },
  viewForm: {
    marginVertical: 20,
  }
})

export default Cadastro;