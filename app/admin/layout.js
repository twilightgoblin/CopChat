'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { LogOut, Newspaper, Users, Bot } from 'lucide-react';
import Cookies from 'js-cookie';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const auth = Cookies.get('adminAuthenticated');
    if (!auth && pathname !== '/admin/login') {
      router.push('/admin/login');
    } else if (auth) {
      setIsAuthenticated(true);
    }
  }, [router, pathname]);

  const handleLogout = () => {
    Cookies.remove('adminAuthenticated');
    router.push('/admin/login');
  };

  // Don't show the layout on the login page
  if (pathname === '/admin/login') {
    return children;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/karnataka-state-emblem.png"
                  alt="Karnataka State Police Emblem"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-xl font-semibold text-violet-900">Admin Portal</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <Link
              href="/admin/updates"
              className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                pathname === '/admin/updates'
                  ? 'border-violet-500 text-violet-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Newspaper className="h-5 w-5 mr-2" />
              Updates
            </Link>
            <Link
              href="/admin/beat-police"
              className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                pathname === '/admin/beat-police'
                  ? 'border-violet-500 text-violet-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Users className="h-5 w-5 mr-2" />
              Beat Police
            </Link>
            <Link
              href="/admin/chatbot"
              className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                pathname === '/admin/chatbot'
                  ? 'border-violet-500 text-violet-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Bot className="h-5 w-5 mr-2" />
              Chatbot
            </Link>
            <Link
              href="/admin/database"
              className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                pathname === '/admin/database'
                  ? 'border-violet-500 text-violet-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Database Portal
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
} 