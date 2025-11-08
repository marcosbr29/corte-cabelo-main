import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function AccountCard(){
const nnavigation = useNavigation();
return (
<View style={styles.card}>
<Text style={styles.heading}>Minha Conta:</Text>
<Text style={styles.item}>Consulte seus agendamentos e histórico</Text>
<TouchableOpacity style={styles.button} onPress={() => nnavigation.navigate('MinhaConta')}><Text style={styles.buttonText}>Acessar Conta 🌐</Text></TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
card:{ backgroundColor:'#ffffffff', padding:12, borderRadius:20, marginBottom:14, borderColor:'#1C1C1C', borderWidth:2 },
heading:{ fontWeight:'700', marginBottom:6, fontSize:24, color: '#1C1C1C' },
item:{ marginVertical:7, marginHorizontal:10, padding:1, fontSize:15, fontWeight:'500', color: '#1C1C1C' },
button:{ marginTop:8, backgroundColor:'#1C1C1C', padding:8, borderRadius:15 },
buttonText:{ color:'#fff', fontWeight:'700', textAlign:'center' }
});