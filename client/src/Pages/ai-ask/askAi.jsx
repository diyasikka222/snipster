import React, { useState, useRef, useEffect } from "react";
import "./askAI.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AskAI = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleAskAI = async () => {
    if (!prompt.trim()) return;

    const userMessage = { role: "user", text: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setLoading(true);
    setError("");
    toast.info("Thinking...");

    try {
      const res = await fetch("http://localhost:5001/genai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.response) {
          const aiMessage = { role: "ai", text: data.response };
          setMessages((prev) => [...prev, aiMessage]);
          toast.success("AI responded!");
        } else {
          toast.error(data.error || "Something went wrong.");
          setError(data.error || "Something went wrong.");
        }
      } else {
        toast.error("Server returned an error.");
        setError("Server returned an error.");
      }
    } catch (err) {
      toast.error("Server error: " + err.message);
      setError("Server error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="aiester-heading">
        AIester - AI That Thinks in Syntax
      </h2>
      <div className="ask-ai-container">
        <div className="chat-window" ref={chatContainerRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {error && <div className="error">{error}</div>}

        <div className="input-area">
          <textarea
            placeholder="Type your question..."
            value={prompt}
            onChange={handleChange}
            className="ask-ai-input"
            rows="1"
          />
          <button
            className="ask-ai-button"
            onClick={handleAskAI}
            disabled={loading || !prompt.trim()}
          >
            {loading ? "..." : "Send"}
          </button>
        </div>

        <ToastContainer
          className="click-noti"
          position="bottom-center"
          autoClose={3000}
        />
      </div>
    </>
  );
};

export default AskAI;
