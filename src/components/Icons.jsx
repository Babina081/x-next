"use client";
import { HiOutlineChat, HiOutlineHeart, HiOutlineTrash } from "react-icons/hi";

export default function Icons() {
  return (
    <div className="flex justify-start gap-5 p-2 text-gray-500">
      <HiOutlineChat className="w-8 h-8 cursor-pointer rounded-full transition duration-500 p-2 ease-in-out hover:text-sky-500 hover:bg-sky-100"></HiOutlineChat>
      <HiOutlineHeart className="w-8 h-8 cursor-pointer rounded-full transition duration-500 p-2 ease-in-out hover:text-red-500 hover:bg-red-100"></HiOutlineHeart>
      <HiOutlineTrash className="w-8 h-8 cursor-pointer rounded-full transition duration-500 p-2 ease-in-out hover:text-red-500 hover:bg-red-100"></HiOutlineTrash>
    </div>
  );
}
