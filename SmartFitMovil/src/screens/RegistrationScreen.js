import React from "react";
import { StyleSheet } from 'react-native';
import { View, Text, StatusBar, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import colors from "../utils/colors";

import {TextInput} from 'react-native';

export default function RegistrationScreen(props) {
    const {navigation} = props;
    return (
        <>
        <StatusBar barStyle={'light-content'}/>
        <SafeAreaView style={styles.container}>
        <Text style={styles.Text}>Completa la información:</Text>
        <StatusBar style="auto" />

        <Text style={{color:'red'}}>Este campo es obligatorio *</Text>
        <TextInput style={styles.inputs} placeholder="Nombre(s)"keyboardType="text"/>
        <TextInput style={styles.inputs} placeholder="Apellidos"keyboardType="text"/>
        <TextInput style={styles.inputs} placeholder="🗓Fecha de nacimiento"keyboardType="text"/>
        <TextInput style={styles.inputs} placeholder="✉️Correo institucional"keyboardType="text"/>
        <TextInput style={styles.inputs} placeholder="🔑Contraseña"keyboardType="text"/>
        <TextInput style={styles.inputs} placeholder="Confirmar contraseña"keyboardType="text"/>
        <TextInput style={styles.inputs} placeholder="Peso (kg)"keyboardType="text"/>
        <TextInput style={styles.inputs} placeholder="📏Altura"keyboardType="text"/>
        <TextInput style={styles.inputs} placeholder="Objetivo"keyboardType="text"/>
   
        <TouchableOpacity style={styles.btn} title="Registrate aquí" onPress={() => navigation.navigate("register")}>
            <Text style={styles.btn}>      Registrarse     </Text></TouchableOpacity>
       
        <Image source={require('../../assets/SmartFitPalabra.png')} style={styles.contenedor}/>
        </SafeAreaView>
       
        </>
    );
    }

    const styles = StyleSheet.create({
        inputs: {
            borderWidth:1,
            borderColor:'black',
            borderRadius:8,
            marginLeft:-5,
            marginRight:4,
            color:"black",
            paddingLeft:20,
            paddingRight:20,
            height:40,
            marginBottom:10,
            width:240,
            },
        container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.VERDE_CLARO,
        height:290,
        alignItems: "center",
        },
        btn: {
            fontSize:16,
            fontWeight:"bold",
            backgroundColor:colors.AZUL_OSUCRO,
            height:25,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:8,
            marginBottom:10,
            marginTop:10,
            color:"white",
           },
            Text: {
            fontSize: 25,
            marginBottom: 15,
            margin:15,
        },
        contenedor:{
            position: 'absolute',
            top: 700,
            left: 200,
            zIndex: -1,
            width:199, height:50
        }
    });