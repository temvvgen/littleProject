import React, { useEffect } from "react";
import "./App.css";
import sound from "./assets/dieWithSmile.mp3";
import axios from "axios";
import { FaRegSmileWink } from "react-icons/fa";

const App = () => {
  useEffect(() => {
    const noButton = document.getElementById("noButton");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");

    const handleHover = () => {
      const container = document.querySelector(".container");
      const containerRect = container.getBoundingClientRect();

      const maxX = container.clientWidth - noButton.offsetWidth;
      const maxY = container.clientHeight - noButton.offsetHeight;

      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;

      noButton.style.position = "absolute";
      noButton.style.left = `${newX}px`;
      noButton.style.top = `${newY}px`;
    };

    noButton.addEventListener("pointerenter", handleHover);

    return () => {
      noButton.removeEventListener("pointerenter", handleHover);
    };
  }, []);

  const showSuccessPopup = async () => {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("sound").play();

    try {
      await axios.post("https://littleproject.onrender.com/api/click", {
        click: "yes",
      });
      console.log("hadgallaa");
    } catch (error) {
      console.log(error);
    }
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
        <p>Би бичнээ хүлээж байгаарай {<FaRegSmileWink />} </p>
        <div className="gif-container2">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2plYmNuaXR6Yjc5bDJ3ZDc3eWRmNnRyaDVrMWJpZWl6dWQ4NnFhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DffShiJ47fPqM/giphy.gif"
            alt="gif"
          />
        </div>
        <button onClick={closePopup}>За</button>
      </div>

      <audio id="sound" src={sound} preload="auto"></audio>
    </div>
  );
};

export default App;
