import React, { useState } from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {

    setData(null);
    setError(null);

    axios.get(`https://jsonplaceholder.typicode.com/posts/${text}`)
      .then((response) => {
        console.log('Respuesta', response);
        setData(response.data);
        setError(null);
      })
      .catch((error) => {
        console.log('Error');
        console.log(error);
        setError(error.toString());
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleSubmit}>Enviar</button>
        <div>
          {data !== null ? <div>Respuesta: {JSON.stringify(data)}</div> : error !== null ? <div>Error: {error}</div> : <div></div>}
        </div>
      </header>
    </div>
  );
}

export default App;