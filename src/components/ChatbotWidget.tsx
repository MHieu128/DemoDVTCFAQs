"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Xin chào! Tôi có thể giúp gì cho bạn về thông tin tuyển sinh?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      // Connecting to the requested n8n webhook for RAG FAQs
      const response = await fetch(
        "http://n8n.codeandcafe.com/webhook/8419b4dc-924d-4c32-825c-a045b02206ec/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage }),
        },
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      // Assuming the n8n webhook returns a JSON with { "response": "..." } or similar structure.
      // We will handle generic response formats here.
      const botReply =
        data?.response ||
        data?.output ||
        data?.text ||
        data?.message ||
        "Xin lỗi, tôi không thể trả lời lúc này. Vui lòng thử lại sau.";

      setMessages((prev) => [...prev, { role: "bot", content: botReply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Xin lỗi, đã xảy ra lỗi kết nối. Vui lòng thử lại sau.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? "w-[350px] sm:w-[400px]" : "w-16"}`}
      >
        {/* Chat Window */}
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl flex flex-col h-[500px] border border-gray-100 overflow-hidden mb-4 animate-in slide-in-from-bottom-5">
            {/* Header */}
            <div className="bg-blue text-white p-4 flex justify-between items-center rounded-t-2xl">
              <div>
                <h3 className="font-bold text-lg font-roboto">
                  Tư vấn tuyển sinh
                </h3>
                <p className="text-xs opacity-80">Trực tuyến 24/7</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50/50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-tr-sm"
                        : "bg-white border border-gray-100 text-gray-800 shadow-sm rounded-tl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-3 rounded-2xl shadow-sm rounded-tl-sm">
                    <Loader2 className="animate-spin text-blue" size={20} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Gợi ý: Tên ngành + nội dung cần hỏi?"
                  className="flex-1 bg-gray-50 focus:bg-white border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-blue transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-blue hover:bg-blue-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2.5 rounded-full transition-colors flex shrink-0 items-center justify-center shadow-md"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* FAB Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-blue hover:bg-blue-dark text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105 ml-auto"
            title="Tư vấn trực tuyến"
          >
            <MessageCircle size={32} />
          </button>
        )}
      </div>
    </>
  );
}
