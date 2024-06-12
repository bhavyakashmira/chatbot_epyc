import React, { useState, useEffect ,useRef } from 'react';
import Image from 'next/image'; 
import { FaArrowRightLong } from "react-icons/fa6";
import TypingAnimation from './magicui/typing-animation';
import SlightFlip from './magicui/flip-text';
import BoxReveal from './magicui/box-reveal';
import Card from "./Card.jsx"
import { botMessages } from '../constant/data';

function Chat() {
    // State to manage user input
    const [userInput, setUserInput] = useState('');
    // State to keep track of the number of questions asked
    const [questionCount, setQuestionCount] = useState(0);
    // State to show loading status
    const [isLoading, setIsLoading] = useState(false);
    // Reference to the chat container for scrolling
    const chatContainerRef = useRef(null);

    // Function to handle input change
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    // Function to handle sending message
    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            // Create new user message
            const newUserMessage = {
                sender: 'user',
                message: userInput,
                image: 'avatar'
            };

            // Add user message to the chat
            setMessages((prevMessages) => [...prevMessages, newUserMessage]);
            setUserInput(''); // Clear the input field
            setIsLoading(true); // Set loading status

            // Get the next bot message
            const newBotMessage = botMessages[questionCount % botMessages.length];

            // Simulate bot response delay
            setTimeout(() => {
                setMessages((prevMessages) => [...prevMessages, newBotMessage]);
                setIsLoading(false); // Reset loading status
                setQuestionCount((prevCount) => prevCount + 1); // Increment question count
            }, 2000); // 2 second delay
        }
    };

    // Function to handle pressing Enter key
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    // Initial chat messages
    const [messages, setMessages] = useState([
        {
            sender: 'chatbot',
            message: "Hey, how can I help you?",
            image: "chatbot"
        },
    ]);

    // Scroll to the bottom of the chat container when messages change
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    return (
        <main className="flex-1 p-5 m-5">
            {/* Chat container */}
            <div ref={chatContainerRef} className="bg-[#12343B] p-10 rounded-b-xl h-[350px] overflow-y-scroll no-scrollbar">
                <div className="flex flex-col gap-4 p-5">
                    {/* Map through messages and display them */}
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} gap-4 items-start`}>
                            <div className="rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 w-10 h-10 flex items-center justify-center">
                                <Image src={`/${msg.image}.png`} height={40} width={40} alt={msg.sender} className="w-full h-full object-cover" />
                            </div>
                            <div className={`rounded-lg text-white ${msg.sender === 'user' ? 'border p-4 border-[#2A7D82]' : ''}`}>
                                {msg.sender === 'user' ? (
                                    <p className="whitespace-pre-wrap text-lg font-lato">{msg.message}</p>
                                ) : (
                                    <BoxReveal boxColor={"#2A7D82"} duration={0.5}>
                                        <TypingAnimation className="whitespace-pre-wrap text-lg font-lato" text={msg.message} />
                                        {msg.card ? <Card /> : <></>}
                                    </BoxReveal>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Display loading animation when waiting for bot response */}
                    {isLoading && (
                        <div className="flex justify-start gap-4 items-start">
                            <div className="rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 w-10 h-10 flex items-center justify-center">
                                <Image src="/chatbot.png" height={40} width={40} alt="chatbot" className="w-full h-full object-cover" />
                            </div>
                            <SlightFlip className="text-lg tracking-[-0.1em] text-white" word="dexter is thinking ..." />
                        </div>
                    )}
                </div>
            </div>

            {/* Input field and send button */}
            <div className="absolute bottom-0 left-4 right-4 font-lato flex items-center border border-[#2A7D82] p-5 m-10 ml-20 mr-20 rounded-lg bg-[#12343B]">
                <input
                    type="text"
                    placeholder="Talk with Dexter..."
                    className="text-xl bg-transparent flex-1 focus:outline-none text-white"
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <FaArrowRightLong
                    size={25}
                    color='#FFDDBD'
                    onClick={handleSendMessage}
                />
            </div>
        </main>
    );
}

export default Chat;




