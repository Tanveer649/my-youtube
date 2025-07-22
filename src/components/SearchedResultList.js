import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_SEARCH_RESULT_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


//When the Redux store changes, any component using useSelector to access that store will automatically 
// re-render with the new value.
const SearchedResultList = () => {
  const [showSearchedResult, setshowSearchedResult] = useState([]);
  
  const query = useSelector((store) => store.searchedQuery.Content);

  const SearchResultlist = async (query) => {
    const data = await fetch(YOUTUBE_SEARCH_RESULT_API(query));
    const json = await data.json();
    console.log(json.items)
    setshowSearchedResult(json.items);
  };

  useEffect(() => {
    SearchResultlist(query);
  }, [query]);  //[] this will call only one time, we need to call evenytime when the query is changed

  return (
    <div className="flex flex-wrap">
      {showSearchedResult.length > 0 && showSearchedResult.map((video,index) => (
        <Link key={video.id.videoId || index} to={"/watch?v=" + video.id.videoId}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchedResultList;
