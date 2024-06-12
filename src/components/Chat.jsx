import React, { useState, useEffect ,useRef } from 'react';
import Image from 'next/image'; 
import { FaArrowRightLong } from "react-icons/fa6";
import TypingAnimation from './magicui/typing-animation';

function Chat() {

    const [userInput, setUserInput] = useState();
    const [questionCount, setQuestionCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef(null); 
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            const newUserMessage = {
                sender: 'user',
                message: userInput,
                image: 'avatar'
            };

            setMessages((prevMessages) => [...prevMessages, newUserMessage]);
            setUserInput('');  // Clear the input field
            setIsLoading(true);

            const newBotMessage = botMessages[questionCount % botMessages.length];

            setTimeout(() => {
                setMessages((prevMessages) => [...prevMessages, newBotMessage]);
                setIsLoading(false);
                setQuestionCount((prevCount) => prevCount + 1);  // Increment question count
            }, 2000);  // 1 second delay
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const botMessages = [
                {
                    sender: 'chatbot',
            message: `Sure, I'd be happy to help! 🚀
        Raising funds for a fintech startup involves several steps. Here are some key points to consider:
        1. Self-funding, Crowdfunding, or Strategic Partnerships: Initially, you can consider     \n self-funding, crowdfunding, or forming strategic partnerships. You can also \n explore government grants or research grants if applicable.
        2. Angel Investors and Incubators: In the early stages, you can look at angel \n investors or consider applying to various incubators and accelerator programs.
        3. Venture Capital: If you decide to pursue funding from an institutional investor,\n venture capital firms could be a good option.`,
                    image: "chatbot"
        },
        {
            sender: 'chatbot',
            message: `Sure, I'd be happy to help! 🚀
Raising funds for a fintech startup involves several steps. Here are some key points to consider:
Self-funding, Crowdfunding, or Strategic Partnerships: Initially, you can consider self-funding, crowdfunding, or forming strategic partnerships. You can also explore government grants or research grants if applicable.
Angel Investors and Incubators: In the early stages, you can look at angel investors or consider applying to various incubators and accelerator programs.
Venture Capital: If you decide to pursue funding from an institutional investor, venture capital firms could be a good option.

Check our articles below for some more help:`,
            image: "chatbot"
        },
     
        
    ]

    const [messages, setMessages] = useState([
        {
            sender: 'chatbot',
            message: "Hey, how can I help you?",
            image: "chatbot"
        },     
    ]);
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    return (
        <main className="flex-1 p-5 m-5">
             
          


            <div ref={chatContainerRef} className="bg-[#12343B] p-10 rounded-b-xl h-[350px] overflow-y-scroll no-scrollbar ">
                <div className="flex flex-col gap-4 p-5 ">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} gap-4 items-start`}>
                            <div className="rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 w-10 h-10 flex items-center justify-center">
                                <Image src={`/${msg.image}.png`} height={40} width={40} alt={msg.sender} className="w-full h-full object-cover" />
                            </div>
                            <div className={`rounded-lg text-white ${msg.sender === 'user' ? 'border p-4 border-[#2A7D82]' : ' '}`}>
                                {msg.sender == 'user' ?
                                    <p className="whitespace-pre-wrap text-lg font-lato">{msg.message}</p> :
                                    <TypingAnimation
                                        className="whitespace-pre-wrap text-lg font-lato"
                                        text={msg.message}
                                    />
                                    
                                }
                              
                               
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start gap-4 items-start">
                            <div className="rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 w-10 h-10 flex items-center justify-center">
                                <Image src="/chatbot.png" height={40} width={40} alt="chatbot" className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-lg text-white border p-4 border-[#2A7D82]">
                                <p className="whitespace-pre-wrap text-lg font-lato">Dexter is thinking</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>

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




