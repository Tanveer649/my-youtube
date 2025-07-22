import { useDispatch, useSelector } from "react-redux";
import { closedMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const videoParam = searchParams.get("v");

  const disptach = useDispatch();
  useEffect(() => {
    disptach(closedMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 rounded-lg pt-2 flex">
        <div>
          <iframe
            width="1030"
            height="500"
            src={"https://www.youtube.com/embed/" + videoParam + "?&autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

// For useEffect

// From there, we dispatch an action `closeMenu`, which sets isMenuOpen = false.
// Since isMenuOpen is used in the Sidebar component to conditionally render the sidebar,
// the Sidebar will re-render, and because isMenuOpen is now false, it returns null,
// meaning the sidebar will not be displayed.

// For SearchParams

// useSearchParams is a React Router hook that helps read and manipulate the query parameters in the URL.
// Calling searchParams.get("v") returns the value of the query parameter named v.
// For example, for the URL http://localhost:3000/watch?v=abcd123, searchParams.get("v") will return "abcd123".

export default WatchPage;
