import React from 'react';
import { ChatMessageType } from '../page';
// correctly typed method header

const ChatMessage: React.FC<{message: ChatMessageType}> = ({ message }) => {
    return (
        <div className={`chat-message px-24 py-3 ${message.user == "gpt" ? "bg-accent4" : "bg-accent2"}`}>
        <div className="chat-message-center max-w-640 flex">
          <div className={`avatar rounded-full w-12 h-12 ${message.user == "gpt" ? "bg-slate-400": "bg-white" }`}></div>
          <div className="message px-24">
            <p>{ message.message }</p>
          </div>
        </div>
      </div>
    );
};

export default ChatMessage;