import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({label, error, onFocus=()=>{}, iconName, value, ...props}) => {

    return(
        <View style={styles.formContainer}>

            <Text style={styles.inputLabel}>{label}</Text>

            <View style={[styles.imputContainer, {borderColor: error ? COLORS.red : COLORS.black}]}>

                <Icon style={styles.icon} name={iconName}></Icon>

                <TextInput 
                style={styles.TextInput} 
                    autoCorrect={false}
                    onFocus={()=>{onFocus()}}
                    value={value}
                    {...props}    
                />
                
            </View>
            <Text>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    formContainer:{
        marginBottom: 20,
    },
    inputLabel:{
        marginVertical: 5,
        fontSize: 15,
        color: COLORS.white
    },
    imputContainer: {
        height: 55,
        backgroundColor: COLORS.light,
        flexDirection: "row",
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: "center"
    
    },
    TextInput: {
        color: COLORS.darkBlue,
        flex: 1,
    },
    icon: {
        fontSize: 22,
        color: COLORS.black,
        marginRight: 10
    }
});

export default Input;