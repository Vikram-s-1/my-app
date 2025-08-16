import Image from "next/image";
import { slogan } from "../utils/slogan";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Image src="/laundry-logo.svg" alt="LaundryPro Logo" width={120} height={120} />
      <h1 className="text-4xl font-bold mt-4 text-indigo-700">LaundryPro</h1>
      <p className="text-lg text-gray-600 mt-2">{slogan}</p>
      <a href="/login" className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700">Get Started</a>
    </div>
  );
}
