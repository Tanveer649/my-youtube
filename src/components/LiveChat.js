import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, getRandomSentence } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          Message: getRandomSentence(),
        })
      );
    }, 2000);
    // API TO FETCH THE LICE CHAT DATA

    return () => clearInterval(i);
  }, []);

  //   useEffect runs only once

  // but the setInterval inside it keeps running
  // → dispatching again and again every 2 seconds
  // → hence multiple messages appear in Redux
  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {/* <ChatMessage
        name="Tanveer Alam"
        Message="Remember ! we gonna win today ✌️"
      /> */}

          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} Message={c.Message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-3 ml-2  rounded-lg shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Tanveer",
              Message: LiveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="send something..."
          className="w-[320px] p-2 border border-black rounded-lg"
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="ml-3 px-4 py-1 bg-green-400 rounded-lg text-lg tracking-wide">
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
