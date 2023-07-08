/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useEffect, useRef } from "react";
import nailsDesktop from "./assets/nails-background.mp4";
import nailsMobile from "./assets/nails-background-mobile.mp4";
import details from "./assets/pkg.jpeg";

function App() {
  const flexRef = useRef();
  const flexImgRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [isShowingGreet, setIsShowingGreet] = useState(false);

  const [greet, setIsGreet] = useState("תודה שנרשמתם");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("");

  const detailsHandler = () => {
    flexImgRef.current.classList.toggle("none");
    flexRef.current.classList.toggle("none");
  }

  const selectHandler = e => {
    setSelect(e.target.value);
  }

  const clickHandler = () => {
    if (name.length > 0 && phone.length >= 9 && email.length > 5) {
      setIsLoading(true);

      fetch("https://64a964958b9afaf4844aa1e7.mockapi.io/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          course: select.length === 0 ? "all included" : select
        })
      }).then((value) => {
        setIsLoading(false);
        setIsShowingGreet(true);
      });
    }
  };

  useEffect(() => {
    flexImgRef.current.classList.add('none');
  }, []);

  return (
    <>
      <div ref={flexRef} className="flex">
        <div className="video-overlay">
          <video autoPlay muted loop id="myVideo">
            <source
              className="src-mobile"
              src={nailsMobile}
              type="video/mp4"
              media="(min-width: 250px) and (max-width: 600px)"
            />

            <source
              className="src-desktop"
              src={nailsDesktop}
              type="video/mp4"
              media="(min-width: 601px) and (max-width: 2000px)"
            />
          </video>
        </div>
        <h1>הרשמו עכשיו למגוון קורסים של מאסטר ניילס</h1>
        <label htmlFor="pkg">בחרו חבילה</label>

        <select onChange={selectHandler} name="pkg" id="pkg">
          <option value="all included">חבילת הכל כלול</option>
          <option value="build in acril">בנייה באקריל</option>
          <option value="build in gel">בנייה בג'ל</option>
          <option value="buissness marketing">שיווק העסק</option>
          <option value="gel on natural">ג'ל על טבעיות</option>
          <option value="recorded lectures">הדרכות מוקלטות</option>
          <option value="package of products">חבילת מוצרים</option>
          <option value="private zoom">זומים אישיים</option>
        </select>
        <br />
        <a onClick={detailsHandler}>לחץ לפרטים</a>
        {!isLoading && !isShowingGreet && (
          <div className="form">
            <input
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              placeholder="שם"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="אימייל"
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              type="number"
              placeholder="טלפון"
            />
            <button onClick={clickHandler}>אני רוצה להצטרף לחבילה</button>
          </div>
        )}
        {isLoading && <div className="loader"></div>}
        {isShowingGreet && <h1 className="thanks">תודה שנרשמתם</h1>}
      </div>
      <div ref={flexImgRef} className="flex-img">
        <a onClick={detailsHandler}>חזור</a>
        <img src={details} width="100%" />
      </div>
    </>
  );
}

export default App;
