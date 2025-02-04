"use client";
import Image from "next/image";
import SidemenuButton from "./_components/sidemenu-button";
import ChatInputHolder from "./_components/chat-input-holder";
import ChatMessage from "./_components/chat-message";
import { useState } from "react";

function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

function Button() {
  return <button>Click me</button>;
}

type ChatMessageType = {
    user: string;
    message: string;
};
type ChatLogType = ChatMessageType[];

export default function Home() {
  const [chatLog, setChatLog] = useState<ChatLogType>([{
      user: "gpt",
      message: "Hello! How can I help you today?",
  }, {
      user: "me",
      message: "I need help with my order",
  }]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* <header className="bg-background sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
        Next.js sidebar menu
      </header> */}
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-accent1 w-full md:w-60">
          <SidemenuButton />
        </aside>
        <main className="bg-accent2 flex-1">
          <div className="chat-log text-left">
            {chatLog.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </div>
          <ChatInputHolder chatLog={chatLog} setChatLog={setChatLog} />
        </main>
      </div>
    </div>
  );
}

export type { ChatMessageType, ChatLogType };

  // const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  // const [likes, setLikes] = useState(0);

  // function handleClick() {
  //   console.log("Like button clicked!");
  //   setLikes(likes + 1);
  // }

    // <div>
    //   <main>
    //   <div>
    //     <aside>
    //       <Header />
    //       <ul>
    //     {names.map((name) => (
    //       <li key={name}>{name}</li>
    //     ))}
    //   </ul>
    //   <button onClick={handleClick}>Like({likes})</button>
    //     </aside>
    //   </div>
    //     <h1>More homey stuff</h1>
    //   </main>
    // </div>