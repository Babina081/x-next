import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X Clone",
  description: "A nextjs app created using tailwindcss and nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between max-w-6xl mx-auto">
          <div>
            <Sidebar></Sidebar>
          </div>
          <div>{children}</div>
          <div>
            <News></News>
          </div>
        </div>
      </body>
    </html>
  );
}
