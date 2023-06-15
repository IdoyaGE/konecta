import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import "../components/Chat.css";
import logoAtras from "../images/Icon/back.png";
import { NavLink } from "react-router-dom";

export const Chat = (props) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");
  const [showAutoMessage, setShowAutoMessage] = useState(false);

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [room]);

  const getUserName = (email) => {
    const atIndex = email.indexOf("@");
    if (atIndex !== -1) {
      return email.substring(0, atIndex);
    }
    return email;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: getUserName(auth.currentUser.email),
      room,
    });
    setNewMessage("");
    //Para el mensaje automático
    setShowAutoMessage(true);
  };

  useEffect(() => {
    if (showAutoMessage) {
      const timer = setTimeout(() => {
        setShowAutoMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAutoMessage]);

  return (
    <div className='chat-app'>
      <div className='header'>
        <h3>{room.toUpperCase()}</h3>
      </div>
      <NavLink to={"/start"}>
        <img className='bton-volver-chat' src={logoAtras} alt='tramites' />
      </NavLink>
      <div className='messages'>
        {messages.map((message) => (
          <div
            className={`message ${
              message.user === getUserName(auth.currentUser.email)
                ? "user-message"
                : ""
            }`}
            key={message.id}
          >
            <span className='user'>
              <b>{message.user}</b>
              <br />
            </span>
            {message.text}
          </div>
        ))}
      </div>
      {showAutoMessage && (
        <div className='auto-message'>
          En breve nos pondremos en contacto contigo y resolveremos tus dudas
        </div>
      )}
      <form onSubmit={handleSubmit} className='new-message-form'>
        <button className='linea-separar'></button>
        <input
          className='new-message-input'
          placeholder='Escribe un mensaje...'
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type='submit' className='send-button-chat'>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chat;
