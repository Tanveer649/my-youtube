import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import SearchedResultList from "./SearchedResultList";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const searchWord = useSelector((store) => store.searchedQuery.Content);
  return (
    <div className="">
      <ButtonList />
      {/* <VideoContainer /> */}
      {searchWord ? <SearchedResultList /> : <VideoContainer />}
    </div>
  );
};

export default MainContainer;
