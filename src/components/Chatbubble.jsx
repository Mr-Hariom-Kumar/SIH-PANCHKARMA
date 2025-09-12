import React from "react";
import { Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatBubble = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chat"); // navigate to your chatbot page
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounce cursor-pointer hover:bg-green-700 transition"
    >
      <Bot size={28} className="text-white" />
    </div>
  );
};

export default ChatBubble;
