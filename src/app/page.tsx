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
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          <Image src="/laundry-logo.svg" alt="LaundryPro Logo" width={120} height={120} />
          <h1 className="text-4xl font-bold mt-4 text-indigo-700">LaundryPro</h1>
          <p className="text-lg text-gray-600 mt-2">{slogan}</p>
          <a href="/login" className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700">Get Started</a>
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
