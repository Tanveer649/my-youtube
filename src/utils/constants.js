const GOOGLE_API_KEY = "AIzaSyC0fjZi8NEiQtrc0q5BX8VZ6szCYFDI_zk";

export const OFFSET_LIVE_CHAT = 10;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_API = (searchKeyword) =>
  `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    searchKeyword
  )}&type=video&maxResults=28&key=${GOOGLE_API_KEY}`;
