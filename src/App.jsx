/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useEffect, useRef } from "react";
import nailsDesktop from "./assets/nails-background.mp4";
import nailsMobile from "./assets/nails-background-mobile.mp4";
import acrilBuild from "./assets/acril-build.jpeg";
import allIncluded from "./assets/all-included.jpeg";
import buissnessMarketing from "./assets/buissness-marketing.jpeg";
import gelBuild from "./assets/gel-build.jpeg";
import gelOnNatural from "./assets/gel-on-natural.jpeg";
import personalZoom from "./assets/personal-zoom.jpeg";
import pkgOfProducts from "./assets/pkg-of-products.jpeg";
import recordedLessons from "./assets/recorded-lessons.jpeg";

function App() {
  const flexRef = useRef();
  const flexAllIncludedRef = useRef();
  const flexAcrilBuildRef = useRef();
  const flexBuissnessMarketingRef = useRef();
  const flexGelBuildRef = useRef();
  const flexGelOnNaturalRef = useRef();
  const flexPersonalZoomRef = useRef();
  const flexPkgOfProductsRef = useRef();
  const flexRecordedLessonsRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [isShowingGreet, setIsShowingGreet] = useState(false);

  const [greet, setIsGreet] = useState("תודה שנרשמתם");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("");

  const detailsHandler = (e) => {
    const selection = e.target.getAttribute('id');
    switch (selection) {
      case "all-included":
        {
          flexAllIncludedRef.current.classList.toggle("none");
          flexRef.current.classList.toggle("none");
          break;
        }
      case "acril-build":
        {
          flexAcrilBuildRef.current.classList.toggle("none");
          flexRef.current.classList.toggle("none");
          break;
        }
      case "gel-build":
        {
          flexGelBuildRef.current.classList.toggle("none");
          flexRef.current.classList.toggle("none");
          break;
        }
      case "buissness-marketing":
        {
          flexBuissnessMarketingRef.current.classList.toggle("none");
          flexRef.current.classList.toggle("none");
          break;
        }
      case "gel-on-natural":
        {
          flexGelOnNaturalRef.current.classList.toggle("none");
          flexRef.current.classList.toggle("none");
          break;
        }
      case "recorded-lessons":
        {
          flexRecordedLessonsRef.current.classList.toggle("none");
          flexRef.current.classList.toggle("none");
          break;
        }
      case "pkg-of-products":
        {
          flexPkgOfProductsRef.current.classList.toggle("none");
          flexRef.current.classList.toggle("none");
          break;
        }
      case "personal-zoom":
        {
          flexPersonalZoomRef.current.classList.toggle("none");
          flexRef.current.classList.toggle("none");
          break;
        }
      default:
        throw new Error("Invalid selection");
    }
    
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
    flexAllIncludedRef.current.classList.add("none");
    flexAcrilBuildRef.current.classList.add("none");
    flexBuissnessMarketingRef.current.classList.add("none");
    flexGelBuildRef.current.classList.add("none");
    flexGelOnNaturalRef.current.classList.add("none");
    flexPersonalZoomRef.current.classList.add("none");
    flexPkgOfProductsRef.current.classList.add("none");
    flexRecordedLessonsRef.current.classList.add("none");
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
        <table>
          <tbody>
            <tr>
              <td>
                <ul style={{ direction: "rtl" }}>
                  <li>
                    <a id="all-included" onClick={detailsHandler}>
                      חבילת הכל כלול
                    </a>
                  </li>
                  <li>
                    <a id="acril-build" onClick={detailsHandler}>
                      בנייה באקריל
                    </a>
                  </li>
                  <li>
                    <a id="gel-build" onClick={detailsHandler}>
                      בנייה בג'ל
                    </a>
                  </li>
                  <li>
                    <a id="buissness-marketing" onClick={detailsHandler}>
                      שיווק העסק
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul style={{ direction: "rtl" }}>
                  <li>
                    <a id="gel-on-natural" onClick={detailsHandler}>
                      ג'ל על טבעיות
                    </a>
                  </li>
                  <li>
                    <a id="recorded-lessons" onClick={detailsHandler}>
                      הדרכות מוקלטות
                    </a>
                  </li>
                  <li>
                    <a id="pkg-of-products" onClick={detailsHandler}>
                      חבילת מוצרים
                    </a>
                  </li>
                  <li>
                    <a id="personal-zoom" onClick={detailsHandler}>
                      זומים אישיים
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
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
      <div ref={flexAllIncludedRef} className="flex-img">
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
        <a id="all-included" onClick={detailsHandler}>
          חזור
        </a>
        <img src={allIncluded} width="100%" />
      </div>
      <div ref={flexAcrilBuildRef} className="flex-img">
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
        <a id="acril-build" onClick={detailsHandler}>
          חזור
        </a>
        <img src={acrilBuild} width="100%" />
      </div>
      <div ref={flexBuissnessMarketingRef} className="flex-img">
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
        <a id="buissness-marketing" onClick={detailsHandler}>
          חזור
        </a>
        <img src={buissnessMarketing} width="100%" />
      </div>
      <div ref={flexGelBuildRef} className="flex-img">
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
        <a id="gel-build" onClick={detailsHandler}>
          חזור
        </a>
        <img src={gelBuild} width="100%" />
      </div>
      <div ref={flexGelOnNaturalRef} className="flex-img">
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
        <a id="gel-on-natural" onClick={detailsHandler}>
          חזור
        </a>
        <img src={gelOnNatural} width="100%" />
      </div>
      <div ref={flexPersonalZoomRef} className="flex-img">
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
        <a id="personal-zoom" onClick={detailsHandler}>
          חזור
        </a>
        <img src={personalZoom} width="100%" />
      </div>
      <div ref={flexPkgOfProductsRef} className="flex-img">
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
        <a id="pkg-of-products" onClick={detailsHandler}>
          חזור
        </a>
        <img src={pkgOfProducts} width="100%" />
      </div>
      <div ref={flexRecordedLessonsRef} className="flex-img">
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
        <a id="recorded-lessons" onClick={detailsHandler}>חזור</a>
        <img src={recordedLessons} width="100%" />
      </div>
    </>
  );
}

export default App;
