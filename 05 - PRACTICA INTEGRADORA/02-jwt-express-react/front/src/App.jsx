import { useState } from "react";
import "./App.css";
import { ErrorLogin, ErrorRegister } from "./utils/custom-error";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [data, setData] = useState({});
  const [dataPrivate, setDataPrivate] = useState(false);

// const fetchTest = async () => {
//   console.log(await fetch('http://localhost:8080'))
// }
//   fetchTest();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      // localStorage.setItem("token", data.token);  //INSEGURO
      console.log(data);
      if (!data) throw new ErrorLogin("No se pudo iniciar sesión");
      setToken(data.token);
      setData(data.user);
    } catch (error) {
      console.log(error)
      if (error instanceof ErrorLogin) {
        window.location.replace("/error-login");
        // navigate("/error-login");
      }
      if (error instanceof ErrorRegister) {
        window.location.replace("/error-register");
        // navigate("/error-register");
      }
    }
  };

  const fetchPrivate = async () => {
    try {
      if(!token) {
        alert("No token provided") 
        return
      }
      const response = await fetch("http://localhost:8080/users/private", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // credentials: "include"
      })
      const data = await response.json();
      if (!data) throw new Error("No se pudo obtener la información privada");
      setDataPrivate(true);
    } catch (error) {
      
    }
  }

  return (
    <>
      <h1>Login</h1>
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={fetchPrivate}>Private data</button>
      <p>
        {
          data.first_name ? `Bienvenido/a ${data.first_name}` : "No está logueado"
        }
      </p>
      <p>
        {
          dataPrivate ? `datos privados: ${data.email}` : "No se han obtenido datos privados"
        }
      </p>
    </>
  );
}

export default App;
