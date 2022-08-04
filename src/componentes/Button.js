import React from "react";
import {TouchableOpacity, StyleSheet, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import COLORS from "../const/Colors";

const Button = ({title}) => {
    
    return(
        <TouchableOpacity style={styles.button} activeOpacity={1}>
            <Text style={styles.titleButton}>{title}</Text>
        </TouchableOpacity>
    );
    
}

const styles = StyleSheet.create({
    button:{
        height: 55,
        width: "100%",
        backgroundColor: COLORS.darkBlue,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        marginVertical: 20,
        borderRadius: 20
    },
    titleButton: {
        color: COLORS.black,
        fontWeight: "bold",
        fontSize: 18
    }
});

export default Button;