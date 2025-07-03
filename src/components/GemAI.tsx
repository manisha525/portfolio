"use client";
import { useState, useRef, useEffect } from "react";
import { FiSend, FiX, FiCheck, FiCopy } from "react-icons/fi";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Image from 'next/image';

import { logSessionEvent } from "@/lib/logSessionEvent";


export default function GemAI() {
  // const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content:
        "Hi! I am GemAI. Ask me anything about Manisha Shah!",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null); // track which message was copied
  const bottomRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  // gemai icon work on refresh
  // useEffect(() => setMounted(true), []);
  // if (!mounted) return null;
  

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      {
        role: "user",
        content: input,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ];
    setMessages(newMessages);
    setInput("");

    // Get session_id from localStorage
    const session_id = localStorage.getItem("sessionId") || "unknown";
    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

    const res = await fetch(`${backendURL}/ai-agent/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: input,
        session_id: session_id 
      }),
    });

    const data = await res.json();

  // for resume log
    const aiResponse = data.response || "Sorry, I couldn't generate a response.";
    // If resume link is included, log it
    //if (aiResponse.includes("/files/Resume_Manisha.pdf")) {
      //await logSessionEvent("clicked_resume", "from GemAI");
    //}

    setMessages([
      ...newMessages,
      {
        role: "ai",
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  // Function to copy message content to clipboard
  const handleCopy = async (content: string, index: number) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000); // reset after 2s
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div
   //   className="fixed bottom-5 right-5 z-[100] cursor-pointer bg-white dark:bg-gray-800 border border-blue-300 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition"
        className="fixed bottom-[20px] right-[20px] sm:bottom-[60px] sm:right-[25px] w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] cursor-pointer rounded-full border border-blue-400 bg-white dark:bg-gray-900 shadow-lg hover:scale-105 transition flex items-center justify-center"
        onClick={() => setShow(!show)}
      >
        {show ? (
          <FiX className="text-blue-600" size={24} />
        ) : (
          <Image
            src="/images/gemailogo.webp"
            alt="GemAI"
            width={47}
            height={47} 
            className="w-[47px] h-[47px] rounded-full object-cover"
          />
        )}

      </div>

      {/* Chat Window */}
      {show && (
        <motion.div
          className="fixed z-[100] bottom-[100px] right-[10px] w-[90vw] max-w-[400px] h-[75vh] sm:w-[400px] sm:h-[550px] sm:right-[60px] bg-white shadow-xl rounded-lg border border-gray-300 flex flex-col overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-lg bg-blue-600 text-white text-center p-3 font-semibold">
            GemAI - Ask About Manisha
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className="w-full flex flex-col">
                {/* Message Bubble */}
                <motion.div
                  className={`p-2 rounded-lg text-md max-w-[75%] whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-blue-100 text-blue-800 self-end"
                      : "bg-gray-100 text-gray-800 self-start"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <ReactMarkdown
                    components={{
                      a: (props) => {
                        const href = props.href || "";

                        const handleClick = () => {
                          if (href.includes("/files/Resume_Manisha.pdf")) {
                            logSessionEvent("clicked_resume", "from GemAI");
                          } else if (href.includes("linkedin.com/in/shah-manisha")) {
                            logSessionEvent("clicked_social", "linkedin from GemAI");
                          } else if (href.includes("github.com/manisha525")) {
                            logSessionEvent("clicked_social", "github from GemAI");
                          } else if (href.includes("mailto:shah98176@gmail.com")) {
                            logSessionEvent("clicked_social", "email from GemAI");
                          }
                        };

                        return (
                          <a
                            {...props}
                            onClick={handleClick}
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        );
                      }
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </motion.div>

                {/* Timestamp + Status or Copy Icon */}
                <div
                  className={`mt-1 text-sm text-gray-500 flex items-center gap-2 ${
                    msg.role === "user"
                      ? "justify-end pr-1 self-end"
                      : "justify-start pl-1 self-start"
                  }`}
                >
                  <span>{msg.timestamp}</span>

                  {/* For user: show check icon (message sent) */}
                  {msg.role === "user" && <FiCheck className="text-xs" />}

                  {/* For AI: show copy icon that toggles on click */}
                  {msg.role === "ai" && (
                    <button
                      onClick={() => handleCopy(msg.content, idx)}
                      className="focus:outline-none"
                      title="Copy response"
                    >
                      {copiedIndex === idx ? (
                        <FiCheck className="text-md text-green-500" />
                      ) : (
                        <FiCopy className="text-md hover:text-blue-500" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div ref={bottomRef} />
          </div>

          {/* Input Section */}
          <div className="p-2 border-t flex items-center gap-2">
            <input
             // className="flex-1 border border-gray-300 p-2 rounded-lg text-sm"
              className="text-md flex-1 border border-gray-300 p-2 rounded-lg bg-gray-100 dark:bg-gray-100 placeholder-gray-500 text-gray-900"
              placeholder="Ask about Manisha..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
              onClick={sendMessage}
            >
              <FiSend size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
