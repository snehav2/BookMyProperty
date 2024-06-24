import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="/sneha.jpg"
            alt=""
          />
          <span>Sneha Verma</span>
          <p>Cold Coffee</p>
        </div>
        
        <div className="message">
          <img
            src="/Didi.png"
            alt=""
          />
          <span>Didi</span>
          <p>...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="/sneha.jpg"
                alt=""
              />
              Sneha Verma
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>...</p>
              <span>1 hour ago</span>
            </div>
            
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
