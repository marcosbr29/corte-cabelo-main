import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';


export default function Conta() {
const [user, setUser] = useState('');
const [email, setEmail] = useState('');
const [idade, setIdade] = useState('');
const [telefone, setTelefone] = useState('');


const handleSubmit = () => {
if (!user || !email || !idade || !telefone) {
Alert.alert('Erro', 'Por favor, preencha todos os campos.');
return;
}
Alert.alert('Sucesso', `Perfil de ${user} atualizado com sucesso!`);
setUser('');
setEmail('');
setIdade('');
setTelefone('');
};


return (
<View style={styles.container}>
<Text style={styles.title}>Seus Dados:</Text>


<TextInput
style={styles.input}
placeholder="Seu Nome"
value={user}
onChangeText={setUser}
placeholderTextColor='#1C1C1C'
/>


<TextInput
style={styles.input}
placeholder="Seu melhor e-mail"
value={email}
onChangeText={setEmail}
placeholderTextColor='#1C1C1C'
/>


<TextInput
style={styles.input}
placeholder="Data de Nascimento (ex: DD/MM/AAAA)"
value={idade}
onChangeText={setIdade}
placeholderTextColor='#1C1C1C'
/>

<TextInput
style={styles.input}
placeholder="Telefone (ex: 12 34567-8901)"
value={telefone}
onChangeText={setTelefone}
v
/>


<TouchableOpacity style={styles.button} onPress={handleSubmit}>
<Text style={styles.buttonText}>Atualizar Perfil</Text>
</TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
padding: 16,
backgroundColor: '#c7ebecff',
},
title: {
fontSize: 30,
fontWeight: '700',
marginBottom: 30,
color: '#1C1C1C',
},
input: {
backgroundColor: '#ffffffff',
borderWidth: 1,
borderColor: '#000000ff',
borderRadius: 14,
padding: 14,
marginBottom: 18,
fontSize: 16,
},
button: {
backgroundColor: '#5cb85c',
padding: 14,
borderRadius: 14,
alignItems: 'center',
},
buttonText: {
color: '#fff',
fontWeight: '700',
},
}); 