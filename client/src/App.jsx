import { useState } from "react";
import "./App.css";
import { Join } from "./components/Join";
import { Chat } from "./components/Chat";

export function App() {
  const [visibleChat, setVisibleChat] = useState(false);

  return (
    <div>
      {visibleChat ? <Chat /> : <Join setVisibleChat={setVisibleChat} />}
    </div>
  );
}
