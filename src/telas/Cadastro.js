import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView  } from "react-native";
import Input from "../componentes/Input";
import Button from "../componentes/Button";
import COLORS from "../const/Colors";

const Cadastro = ()=>{

  // CAPTURA DE DADOS COM USO DE STATE

  // CRIAÇÃO DA ESTRUTURA DE STATE QUE ARMAZENA OS DADOS DIGITADOS
  // inputs = representa a estrutura que carrega os dados
  // setInputs = representa a função de acesso aos dados da state
  const [inputs, setInputs] = React.useState({
    titulo: '',
    descricao: '',
    capa: '',
  });

  //function que manipula a entrada de dados na state no metódo onChangeText
  const handlerOnChange = (text, input) => {

    setInputs((prevState)=>( 

      console.log(prevState),

      //INJEÇÃO DE DADOS NA STATE
      {...prevState, [input]:text}

      

    ));

  }

  // VALIDAÇÃO DOS DADOS DE CADASTRO
  // function de validação
  const validate = () => {

    let validate = true;

    if (!inputs.titulo) {
      validate = false
      console.log('CAMPO VAZIO');
    }

    if (!inputs.descricao) {
      validate = false
      console.log('CAMPO VAZIO');
    }

    if (!inputs.capa) {
      validate = false
      console.log('CAMPO VAZIO');
    }

  }

  

    return(

      <SafeAreaView style={styles.safe}>

        <ScrollView style={styles.scroll}>

          <Text style={styles.title}>
            CADASTRO DE LIVRO 
          </Text>

          <View style={styles.viewForm}>

            <Input 
              label="TÍTULO" 
              onChangeText={(text)=>handlerOnChange(text, 'titulo')}
            />
            
            <Input 
              label="DESCRIÇÃO"
              onChangeText={(text)=>handlerOnChange(text, 'descricao')}
            />
            <Input 
              label="CAPA"
              onChangeText={(text)=>handlerOnChange(text, 'capa')}
            />

            <Button 
              title={"CADASTRAR"}
              onPress={validate}
            />

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