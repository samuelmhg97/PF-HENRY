import "./App.css";
import firebase from "firebase/compat/auth";
import "firebase/compat/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import app from "../Firebase/FirebaseAuth"
//import ListOfTodo from "./components/ListOfTodo";
 
function App() {
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  // const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pepa, setPepa] = useState("");
 
  useEffect(() => {
    // firebase.auth().onAuthStateChanged((userCred) => {
    //   if (userCred) {
    //     setAuth(true);
    //     window.localStorage.setItem("auth", "true");
    //     userCred.getIdToken().then((token) => {
    //       setToken(token);
    //     });
    //   }
    // });
  }, []);
 
  // const loginWithGoogle = () => {
  //   firebase
  //     .auth()
  //     .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //     .then((userCred) => {
  //       if (userCred) {
  //         setAuth(true);
  //         window.localStorage.setItem("auth", "true");
  //       }
  //     });
  // };
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
 
  const crearcuentita = () => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(({ user }) => {
        //setAuth(true);
        console.log(user);
        window.localStorage.setItem("sarasa", "true");
       
      })
      .catch((err) => {
        console.log("No se creo la cuenta");
      });
  };
 
  const loguear = () => {
    app
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(({ user }) => {
        return user.getIdToken().then((idToken) => {
          console.log(idToken);
          return axios
            .get("http://localhost:3001/", {
              headers: {
                Authorization: "Bearer " + idToken,
              },
            })
            .then((res) => {
              const xd = JSON.stringify(res.data);
              setPepa(xd);
              return res.data;
            });
        });
      })
      .then((data) => {
        console.log(JSON.stringify(data));
      });
  };
 
  return (
    <div className="App">
      {/* {auth ? (
        <ListOfTodo token={token} />
      ) : ( */}
      <div>
        {/* <button onClick={loginWithGoogle}>Login with Google</button> */}
 
        <div>
          <input type="text" name="email" onChange={handleEmailChange} />
          <input type="text" name="password" onChange={handlePassChange} />
          <button onClick={crearcuentita}>Create la cuentita bb</button>
          <button onClick={loguear}>Loguea</button>
        </div>
        {pepa}
      </div>
      {/* )} */}
    </div>
  );
}
 
export default App;