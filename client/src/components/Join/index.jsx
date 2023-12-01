import React, { useRef } from "react";
import io from "socket.io-client";
import { Input, Button } from "@mui/material";
import styles from "./styles.module.css";

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

  const getEnterKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className={styles["join-container"]}>
      <h2>Chat em tempo real</h2>
      <Input
        inputRef={usernameRef}
        onKeyDown={(e) => getEnterKey(e)}
        placeholder="Nome de usuário"
      />
      <Button sx={{ mt: 2 }} onClick={() => handleSubmit()} variant="contained">
        Entrar
      </Button>
    </div>
  );
}
