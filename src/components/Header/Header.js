import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Header(){
return (
<View style={styles.header}>
<Text style={styles.title}>Corte Em Dia App</Text>
</View>
);
}


const styles = StyleSheet.create({
header: { marginVertical: 3, padding: 11 },
title: { fontSize: 40, fontWeight: '800', color: '#1C1C1C', textAlign: 'center' },
});