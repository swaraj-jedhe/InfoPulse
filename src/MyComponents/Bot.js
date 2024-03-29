import React, { useRef, useState, useEffect } from "react";
import download from "./bot.jpeg"

const Bot = () => {
  const chatbotRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      // Click outside the chatbot, close it
      setIsOpen(false);
    } else {
      // Toggle chatbot visibility on icon click
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      ref={chatbotRef}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "2",
        cursor: "pointer",
      }}
    >
      <div onClick={handleClick}>
        <img
          src={download}
          alt="Chat Icon"
          style={{ width: "80px", height: "auto" }}
        />
      </div>
      {isOpen && (
        <iframe src='https://webchat.botframework.com/embed/testingbotservice11-bot?s=bSCQ7ZvjX6Q.QZUo_JlISe7aDw-1GuPK6TgFqUCjtL8ko92fEQaq_x4'  style={{ minWidth: "400px", width: "100%", minHeight: "300px"}}></iframe>
      )}
    </div>
  );
};

export default Bot;
