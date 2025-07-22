import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items[0])
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}

      {/* <VideoCard info = {videos[0]} /> */}
    </div>
  );
};

//<Link to={} /> refers like anchor tage, like when we click the video card it should went to "/watch?v="+video.id

export default VideoContainer;
