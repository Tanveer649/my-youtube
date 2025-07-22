import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ClearSearchContent } from "../utils/searchedContent";



const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const ClearContent = () =>{
    dispatch(ClearSearchContent())
  }
  if (!isMenuOpen) return null;



  return (

    // <div className="w-52 p-2 text-sm flex-shrink-0  font-semibold m-2 shadow-lg">
    <div className="w-52 p-2 text-sm font-semibold shadow-lg h-screen sticky top-0 overflow-y-auto ml-4">
      <ul className="space-y-1 border-b pb-2">
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer" onClick={ClearContent}>
          <Link to={"/"}>🏠 Home </Link>
        </li>
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          🎬 Shorts
        </li>
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          📺 Subscriptions
        </li>
      </ul>

      <h1 className="text-gray-600 mt-4 mb-2">You</h1>
      <ul className="space-y-1 border-b pb-2">
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          🕒 History
        </li>
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          🎵 Playlists
        </li>
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          📹 Your Videos
        </li>
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          ⏰ Watch Later
        </li>
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          👍 Liked Videos
        </li>
      </ul>

      <h1 className="text-gray-600 mt-4 mb-2">Explore</h1>
      <ul className="space-y-1">
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          🔥 Trending
        </li>
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          🛒 Shopping
        </li>
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          🎵 Music
        </li>
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          🎬 Movies
        </li>
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          🔴 Live
        </li>
        <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
          🎮 Gaming
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
