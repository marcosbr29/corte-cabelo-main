import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from './components/Header/Header.js';
import Servicos from './components/servicos/servicos.js';
import Agendar from './components/agenda/agenda.js';
import Conta from './components/conta/conta.js';
import Contatos from './components/contato/contato.js';


export default function Main() {
return (
<View style={styles.container}>
<ScrollView contentContainerStyle={styles.container}>
<Header />
<Servicos />
<Agendar />
<Conta />
<Contatos />
</ScrollView>
</View>
);
}


const styles = StyleSheet.create({
container: {
padding: 16,
flex: 1,
backgroundColor: '#c7ebecff',
},
});     