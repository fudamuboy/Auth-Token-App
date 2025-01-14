import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignUp';

const Stack = createNativeStackNavigator();

// burda c'est after authentification
//headerStyle pour la couleur de l'entete et headerTintColor pr 
//la color de l'ecriture
function NormalStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:
        { backgroundColor: 'gray' }, headerTintColor: 'white'
    }}>
      <Stack.Screen name="Login" component={LoginPage} options={{ headerTitle: 'User Login' }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerTitle: 'User Registration' }} />
    </Stack.Navigator>
  )
}
// j'ai utilise ooptions={headerTitle} pour changer le nom de la Page 
// A la place de LOGIN j'ai mit User LOgin
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
