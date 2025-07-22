const ChatMessage = ({name, Message}) => {
  return (
    <div className="flex items-center shadow-md p-2">
      <img
      className="h-8"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
      />
      <span className="font-bold px-3">{name}</span>
      <span>{Message}</span>
    </div>
  );
};

export default ChatMessage;
