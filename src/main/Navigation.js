import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/homeScreen.js';
import Agendamento from '../screens/agendamento.js';
import MinhaConta from '../screens/minhaConta.js';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#c7ebecff' },
        headerTintColor: '#1C1C1C',
        headerTitleStyle: { 
          fontWeight: 'bold',
          fontSize: 33,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
        
      />
      <Stack.Screen
        name="Agendamento"
        component={Agendamento}
        options={{ title: 'Agendar Corte' }}
      />
      <Stack.Screen
        name="MinhaConta"
        component={MinhaConta}
        options={{ title: 'Minha Conta' }}
      />
    </Stack.Navigator>
  );
}
