import {TextInput} from 'react-native';
import React from "react";
import { StyleSheet } from 'react-native';
import { View, Text, StatusBar, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import colors from "../utils/colors";

export default function HomeCScreen() {
    return (
        <>
       <StatusBar barStyle={'light-content'}/>

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
       </SafeAreaView>
        </>
    );
    }

    const styles = StyleSheet.create({
        
    });