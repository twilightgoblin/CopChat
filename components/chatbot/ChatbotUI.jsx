"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { X, Send, ChevronLeft, Bot, Loader2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { cn } from '../../utils/helpers';

// Memoized message component to prevent unnecessary re-renders
const Message = React.memo(({ message, onOptionSelect }) => {
  return (
    <div className={cn(
      "flex w-full",
      message.type === "user" ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-lg p-3",
        message.type === "user"
          ? "bg-blue-500 text-white"
          : "bg-gray-100 text-gray-800"
      )}>
        {message.content && typeof message.content === 'object' ? (
          <div className="prose prose-sm max-w-none">
            {message.content}
          </div>
        ) : (
          <div>{message.content}</div>
        )}
        {message.options && Array.isArray(message.options) && message.options.length > 0 && (
          <div className="mt-2 space-y-2">
            {message.options.map((option) => (
              option && option.label && (
                <Button
                  key={option.value}
                  variant="outline"
                  size="sm"
                  className="w-full text-left"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.label}
                </Button>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

Message.displayName = 'Message';

/**
 * Chatbot UI Component
 * @param {Object} props - Component props
 * @param {import('./types').Option[]} props.mainOptions - Main options for the chatbot
 * @param {string} [props.initialMessage] - Initial message from the bot
 * @param {boolean} [props.initialMessageTyped] - Whether to animate the initial message
 * @returns {JSX.Element}
 */
export default function ChatbotUI({
  mainOptions,
  initialMessage = "Welcome to Chikkaballapura Police Services! How can I assist you today? You can type your query or select from the options below.",
  initialMessageTyped = false,
}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [currentOptions, setCurrentOptions] = useState(mainOptions);
  const [history, setHistory] = useState([]);
  const messagesEndRef = useRef(null);
  const [typingIndicator, setTypingIndicator] = useState({ isTyping: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [hasNewMessages, setHasNewMessages] = useState(false);
  const typingIntervalRef = useRef(null);

  // Memoize the main options to prevent unnecessary re-renders
  const memoizedMainOptions = useMemo(() => mainOptions, [mainOptions]);

  // Cleanup typing interval on unmount
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  /**
   * Optimized typing animation with requestAnimationFrame
   */
  const simulateBotTyping = useCallback((message, options) => {
    setTypingIndicator({ isTyping: true, message: "" });
    let i = 0;
    const startTime = performance.now();
    const messageLength = message.length;
    
    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / (messageLength * 30), 1);
      const currentLength = Math.floor(progress * messageLength);
      
      if (currentLength > i) {
        setTypingIndicator((prev) => ({
          ...prev,
          message: message.slice(0, currentLength)
        }));
        i = currentLength;
      }
      
      if (progress < 1) {
        typingIntervalRef.current = requestAnimationFrame(animate);
      } else {
        setTypingIndicator({ isTyping: false, message: "" });
        setMessages((prev) => [...prev, { type: "bot", content: message, options }]);
        setHasNewMessages(true);
      }
    };
    
    typingIntervalRef.current = requestAnimationFrame(animate);
  }, []);

  // Initialize with welcome message
  useEffect(() => {
    if (!initialMessageTyped) {
      simulateBotTyping(initialMessage, memoizedMainOptions);
    } else {
      setMessages([{ type: "bot", content: initialMessage, options: memoizedMainOptions }]);
    }
  }, [initialMessageTyped, initialMessage, memoizedMainOptions, simulateBotTyping]);

  // Auto-scroll to bottom on initial load
  useEffect(() => {
    scrollToBottom();
  }, []);

  // Focus input on load
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle scroll events with throttling
  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { scrollTop, scrollHeight, clientHeight } = container;
          const isScrolledUp = scrollHeight - scrollTop - clientHeight > 100;
          setShowScrollButton(isScrolledUp && hasNewMessages);
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [hasNewMessages]);

  /**
   * Scroll to the bottom of the chat
   */
  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      setHasNewMessages(false);
      setShowScrollButton(false);
    }
  }, []);

  // Update to show scroll button when new messages arrive
  useEffect(() => {
    if (messages.length > 0) {
      const container = chatContainerRef.current;
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        const isScrolledUp = scrollHeight - scrollTop - clientHeight > 100;
        
        // Always scroll to bottom when new message arrives
        scrollToBottom();
        
        // Only show scroll button if user has scrolled up
        if (isScrolledUp) {
          setShowScrollButton(true);
          setHasNewMessages(true);
        }
      }
    }
  }, [messages, scrollToBottom]);

  // Memoize option selection handler
  const handleOptionSelect = useCallback((option) => {
    setMessages((prev) => [...prev, { type: "user", content: option.label }]);

    if (option.subOptions) {
      setHistory((prev) => [...prev, currentOptions]);
      setCurrentOptions(option.subOptions);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: `You've selected ${option.label}. Please choose a sub-option:`,
          options: option.subOptions,
        },
      ]);
    } else if (option.info) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", content: "Here's the information you requested:" },
        { type: "bot", content: option.info, options: undefined },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: `You've selected ${option.label}. How can I help you with this?`,
          options: undefined,
        },
      ]);
    }
    setTimeout(scrollToBottom, 100);
  }, [currentOptions, scrollToBottom]);

  /**
   * Handle greeting messages
   * @param {string} input - User input
   * @returns {Object|null} - Response object or null
   */
  const handleGreeting = (input) => {
    const lowercaseInput = input.toLowerCase();
    const greetings = {
      hello: ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening", "namaste", "namaskara", "howdy"],
      goodbye: ["bye", "goodbye", "see you", "farewell", "take care"],
    };

    if (greetings.hello.some((greeting) => lowercaseInput.includes(greeting))) {
      return {
        message: "Hello! How can I assist you today? Here are our main topics:",
        showOptions: true,
      };
    } else if (greetings.goodbye.some((greeting) => lowercaseInput.includes(greeting))) {
      return {
        message: "Goodbye! Thank you for using our service. Stay safe!",
        showOptions: false,
      };
    }
    return null;
  };

  /**
   * Handle yes/no responses
   * @param {string} input - User input
   * @returns {Object|null} - Response object or null
   */
  const handleYesNo = (input) => {
    const lowercaseInput = input.toLowerCase();
    const yesPatterns = ["yes", "yeah", "yep", "sure", "okay", "ok", "alright", "fine", "correct", "right", "absolutely", "definitely", "certainly", "indeed", "agreed", "roger", "affirmative", "aye"];
    const noPatterns = ["no", "nope", "nah", "negative", "not", "never", "don't", "won't", "can't", "shouldn't", "wouldn't", "couldn't", "refuse", "decline", "reject"];

    if (yesPatterns.some((pattern) => lowercaseInput.includes(pattern))) {
      return {
        message: "Great! How else can I assist you?",
        showOptions: true,
      };
    } else if (noPatterns.some((pattern) => lowercaseInput.includes(pattern))) {
      return {
        message: "I understand. Would you like to try something else?",
        showOptions: true,
      };
    }
    return null;
  };

  /**
   * Get contextual response based on query
   * @param {string} query - User query
   * @returns {string|null} - Response or null
   */
  const getContextualResponse = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    // Check for service-related queries
    const serviceQueries = ["services", "main", "features", "options", "menu", "what can you do", "help me", "show me", "list", "categories", "topics"];
    if (serviceQueries.some(word => lowercaseQuery.includes(word))) {
      return {
        message: "Here are our main services and features:",
        showOptions: true
      };
    }

    // Check for thank you messages
    const thankYouPatterns = ["thank", "thanks", "dhanyavad", "appreciate", "grateful", "obliged"];
    if (thankYouPatterns.some(pattern => lowercaseQuery.includes(pattern))) {
      const thankYouResponses = [
        "You're welcome! Is there anything else I can help you with?",
        "Happy to help! Let me know if you need anything else.",
        "My pleasure! Do you have any other questions?",
        "You're most welcome! Feel free to ask if you need any other assistance.",
        "Glad I could help! Don't hesitate to reach out if you have more questions.",
        "It's my pleasure to assist you! Is there anything else you'd like to know?",
        "Thank you for your kind words! How else can I assist you today?",
        "You're welcome! I'm here to help with any other police-related services you might need.",
        "Happy to be of service! What else can I help you with?",
        "Thank you for using our services! Let me know if you need any further assistance."
      ];
      return {
        message: thankYouResponses[Math.floor(Math.random() * thankYouResponses.length)],
        showOptions: false
      };
    }

    // Common phrases and their responses
    const contextualResponses = {
      help: [
        "How can I assist you today?",
        "I'm here to help. What do you need assistance with?",
        "Please let me know what kind of help you need.",
      ],
      emergency: [
        "For immediate emergency assistance, please dial 112.",
        "If this is an emergency, call 112 right away.",
        "Emergency services are available 24/7 at 112.",
      ],
      police: [
        "You can reach the police emergency number at 112.",
        "For non-emergency police matters, visit your nearest police station.",
        "How can I assist you with police-related services?",
      ],
      complaint: [
        "You can file a complaint at your nearest police station.",
        "For online complaint status check, visit the police portal.",
        "Would you like to know how to file a complaint?",
      ],
      fir: [
        "FIRs must be filed in person at the police station.",
        "You can check your FIR status online through the police portal.",
        "Would you like to know the procedure for filing an FIR?",
      ],
      lost: [
        "You can report lost items at your nearest police station.",
        "Visit the Lost & Found portal to check for your lost items.",
        "Would you like to know how to report lost property?",
      ],
      found: [
        "Found items should be handed over to the nearest police station.",
        "You can check the Lost & Found portal for found items.",
        "Would you like to know how to handle found property?",
      ],
      traffic: [
        "For traffic-related issues, visit the traffic police station.",
        "You can report traffic violations through the police portal.",
        "Would you like to know about traffic rules and regulations?",
      ],
      cyber: [
        "For cybercrime complaints, call 1930 or visit the cybercrime portal.",
        "You can report online fraud and cybercrimes through the official portal.",
        "Would you like to know how to report cybercrime?",
      ],
      station: [
        "You can find your nearest police station using our station locator.",
        "Police station information is available in the Police Information section.",
        "Would you like to know the contact details of your nearest police station?",
      ],
      permission: [
        "For event permissions, visit the Loudspeaker & Events Permission section.",
        "You can apply for event permissions online through our portal.",
        "Would you like to know how to get permission for an event?",
      ],
      verification: [
        "For tenant and domestic help verification, visit your local police station.",
        "You can get verification services at the police station.",
        "Would you like to know about the verification process?",
      ],
      noc: [
        "For No Objection Certificates, visit your local police station.",
        "You can apply for NOC at the police station with required documents.",
        "Would you like to know about the NOC application process?",
      ],
    };

    // Check for matches in contextual responses
    for (const [key, responses] of Object.entries(contextualResponses)) {
      if (lowercaseQuery.includes(key)) {
        return {
          message: responses[Math.floor(Math.random() * responses.length)],
          showOptions: false
        };
      }
    }

    // Check for common question patterns
    const questionPatterns = {
      "how to": "I can guide you through the process. Please select the relevant option from the menu.",
      "where is": "You can find this information in our Police Information section.",
      "what is": "Let me explain that for you. Please select the relevant option from the menu.",
      "can i": "Yes, you can. Please select the relevant option from the menu for detailed information.",
      "need help": "I'm here to help! Please select the relevant option from the menu.",
      "want to": "I can assist you with that. Please select the relevant option from the menu.",
      "is it": "Let me check that for you. Please select the relevant option from the menu.",
      "do you": "Yes, I can help with that. Please select the relevant option from the menu.",
      "will you": "I'll be happy to assist. Please select the relevant option from the menu.",
      "should i": "I can guide you on that. Please select the relevant option from the menu.",
    };

    for (const [pattern, response] of Object.entries(questionPatterns)) {
      if (lowercaseQuery.includes(pattern)) {
        return {
          message: response,
          showOptions: false
        };
      }
    }

    return null;
  };

  // Memoize search function
  const searchAllOptions = useCallback((query, options) => {
    const lowercaseQuery = query.toLowerCase();
    for (const option of options) {
      if (option.keywords.some((keyword) => lowercaseQuery.includes(keyword.toLowerCase()))) {
        return option;
      }
      if (option.subOptions) {
        const subOptionMatch = searchAllOptions(query, option.subOptions);
        if (subOptionMatch) {
          return subOptionMatch;
        }
      }
    }
    return undefined;
  }, []);

  /**
   * Find matching option based on input
   * @param {string} input - User input
   * @param {import('./types').Option[]} options - Options to search
   * @returns {import('./types').Option|undefined} - Matching option or undefined
   */
  const findMatchingOption = (input, options) => {
    const lowercaseInput = input.toLowerCase();
    const words = lowercaseInput.split(/\s+/);

    // First, try exact keyword matching
    const exactMatch = options.find((option) =>
      option.keywords.some((keyword) => words.includes(keyword.toLowerCase()))
    );

    if (exactMatch) {
      return exactMatch;
    }

    // If no exact match, try partial matching
    return options.reduce(
      (bestMatch, option) => {
        const matchScore = option.keywords.reduce((score, keyword) => {
          const keywordLower = keyword.toLowerCase();
          return words.some((word) => 
            word.includes(keywordLower) || keywordLower.includes(word)
          ) ? score + 1 : score;
        }, 0);

        if (matchScore > 0 && (!bestMatch.option || matchScore > bestMatch.score)) {
          return { option, score: matchScore };
        }
        return bestMatch;
      },
      { option: undefined, score: 0 },
    ).option;
  };

  // Optimize message rendering with virtualization
  const visibleMessages = useMemo(() => {
    return messages.slice(-20); // Only show last 20 messages
  }, [messages]);

  /**
   * Handle sending a message
   */
  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);

    const userInput = input.toLowerCase();
    setMessages((prev) => [...prev, { type: "user", content: input }]);
    setInput("");

    // Check for contextual responses first (including thank you)
    const contextResponse = getContextualResponse(userInput);
    if (contextResponse) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: contextResponse.message,
          options: contextResponse.showOptions ? mainOptions : undefined,
        },
      ]);
      setIsLoading(false);
      setTimeout(scrollToBottom, 100);
      return;
    }

    // Then check for greetings
    const greetingResponse = handleGreeting(userInput);
    if (greetingResponse) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: greetingResponse.message,
          options: greetingResponse.showOptions ? mainOptions : undefined,
        },
      ]);
      setIsLoading(false);
      setTimeout(scrollToBottom, 100);
      return;
    }

    // Check for yes/no responses
    const yesNoResponse = handleYesNo(userInput);
    if (yesNoResponse) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: yesNoResponse.message,
          options: undefined,
        },
      ]);
      setIsLoading(false);
      setTimeout(scrollToBottom, 100);
      return;
    }

    // Search through current options first
    let matchingOption = findMatchingOption(userInput, currentOptions);

    // If no match in current options, search all options
    if (!matchingOption) {
      matchingOption = searchAllOptions(userInput, mainOptions);
    }

    if (matchingOption) {
      handleOptionSelect(matchingOption);
    } else {
      // Check for partial matches or related topics
      const words = userInput.split(/\s+/);
      const suggestions = mainOptions.filter((option) =>
        words.some((word) => option.keywords.some((keyword) => keyword.includes(word) || word.includes(keyword))),
      );

      let response = "I understand you're asking about something. ";
      if (suggestions.length > 0) {
        response += "Here are some topics that might be relevant to your query: \n";
        suggestions.forEach((option) => {
          response += `- ${option.label}\n`;
        });
        response += "\nPlease select one of these options or try rephrasing your question.";
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: response,
            options: suggestions,
          },
        ]);
      } else {
        response += "Could you please rephrasing your question? I'm here to help with police-related services and information.";
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: response,
            options: undefined, // Don't show options for unclear queries
          },
        ]);
      }
    }
    setIsLoading(false);
    setTimeout(scrollToBottom, 100);
  };

  /**
   * Handle going back to previous options
   */
  const handleBack = () => {
    if (history.length > 0) {
      const prevOptions = history[history.length - 1];
      setCurrentOptions(prevOptions);
      setHistory((prev) => prev.slice(0, -1));
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "Let's go back to the previous menu. How else can I assist you?",
          options: prevOptions,
        },
      ]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-sm overflow-hidden flex items-center justify-center p-4">
      <div className="flex flex-col h-[90vh] w-full max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-blue-100">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="flex items-center gap-2">
            <img
              src="/images/karnataka-state-emblem.png"
              alt="Karnataka State Emblem"
              className="h-10 w-auto mr-2 rounded-sm bg-white/80 p-1 shadow"
              style={{ maxHeight: 40 }}
            />
            <h1 className="text-lg sm:text-xl font-semibold flex items-center text-white">
              <Bot className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden xs:inline">Chikkaballapura Police Services Assistant</span>
              <span className="xs:hidden">Police Assistant</span>
            </h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-blue-200 relative overflow-hidden group"
            aria-label="Close chatbot"
          >
            <a href="/">
              <span className="absolute inset-0 scale-0 rounded-full bg-white/20 group-hover:scale-100 transition-transform duration-300"></span>
              <X className="h-4 w-4 relative z-10" />
            </a>
          </Button>
        </div>

        {/* Messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 relative"
        >
          {visibleMessages.map((message, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "flex flex-col max-w-[85%] sm:max-w-[80%] space-y-2",
                message.type === "user" ? "ml-auto items-end" : "mr-auto"
              )}
            >
              <div
                className={cn(
                  "rounded-lg px-4 py-3 shadow-md text-sm sm:text-base",
                  message.type === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-blue-200 text-gray-800"
                )}
              >
                {message.content && typeof message.content === 'object' ? (
                  <div className="prose prose-sm max-w-none">
                    {message.content}
                  </div>
                ) : (
                  <div>{message.content}</div>
                )}
              </div>
              {message.options && Array.isArray(message.options) && message.options.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {message.options.filter(option => option && option.label).map((option) => (
                    <Button
                      key={option.value || option.label}
                      variant="outline"
                      size="sm"
                      onClick={() => handleOptionSelect(option)}
                      className="transition-all hover:scale-105 bg-white text-blue-600 hover:bg-blue-50 border-blue-300 text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-3 h-auto"
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
          {typingIndicator.isTyping && (
            <div className="flex items-center space-x-2 text-blue-600">
              <Loader2 className="h-4 w-4 animate-spin" />
              <p>{typingIndicator.message}</p>
            </div>
          )}
          <div ref={messagesEndRef} />

          {/* Scroll down button */}
          <AnimatePresence>
            {showScrollButton && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-4 right-4"
              >
                <Button
                  onClick={scrollToBottom}
                  size="icon"
                  className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg animate-pulse"
                  aria-label="Scroll to latest messages"
                >
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-blue-200">
          <div className="flex gap-2">
            {history.length > 0 && (
              <Button
                variant="outline"
                size="icon"
                onClick={handleBack}
                className="transition-all hover:scale-105 bg-white text-blue-600 hover:bg-blue-50 border-blue-300 h-10 w-10 flex-shrink-0"
                aria-label="Go back to previous options"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-white text-gray-800 placeholder-gray-400 border-blue-300 h-10"
            />
            <Button
              onClick={handleSend}
              className="transition-all hover:scale-105 bg-blue-600 text-white hover:bg-blue-700 h-10 w-10 flex-shrink-0"
              aria-label="Send message"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 