import React, { useRef } from "react";

export function Join({ setVisibleChat }) {
  const usernameRef = useRef();

  const handleSubmit = () => {
    const username = usernameRef.current.value;

    if (!username.trim()) return;

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
