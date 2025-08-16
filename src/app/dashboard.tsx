import { supabase } from '../utils/supabaseClient';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) router.push('/login');
      else setUser(data.user);
    });
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-4">Laundry Dashboard</h1>
      <div className="bg-white p-6 rounded shadow mb-4">
        <h2 className="text-xl font-semibold">Welcome, {user?.email}</h2>
        <p className="mt-2">Here you can manage orders, services, and users.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/orders" className="bg-blue-100 p-4 rounded shadow hover:bg-blue-200">Orders</a>
        <a href="/services" className="bg-green-100 p-4 rounded shadow hover:bg-green-200">Services</a>
        <a href="/profile" className="bg-yellow-100 p-4 rounded shadow hover:bg-yellow-200">Profile</a>
      </div>
    </div>
  );
}
