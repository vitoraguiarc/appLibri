import React from "react";
import { View, Text, StyleSheet  } from "react-native";

import Login from "./src/telas/Login";
import Cadastro from "./src/telas/Cadastro";

const App = ()=>{

  const name = 'SENAI - JANDIRA';

  return(
    // <View>
    //   <Text style={style.title}>{name}</Text>
    // </View>
    // <Login/>
    <Cadastro/>
  );

}

const style = StyleSheet.create({
  container:{},
  title:{
    width: "100%",
    backgroundColor: "#F00",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "#FFF",
    fontWeight: "bold",
    padding: 16,
    
  },
});

export default App;