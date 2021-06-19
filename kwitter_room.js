
  var firebaseConfig = {
      apiKey: "AIzaSyBDdc1QJzXtCk-Fn7WzlqW0lJjS-Oa1Vo4",
      authDomain: "kwitter-9549b.firebaseapp.com",
      projectId: "kwitter-9549b",
      storageBucket: "kwitter-9549b.appspot.com",
      messagingSenderId: "140610068430",
      appId: "1:140610068430:web:467a189dd9f04bcd85d59f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
