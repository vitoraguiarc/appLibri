import React from "react";
import { StyleSheet  } from "react-native";

import Login from "./src/telas/Login";
import Cadastro from "./src/telas/Cadastro";
import Listagem from "./src/telas/Listagem";

const App = ()=>{

  return(
    //<Cadastro/>
    <Listagem/>
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