import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARf0p39Q04FBclsFhGlDlKIqZjIwRTp3c",
    authDomain: "crud-ecommerce-90182.firebaseapp.com",
    projectId: "crud-ecommerce-90182",
    storageBucket: "crud-ecommerce-90182.appspot.com",
    messagingSenderId: "1013982902157",
    appId: "1:1013982902157:web:b1de3ae7333ea7a8ff2fc4"
  };
  // Adicionar / remover / atualizar / pesquisar
  let fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();