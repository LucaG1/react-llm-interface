import React, { useState } from 'react';
import { ChatMessageType, ChatLogType } from '../page';

// type the passing of chatLog
type ChatLogStateType = {
    chatLog: ChatLogType;
    setChatLog: React.Dispatch<React.SetStateAction<ChatLogType>>;
};

const ChatInputHolder: React.FC<ChatLogStateType> = ({chatLog, setChatLog}) => {
    const [input, setInputValue] = useState<string>('');

    // extract chatlog from props
    // const [chatLog, setChatLog] = useState<ChatLogType>(props);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle the submit logic here
        console.log(input);
        // typescript append input to chatlog
        setChatLog([...chatLog, { user: "me", message: input }]);
        setInputValue('');
        // fetch response from GPT-3
        // TODO

    };

    return (
        <form onSubmit={handleSubmit} className="chat-input-holder p-24 absolute bottom-0 w-full">
            <textarea
                // type="text"
                value={input}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="chat-input bg-accent1 px-12 py-3 w-9/12 border-none outline-none shadow-lg text-lg rounded-lg"
                rows={1}
            />
            <button type="submit" className="submit-button">Send</button>
        </form>
    );
};

export default ChatInputHolder;