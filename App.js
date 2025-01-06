import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignUp';

const Stack = createNativeStackNavigator();

// burda c'est after authentification
function NormalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (

    <NavigationContainer>
      <NormalStack />
    </NavigationContainer>
  );
}
// Authenticate olmadan once burda normalStack diye bi fonksiyon tanimlaniom
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
