import React, { useState } from "react";
import "./App.css";
import { Join } from "./components/Join";
import { Chat } from "./components/Chat";

export function App() {
  const [visibleChat, setVisibleChat] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
    <div className="App">
      {visibleChat ? (
        <Chat socket={socket} />
      ) : (
        <Join setVisibleChat={setVisibleChat} setSocket={setSocket} />
      )}
    </div>
  );
}
