import axios, { Axios } from "axios";

const API_KEY = 'AIzaSyCAV4lxgWjc8-j8gQzFpveo-YwYJ7pwujw'

// usage des fonctions en mmm temps a travers mode et le kutuphane axios 
async function authenticate(mode, email, password) {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  
    //console.log(response.data);
    const token=response.data.idToken;
    return token;
  }
  
  export  function createUser(email, password) {
    return authenticate('signUp', email, password);
  }
  
  export  function login(email, password) {
    return authenticate('signInWithPassword', email, password);
  }
  // ds cette partie j'ai cree 2 functions ds lakel j'ai utlise en mm temps le SignUp n le SignIn
  //Plutôt que d'écrire 2 fonctions distinctes avec des requêtes similaires pour l'inscription 
  // et la connexion j'ai réutilise authenticate pour gérer les two cas.
  // et le API_KEY de firebase pr le stockage des donnees sur firebase 