import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/cacheSlice";
import { SearchContent } from "../utils/searchedContent";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState(""); // to update the state as user inputted the search key
  const [suggestions, setsuggestions] = useState([]); // used to show all the suggestion
  const [showSuggestions, setshowSuggestions] = useState(false); // after showing suggestion if someone click outside the suggestion
  // then suggestion should be closed.

  const searchcache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const searchResults = () => {
    dispatch(SearchContent(searchQuery));
  };

  // to clear the input search box when click to home button.
  const clearText = useSelector((store) => store.searchedQuery.Content);
  //useEffect hook runs whenever a value in the dependency array changes.
  // when clearText changes then the code block will be executed.
  useEffect(() => {
    if (clearText === "") {
      setsearchQuery("");
    }
  }, [clearText]);

  const getSearchSuggestions = async () => {
    // console.log("API call " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setsuggestions(json[1]); // json[1] will show the suggestion at every key stroke user press, we will update this.

    // update the cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1], // [searchQuery] means content in searchQuery, if searchQuery : json[1] then
      })
    ); // it dispatch an action "searchQuery" : [1,2,3]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[searchQuery]) {
        // first check if the result of searchquery is alredy present in the store
        setsuggestions(searchcache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // searchQuery state keeps the textbox value controlled
  // value={searchQuery} links the input to state
  // onChange updates the state
  // useEffect watches searchQuery
  // waits 200ms
  // then calls API
  // cancels previous timer if the user types again
  // prevents excess API calls while typing

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 items-center py-1 px-6 shadow-md sticky top-0 bg-white z-50">
      {/* Left - Menu & Logo */}
      <div className="flex items-center col-span-2 space-x-4">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          alt="Menu"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
        />
        <img
          className="h-[80px]"
          alt="logo"
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
        />
      </div>

      {/* Middle - Search bar */}
      <div className="col-span-8 flex justify-center relative">
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-l-full px-4 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
          />
          <button
            className="bg-gray-100 px-4 py-1 rounded-r-full border border-gray-300"
            onClick={searchResults}
          >
            🔍
          </button>
        </div>

        {/* suggestions box placed just below the input */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-10 bg-white shadow-lg rounded w-full max-w-xl z-50">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right - User Icon */}
      <div className="col-span-2 flex justify-end pr-20">
        <img
          className="h-8 w-8 rounded-full cursor-pointer"
          alt="user_icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
        />
      </div>
    </div>
  );
};

export default Head;
