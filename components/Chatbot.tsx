import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Trash2, ArrowUpRight, HelpCircle, Loader } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hello! I am K-Bot, Kamalesh S's Virtual AI Assistant. I can tell you about his B.Tech IT background, Python & full-stack projects, core skills, or resume details. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto focus on input when opened
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setErrorMsg(null);
    const userMessage: ChatMessage = {
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Send the entire conversation history (excluding timestamps)
      const chatHistory = [...messages, userMessage].map(m => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: chatHistory })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to get a response from K-Bot.');
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.content,
        timestamp: new Date()
      }]);
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected connection issue occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hello again! How can I help you explore Kamalesh's portfolio today?",
        timestamp: new Date()
      }
    ]);
    setErrorMsg(null);
  };

  const suggestions = [
    { text: "Tell me about Kamalesh", icon: Sparkles },
    { text: "What projects has he built?", icon: ArrowUpRight },
    { text: "What are his technical skills?", icon: HelpCircle },
    { text: "How can I contact him?", icon: ArrowUpRight }
  ];

  // Helper to render formatting in messages (bold, bullet points)
  const renderMessageContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Bold rendering
      let processedLine = line;
      const boldRegex = /\*\*(.*?)\*\*/g;
      
      // Simple parse for bullet list item
      const isBullet = line.trim().startsWith('* ') || line.trim().startsWith('- ');
      const cleanLineText = isBullet ? line.replace(/^[\s*-]+/, '') : line;

      // React nodes parsing for bold tags
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(cleanLineText)) !== null) {
        if (match.index > lastIndex) {
          parts.push(cleanLineText.substring(lastIndex, match.index));
        }
        parts.push(<strong key={match.index} className="text-[#D4AF37] font-bold">{match[1]}</strong>);
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < cleanLineText.length) {
        parts.push(cleanLineText.substring(lastIndex));
      }

      if (isBullet) {
        return (
          <li key={idx} className="ml-4 list-disc text-sm text-zinc-300 leading-relaxed mb-1.5">
            {parts.length > 0 ? parts : cleanLineText}
          </li>
        );
      }

      return (
        <p key={idx} className="text-sm text-zinc-300 leading-relaxed mb-2 min-h-[1rem]">
          {parts.length > 0 ? parts : cleanLineText}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-40 h-12 sm:h-14 px-4 sm:px-5 bg-gradient-to-r from-[#121217] to-[#1a1a24] border border-[#D4AF37]/30 hover:border-[#D4AF37]/80 hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] rounded-2xl flex items-center gap-2.5 sm:gap-3 text-white transition-all cursor-pointer group shadow-2xl"
        id="kbot-trigger-btn"
        aria-label="Toggle K-Bot AI Assistant"
      >
        <div className="relative">
          <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-green-500 border border-[#121217] rounded-full animate-pulse"></span>
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white">
          Ask K-Bot
        </span>
      </button>

      {/* Chat Window Box */}
      {isOpen && (
        <div 
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[calc(100vh-7rem)] h-[550px] bg-[#0C0C12] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col backdrop-blur-xl animate-fade-in-up"
          id="kbot-chat-window"
        >
          {/* Header */}
          <div className="p-4 bg-[#121217] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl flex items-center justify-center relative">
                <Sparkles className="w-5 h-5 text-[#D4AF37] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#121217] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-wider">K-Bot</h3>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Virtual AI Assistant</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleResetChat}
                className="w-8 h-8 rounded-lg bg-white/3 hover:bg-white/5 text-zinc-400 hover:text-white flex items-center justify-center transition-colors border border-white/5"
                title="Reset Conversation"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/3 hover:bg-white/5 text-zinc-400 hover:text-white flex items-center justify-center transition-colors border border-white/5"
                title="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/5">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-message-in`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs ${
                    msg.role === 'user'
                      ? 'bg-[#D4AF37] text-[#050510] font-medium rounded-tr-none'
                      : 'bg-white/3 border border-white/5 text-zinc-300 rounded-tl-none'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <p className="leading-relaxed break-words">{msg.content}</p>
                  ) : (
                    <div>{renderMessageContent(msg.content)}</div>
                  )}
                  <span
                    className={`block text-[9px] mt-2 text-right ${
                      msg.role === 'user' ? 'text-zinc-800' : 'text-zinc-500'
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 text-red-300 rounded-xl text-xs flex flex-col gap-2">
                <p className="font-bold">K-Bot encountered an issue:</p>
                <p>{errorMsg}</p>
                <button 
                  onClick={() => handleSendMessage(messages[messages.length - 1]?.content || '')}
                  className="self-start text-[10px] underline font-bold hover:text-white uppercase tracking-wider"
                >
                  Retry Message
                </button>
              </div>
            )}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white/3 border border-white/5 rounded-2xl rounded-tl-none p-4 flex items-center gap-2">
                  <Loader className="w-4 h-4 text-[#D4AF37] animate-spin" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">K-Bot is compiling response...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-reply Suggestion Chips */}
          <div className="p-3 bg-[#0A0A10]/90 border-t border-white/5 flex gap-2 overflow-x-auto scrollbar-none select-none">
            {suggestions.map((sug, i) => {
              const SugIcon = sug.icon;
              return (
                <button
                  key={i}
                  onClick={() => handleSendMessage(sug.text)}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-white/3 hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/30 text-[10px] text-zinc-400 hover:text-[#D4AF37] font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  <SugIcon className="w-3 h-3" />
                  <span>{sug.text}</span>
                </button>
              );
            })}
          </div>

          {/* Form Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-[#121217] border-t border-white/5 flex gap-2">
            <input
              type="text"
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask K-Bot about Kamalesh..."
              className="flex-1 bg-white/3 border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/5 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="w-10 h-10 rounded-xl bg-[#D4AF37] disabled:bg-zinc-800 text-[#050510] disabled:text-zinc-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(1.5rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes message-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-message-in {
          animation: message-in 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Chatbot;
