import './App.css'
import { useState } from 'react';
import nails from "./assets/nails-background.mp4";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const clickHandler = () => {
    fetch(
      "https://nails-landing-page-default-rtdb.europe-west1.firebasedatabase.app",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        'Access-Control-Allow-Origin': '*',
        body: JSON.stringify({
          name: name,
          phone: phone
        })
      }
    );
  }

  return (
    <div className="flex">
      <div className="video-overlay">
        <video autoPlay muted loop id="myVideo">
          <source src={nails} type="video/mp4" />
        </video>
      </div>
      <h1>עוד קורס ציפורניים מטורף של מאסטר ניילס מתחיל</h1>
      <h1>הרשמו עכשיו</h1>
      <div className="form">
        <input
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="שם"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          placeholder="טלפון"
        />
        <button onClick={clickHandler}>אני רוצה להצטרף לקורס</button>
      </div>
    </div>
  );
}

export default App
