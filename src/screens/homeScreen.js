import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header/Header.js';
import Servicos from '../components/servicos/servicos.js';
import Agendar from '../components/agenda/agenda.js';
import Conta from '../components/conta/conta.js';
import Contato from '../components/contato/contato.js';


export default function HomeScreen() {
return (
<ScrollView contentContainerStyle={styles.container}>
<Header />
<Servicos />
<Agendar />
<Conta />
<Contato />
</ScrollView>
);
}


const styles = StyleSheet.create({
container: {
padding: 16,
backgroundColor: '#c7ebecff',
},
});