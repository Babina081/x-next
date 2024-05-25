"use client";
import {
  HiOutlineChat,
  HiOutlineHeart,
  HiOutlineTrash,
  HiHeart,
} from "react-icons/hi";
import { signIn, useSession } from "next-auth/react";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { app } from "../firebase";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "@/atom/modalAtom";

export default function Icons({ id, uid }) {
  const { data: session } = useSession();
  const db = getFirestore(app);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);

  const likePost = async () => {
    if (session) {
      if (isLiked) {
        await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
      } else {
        await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
          username: session.user.username,
          timestamp: serverTimestamp(),
        });
      }
    } else {
      signIn();
    }
  };

  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {
      setLikes(snapshot.docs);
    });
  }, [db]);

  useEffect(() => {
    setIsLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const deletePost = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      if (session?.user?.uid === id) {
        deleteDoc(doc(db, "posts", id))
          .then(() => {
            console.log("Document successfully deleted!");
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      } else {
        alert("You are not authorized to delete this post!");
      }
    }
  };

  return (
    <div className="flex justify-start gap-5 p-2 text-gray-500">
      <HiOutlineChat
        className="w-8 h-8 cursor-pointer rounded-full transition duration-500 p-2 ease-in-out hover:text-sky-500 hover:bg-sky-100"
        onClick={() => {
          if (!session) {
            return signIn();
            //   } else {
          }
          setOpen(!open);
          setPostId(id);
          //   }
        }}
      ></HiOutlineChat>
      <div className="flex items-center ">
        {isLiked ? (
          <HiHeart
            className="w-8 h-8 text-red-600 cursor-pointer rounded-full transition duration-500 p-2 ease-in-out hover:text-red-500 hover:bg-red-100"
            onClick={likePost}
          ></HiHeart>
        ) : (
          <HiOutlineHeart
            className="w-8 h-8 cursor-pointer rounded-full transition duration-500 p-2 ease-in-out hover:text-red-500 hover:bg-red-100"
            onClick={likePost}
          ></HiOutlineHeart>
        )}
        {likes.length > 0 && (
          <span className={`text-xs ${isLiked && "text-red-600"}`}>
            {likes.length}
          </span>
        )}
      </div>

      {session?.user?.uid === uid && (
        <HiOutlineTrash
          className="w-8 h-8 cursor-pointer rounded-full transition duration-500 p-2 ease-in-out hover:text-red-500 hover:bg-red-100"
          onClick={deletePost}
        ></HiOutlineTrash>
      )}
    </div>
  );
}
