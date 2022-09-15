import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView,   } from "react-native";
import Input from "../componentes/Input";
import Button from "../componentes/Button";
import COLORS from "../const/Colors";
import apiLivraria from "../services/apiLivraria";

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

  // state de erro de preenchimento
  const [errors, setErrors] = React.useState({});

  // funçao handler que configura as mensagens de erro na state
  const handlerErros = (errorMesage, input)=>{
    setErrors((prevState)=>({...prevState, [input]:errorMesage}));
  }

  // function de validação
  const validate = () => {

    let validate = true;

    if (!inputs.titulo) {
      validate = false
      handlerErros('Informe o título do livro.', 'titulo');
    }

    if (!inputs.descricao) {
      validate = false
      handlerErros('Informe a descrição do livro.', 'descricao');
    }

    if (!inputs.capa) {
      validate = false
      handlerErros('Informe a capa do livro.', 'capa');
    }

    if(validate){
      //ENVIA OS DADOS PARA A API CADASTRAR.
      cadastrar();
      console.log('CADASTROU');
    }

  }

  const cadastrar = () => {
      
    try {
      const response = apiLivraria.post('/cadastrarLivro', {
        'titulo': inputs.titulo,
        'descricao': inputs.descricao,
        'imagem': inputs.capa
      });
    } catch (error) {
      
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
              iconName= "book-outline"
              error={errors.titulo}
              onFocus={()=>{handlerErros(null, 'titulo')}}
              onChangeText={(text)=>handlerOnChange(text, 'titulo')}
            />
            
            <Input 
              label="DESCRIÇÃO"
              iconName="card-text-outline"
              error={errors.descricao}
              onFocus={()=>{handlerErros(null, 'descricao')}}
              onChangeText={(text)=>handlerOnChange(text, 'descricao')}
            />
            <Input 
              label="CAPA"
              iconName="image-outline"
              error={errors.capa}
              onFocus={()=>{handlerErros(null, 'capa')}}
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