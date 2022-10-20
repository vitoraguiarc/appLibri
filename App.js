import React from "react";
import {View, Text, Button} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./src/telas/Cadastro";
import Listagem from "./src/telas/Listagem";
import {Detalhes} from "./src/telas/Detalhes";
import Editar from "./src/telas/Editar";
const Stack = createNativeStackNavigator();

const App = ()=>{

  return(

    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/> */}
        <Stack.Screen name="Listagem" component={Listagem} options={{title: 'Listagem de Livros'}}/>
        <Stack.Screen name="Detalhes" component={Detalhes} options={{title: 'Detalhes de Livros'}}/>
        <Stack.Screen name="Editar" component={Editar} options={{title: 'Edição de Livros'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <Detalhes/>
    
  );

}

export default App;