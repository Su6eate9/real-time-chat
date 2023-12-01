import React, { useRef } from "react";
import io from "socket.io-client";

export function Join({ setVisibleChat, setSocket }) {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    const socket = io("http://localhost:3001");

    if (!username.trim()) return;
    socket.emit("set_username", username);

    setSocket(socket);
    setVisibleChat(true);
  };

  return (
    <div>
      <h1>Join</h1>
      <input type="text" ref={usernameRef} placeholder="Nome de usuário" />
      <button onClick={() => handleSubmit()}>Entrar</button>
    </div>
  );
}
