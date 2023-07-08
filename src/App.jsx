import './App.css'
import nails from "./assets/nails-background.mp4";

function App() {

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
        <input id="name" placeholder='שם'/>
        <input id="phone" placeholder='טלפון'/>
        <button>אני רוצה להצטרף לקורס</button>
      </div>
    </div>
  );
}

export default App
