import React from "react";

const formatViews = (num) => {

  if (!num) return "";
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M views";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K views";
  } else {
    return num + " views";
  }
};

const VideoCard = ({ info }) => {

  if (!info) return null;
  //  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="w-72 shadow-lg p-2 m-2 mrounded-md">
      <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg" />
      <ul className="">
        <li className="font-semibold py-2">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-500">{formatViews(statistics?.viewCount)}</li>
        {/* <li className="text-gray-500">
          {new Date(publishedAt).toLocaleDateString()}
        </li> */}
      </ul>
    </div>
  );
};

export default VideoCard;
