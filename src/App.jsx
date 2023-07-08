/* eslint-disable no-unused-vars */
import './App.css'
import { useState } from 'react';
import nails from "./assets/nails-background.mp4";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowingGreet, setIsShowingGreet] = useState(false);
  
  const [greet, setIsGreet] = useState("תודה שנרשמתם");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const clickHandler = () => {
    setIsLoading; (true);
    
    fetch("https://64a964958b9afaf4844aa1e7.mockapi.io/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        phone: phone
      })
    }).then((value) => {
      setIsLoading(false);
      setIsShowingGreet(true);
    });
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
      {!isLoading && !isShowingGreet && (
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
      )}
      {isLoading && <div className="loader"></div>}
      {isShowingGreet && <h1 className="thanks">תודה שנרשמתם</h1>}
    </div>
  );
}

export default App
