const firebaseConfig = {
    apiKey: "AIzaSyAPTmsgQEs_54U5ZaCoIJPEzm7iahiUSW4",
    authDomain: "kwitter-c48e3.firebaseapp.com",
    databaseURL: "https://kwitter-c48e3-default-rtdb.firebaseio.com",
    projectId: "kwitter-c48e3",
    storageBucket: "kwitter-c48e3.appspot.com",
    messagingSenderId: "552917858802",
    appId: "1:552917858802:web:aee4c207c698768e6a936b",
    measurementId: "G-6H74PCQHF9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig); 

user_name = localStorage.getItem("user_name") ; 
document.getElementById("user_name").innerHTML = "welcome - " + user_name + "!!" ; 
function logout()
{
    localStorage.removeItem ("user_name")  ;
    localStorage.removeItem ("room_name")  ;
    window.location ="index.html" ;
}
function addRoom()
{
    room_name = document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    localStorage.setItem("room_name",room_name) ; 
    window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname:-" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+
    Room_names +"</div><hr>";
     document.getElementById("output").innerHTML= row ;
      
      });});}
getData();
     function redirectToRoomName()
     {
         localStorage.removeItem("user_name");
         localStorage.removeItem("room_name");
         window.location="index.html" ; 

     }