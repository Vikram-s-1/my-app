"use client";
import Image from "next/image";
import { supabase } from '../../utils/supabaseClient';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-white">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center">
        <Image src="/laundry-logo.svg" alt="LaundryPro Logo" width={80} height={80} className="mb-4" />
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-2">Create Your LaundryPro Account</h2>
        <p className="text-gray-500 mb-6 text-center">Sign up to manage your laundry orders and enjoy fresh clothes every day!</p>
        <form onSubmit={handleRegister} className="w-full flex flex-col gap-3">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-bold transition">Register</button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-indigo-600 font-semibold hover:underline">Login</a>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <Image src="/file.svg" alt="Laundry Icon" width={40} height={40} className="mb-2" />
          <span className="text-xs text-gray-400">"Clean Clothes, Happy Life"</span>
        </div>
      </div>
    </div>
  );
}
