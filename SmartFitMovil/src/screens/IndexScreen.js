import React from "react";
import { Button, StyleSheet , ImageBackground} from 'react-native';
import { View, Text, StatusBar, SafeAreaView, Image, TouchableOpacity, TextInput} from 'react-native';
import colors from "../utils/colors";

export default function IndexScreen(props) {
    const { navigation } = props;
    return (
        <>
        <StatusBar barStyle={'light-content'}/>

            {/* 
        Contenedor de la franja azul y el logo
            */}
            <SafeAreaView style={styles.container}>

                <View >
                    <View>
                        <Image
                            style={styles.img}
                            source={require("../../assets/putoMIKE.png")} />
                    </View>
                    <View style={styles.backgroundImageContainer3}>
                        <Image source={require('../../assets/franja_azul.png')} style={styles.backgroundImage3} />
                    </View>
                </View>
              
                {       /* 
        Contenedor del circulo verde y el formulario
            */}
                <View style={styles.container}>
                    <View>
                        <Text style={styles.Text}>Bienvenido a SmartFit</Text>
                        <Text>Correo ✉️</Text>
                        <TextInput style={styles.inputs}
                            placeholder="usuario@utez.edu.mx"
                            keyboardType="text"
                        />
                        <Text>Contraseña🔑</Text>
                        <TextInput style={styles.inputs}
                            placeholder="****"
                            keyboardType="text"
                        />
                        <TouchableOpacity title="Registrate aquí" onPress={() => navigation.navigate("password")}>
                            <Text style={{ textDecorationLine: 'underline' }}>¿Olvidaste tu contraseña?</Text>
                        </TouchableOpacity>

                        <StatusBar style="auto" />
                        <TouchableOpacity style={styles.btn} title="Registrate aquí" onPress={() => navigation.navigate("homeClient")}>
                            <Text style={styles.btn}>Iniciar sesión</Text>
                        </TouchableOpacity>
                        <Text>¿No tienes cuenta?</Text>
                        <StatusBar style="auto" />
                        <TouchableOpacity title="Registrate aquí" onPress={() => navigation.navigate("register")}>
                            <Text style={{ textDecorationLine: 'underline' }}>Registrate aquí</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.backgroundImageContainer2}>
                        <Image source={require('../../assets/circulo_verde.png')} style={styles.backgroundImage2} />
                    </View>
                </View>

            </SafeAreaView>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    flexDirection: 'column',
        backgroundColor: colors.VERDE_CLARO,
        height:290,
        alignItems: "center",
    },
    img:
    {
        width: 130,
        height: 130,
        marginBottom: 10,
        marginTop: 10,
    },
    Text: {
        fontSize: 30,
        marginBottom: 15,
        margin:15,
    },
    btn: {
     fontSize:16,
        fontWeight:"bold",
        backgroundColor:'white',
        height:25,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        marginBottom:10,
        marginTop:10,
    
    },
    inputs:
    {
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
    
    },

      
      backgroundImageContainer2: {
        position: 'absolute',
        top: 0,
        left: 250,
        zIndex: -1,
      },
      backgroundImage2: {
        flex: 1,
        height: 430,
        width: 430,
        resizeMode: 'cover',
      },
      backgroundImageContainer3: {
        position: 'absolute',
        left: -280,
        top: -150,
        zIndex: -1,
      },
      backgroundImage3: {
        flex: 1,
        height: 480,
        width: 480,
        resizeMode: 'cover',
      }
    });
    