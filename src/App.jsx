import React, { useEffect } from "react";
import "./App.css";
import sound from "./assets/dieWithSmile.mp3";

const App = () => {
  useEffect(() => {
    const noButton = document.getElementById("noButton");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");

    const handleHover = () => {
      const containerWidth = window.innerWidth - noButton.offsetWidth;
      const containerHeight = window.innerHeight - noButton.offsetHeight;

      const newX = Math.random() * containerWidth;
      const newY = Math.random() * containerHeight;

      noButton.style.position = "absolute";
      noButton.style.left = `${newX}px`;
      noButton.style.top = `${newY}px`;
    };

    noButton.addEventListener("pointerenter", handleHover);

    return () => {
      noButton.removeEventListener("pointerenter", handleHover);
    };
  }, []);

  const showSuccessPopup = () => {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("sound").play();
  };

  const closePopup = () => {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    const audio = document.getElementById("sound");
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <div className="container">
      <h1>Танилцаж болох уу? ❤️</h1>
      <div className="gif-container">
        <img
          src="https://media2.giphy.com/media/vFKqnCdLPNOKc/giphy.gif"
          alt="Cute gif"
        />
      </div>
      <div className="buttons">
        <button className="yes" onClick={showSuccessPopup}>
          Тэгье
        </button>
        <button className="no" id="noButton">
          Үгүй ээ!
        </button>
      </div>

      <div className="overlay" id="overlay"></div>
      <div className="popup" id="popup">
        <p>коммент дээр лайккккккккк</p>
        <div className="gif-container2">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2plYmNuaXR6Yjc5bDJ3ZDc3eWRmNnRyaDVrMWJpZWl6dWQ4NnFhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DffShiJ47fPqM/giphy.gif"
            alt="Haha gif"
          />
        </div>
        <button onClick={closePopup}>За</button>
      </div>

      {/* ✅ MP3 аудио tag */}
      <audio id="sound" src={sound} preload="auto"></audio>
    </div>
  );
};

export default App;
