import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';


export default function Agendamento() {
const [name, setName] = useState('');
const [service, setService] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');


const handleSubmit = () => {
if (!name || !service || !date) {
Alert.alert('Erro', 'Por favor, preencha todos os campos.');
return;
}
Alert.alert('Sucesso', `Serviço agendado para ${name} em ${date} às ${time} - ${service}`);
setName('');
setService('');
setDate('');
setTime('');
};


return (
<View style={styles.container}>
<Text style={styles.title}>Agende Seu Corte Aqui:</Text>


<TextInput
style={styles.input}
placeholder="Seu Nome"
value={name}
onChangeText={setName}
placeholderTextColor='#1C1C1C'
/>


<TextInput
style={styles.input}
placeholder="Serviço Desejado (ex: Corte, Barba)"
value={service}
onChangeText={setService}
placeholderTextColor='#1C1C1C'
/>


<TextInput
style={styles.input}
placeholder="Data do Agendamento (ex: 25/10/2025)"
value={date}
onChangeText={setDate}
placeholderTextColor='#1C1C1C'
/>

<TextInput
style={styles.input}
placeholder="Hora do Agendamento (ex: 14:30)"
value={time}
onChangeText={setTime}
placeholderTextColor='#1C1C1C'
/>


<TouchableOpacity style={styles.button} onPress={handleSubmit}>
<Text style={styles.buttonText}>Confirmar Agendamento</Text>
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
borderColor: '#1C1C1C',
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