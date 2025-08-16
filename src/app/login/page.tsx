"use client";
import Image from "next/image";
import { supabase } from '../../utils/supabaseClient';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md relative transform hover:scale-[1.01] transition-all">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="bg-white rounded-full p-3 shadow-lg">
            <Image src="/laundry-logo.svg" alt="LaundryPro Logo" width={60} height={60} className="animate-pulse" />
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Welcome Back!</h2>
          <p className="text-gray-600 mb-8 text-center">Your fresh laundry journey continues here</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className="w-full p-4 pl-12 border border-indigo-100 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all group-hover:border-indigo-200"
                required 
              />
              <svg className="w-6 h-6 text-indigo-400 absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors group-hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <div className="relative group">
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                className="w-full p-4 pl-12 border border-indigo-100 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all group-hover:border-indigo-200"
                required 
              />
              <svg className="w-6 h-6 text-indigo-400 absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors group-hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md animate-shake">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-200"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign In
              </span>
            </button>
            
            <div className="flex items-center justify-between text-sm">
              <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">Forgot Password?</a>
              <a href="/register" className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center">
                Create Account 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </form>
          
          <div className="mt-12 pt-6 border-t border-gray-100 text-center">
            <div className="flex items-center justify-center mb-4">
              <Image src="/file.svg" alt="Laundry Icon" width={24} height={24} className="opacity-50" />
            </div>
            <p className="text-sm text-gray-500 italic">
              "Bringing Freshness to Your Wardrobe"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
