import React from "react";
import Button from "./Button";


const Buttonlist = ["All", "Music", "News", "Mixes", "Movie musicals", "Reverberation", "Live", "Indian pop music",
  "Albums", "Recording", "Dramedy", "Soul Music", "Indian cuisine"
  //, "Folk dance", "Electronic Music", "Repping", "Recently uploaded", "watch", "New to you"
]

const ButtonList = () => {
  return (
    <div className="overflow-x-auto mt-5 flex">
      {Buttonlist.map((name)=><Button key={name} name={name}/>)}
    </div>
  );
};

export default ButtonList;
