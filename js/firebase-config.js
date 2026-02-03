// firebase-config.js - Initialize Firebase v8 (CDN version)
const firebaseConfig = {
  apiKey: "AIzaSyCrlP360Fpx-9tCyggJeoqLgkwnTlRTJ5o",
  authDomain: "ncc-project-3b0f1.firebaseapp.com",
  projectId: "ncc-project-3b0f1",
  storageBucket: "ncc-project-3b0f1.firebasestorage.app",
  messagingSenderId: "590441541895",
  appId: "1:590441541895:web:2a861830fcb60f09f655a2"
};

// Prevent duplicate initialization
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export for use in other files
const db = firebase.firestore();
const auth = firebase.auth();
