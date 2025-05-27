"use client";

import React from 'react';
import ChatbotUI from './ChatbotUI';
import { mainOptions } from '../../data/options';

/**
 * Client-side wrapper for the chatbot
 * @returns {JSX.Element}
 */
export default function ChatbotClientPage() {
  return <ChatbotUI mainOptions={mainOptions} />;
} 