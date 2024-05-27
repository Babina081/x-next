import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import { SessionProvider } from "next-auth/react";
import SessionWrapper from "@/components/SessionWrapper";
import CommentModal from "@/components/CommentModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X Clone",
  description: "A nextjs app created using tailwindcss and nextjs",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex justify-between max-w-6xl mx-auto ">
            <div className="hidden sm:inline border-r h-screen sticky top-0 ">
              <Sidebar></Sidebar>
            </div>
            <div className=" w-2xl flex-1 ">{children}</div>
            <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
              <div className="sticky top-0 bg-white py-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2"
                />
              </div>
              <News></News>
            </div>
          </div>
          <CommentModal></CommentModal>
        </body>
      </html>
    </SessionWrapper>
  );
}
