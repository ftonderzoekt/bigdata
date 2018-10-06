//Initialize Firebase
var config = {
  apiKey: "AIzaSyCbjp3fbSx2WUwuQ0NTFJErFPCZwk2AcFc",
  authDomain: "salustest-7df6a.firebaseapp.com",
  databaseURL: "https://salustest-7df6a.firebaseio.com",
  projectId: "salustest-7df6a",
  storageBucket: "salustest-7df6a.appspot.com",
  messagingSenderId: "657992195439"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

function getSearchVal() {

var zoekTerm = document.getElementById("zoekterm").value;
document.getElementById("zoekresult").innerHTML = zoekTerm;
console.log(zoekTerm);

db.collection("sanctions").where("nameAlias.attributes.firstName", "==", zoekTerm)
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      var result = doc.data()
      document.getElementById("output").innerHTML = result.nameAlias.attributes.firstName + " " + result.nameAlias.attributes.lastName;
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch(function(error) {
  console.log("Error getting documents: ", error);
});

}
