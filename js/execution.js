const firebaseConfig = {
  apiKey: "AIzaSyCrlP360Fpx-9tCyggJeoqLgkwnTlRTJ5o",
  authDomain: "ncc-project-3b0f1.firebaseapp.com",
  projectId: "ncc-project-3b0f1",
  storageBucket: "ncc-project-3b0f1.firebasestorage.app",
  messagingSenderId: "590441541895",
  appId: "1:590441541895:web:2a861830fcb60f09f655a2"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

saveBtn.onclick = () => {

  db.collection("dailyEntries").add({
    subject: subject.value,
    chapter: chapter.value,
    time: time.value,
    created: new Date()
  })
  .then(()=> alert("Saved to cloud"))
  .catch(err=>alert(err.message));

};
