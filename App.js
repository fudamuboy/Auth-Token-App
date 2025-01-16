import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignUp';
import AuthContextProvider from './store/auth-context';
import { AuthContext } from './store/auth-context';
import { useContext } from 'react';
import AuthContent from './components/AuthContent';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

// burda c'est after authentification
//headerStyle pour la couleur de l'entete et headerTintColor pr 
//la color de l'ecriture
// NormalStack: Oturum açılmamışsa kullanılan navigasyon
function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'gray' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerTitle: 'User Login' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerTitle: 'User Registration' }}
      />
    </Stack.Navigator>
  );
}

// AfterAuthenticated: Oturum açıldıktan sonra kullanılan navigasyon
function AfterAuthenticatedStack() {
  const authContext = useContext(AuthContext)
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'gray' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerTitle: 'Main Page',
          headerRight: ({ tintColor }) => <Pressable onPress={authContext.logout}>
            <Ionicons name="exit-outline" size={25} color={tintColor} />
          </Pressable>

        }}
      />
    </Stack.Navigator>
  );
}
function Navigation() {
  const authContext = useContext(AuthContext)
  return (
    <NavigationContainer>
      {!authContext.isAuthenticated && <NormalStack />}
      {authContext.isAuthenticated && <AfterAuthenticatedStack />}
    </NavigationContainer>
  )

}

// j'ai utilise ooptions={headerTitle} pour changer le nom de la Page 
// A la place de LOGIN j'ai mit User LOgin
export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
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
