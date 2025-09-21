'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  FiMessageCircle as MessageCircle, 
  FiX as X, 
  FiSend as Send, 
  FiUser as User, 
  FiHeadphones as Headphones 
} from 'react-icons/fi';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([]);
  const [inputValue, setInputValue] = useState('');
  const [isFirstInteraction, setIsFirstInteraction] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAutoResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();

    // Check for greetings
    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      if (isFirstInteraction) {
        setIsFirstInteraction(false);
        return `Hi! 👋 Welcome to CHILPTECH - Rwanda's trusted customer support partner. We provide 24/7 multilingual support (English, Kinyarwanda, French). How can we help?`;
      } else {
        return `Hello again! How can we help you further?`;
      }
    }

    // Check for questions (contains question words or ends with ?)
    const questionWords = ['what', 'how', 'when', 'where', 'why', 'who', 'can', 'do', 'does', 'is', 'are', 'will', 'would', 'could'];
    const hasQuestionWord = questionWords.some(word => lowerMessage.includes(word));
    const endsWithQuestion = message.trim().endsWith('?');

    if (hasQuestionWord || endsWithQuestion) {
      return `Thanks for your question! Contact us for detailed info:\n📧 chilptechfirm@gmail.com\n📞 +250 780658582\n💬 WhatsApp available\n📍 Kigali Tech Hub`;
    }

    // Check for service-related keywords
    if (lowerMessage.includes('service') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
      return `Our services:\n• 24/7 Phone Support\n• Email Management\n• Live Chat\n• Social Media\n• Help Desk\n\nContact: chilptechfirm@gmail.com`;
    }

    // Check for pricing
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return `We offer flexible pricing & free 14-day trial!\n📧 chilptechfirm@gmail.com\n📞 +250 780658582\nLet's discuss your needs!`;
    }

    // Default response
    return `Thanks for reaching out! Contact us:\n📧 chilptechfirm@gmail.com\n📞 +250 780658582\n💬 WhatsApp available\nWe're here to help!`;
  };

  const sendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = { text: inputValue, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Generate auto-response
    setTimeout(() => {
      const response = generateAutoResponse(inputValue);
      const botMessage = { text: response, sender: 'bot' as const };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-[#1e40af] text-white p-4 rounded-full shadow-xl cursor-pointer z-50 hover:bg-blue-700 transition duration-300 transform hover:scale-110"
      >
        <MessageCircle className="text-2xl" />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-2xl p-6 w-80 z-50 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">Live Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              <X className="text-lg" />
            </button>
          </div>

          {/* Messages */}
          <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className="flex items-start space-x-2">
                {message.sender === 'user' ? (
                  <>
                    <div className="flex-1"></div>
                    <div className="bg-[#1e40af] text-white rounded-lg p-2 max-w-xs">
                      <p className="text-xs whitespace-pre-line">{message.text}</p>
                    </div>
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="text-gray-600 text-xs" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-6 h-6 bg-[#1e40af] rounded-full flex items-center justify-center flex-shrink-0">
                      <Headphones className="text-white text-xs" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2 max-w-xs">
                      <p className="text-xs text-gray-800 whitespace-pre-line">{message.text}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e40af] text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-[#1e40af] text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <Send className="text-lg" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
