const commentsData = [
  {
    name: "Tanveer Alam",
    text: "Great job — clear logic and clean use of Redux patterns!",
    replies: [],
  },
  {
    name: "Tanveer Alam",
    text: "Great job — clear logic and clean use of Redux patterns!",
    replies: [
      {
        name: "Tanveer Alam",
        text: "Great job — clear logic and clean use of Redux patterns!",
        replies: [],
      },
      {
        name: "Tanveer Alam",
        text: "Great job — clear logic and clean use of Redux patterns!",
        replies: [
          {
            name: "Tanveer Alam",
            text: "Great job — clear logic and clean use of Redux patterns!",
            replies: [
              {
                name: "Tanveer Alam",
                text: "Great job — clear logic and clean use of Redux patterns!",
                replies: [
                  {
                    name: "Tanveer Alam",
                    text: "Great job — clear logic and clean use of Redux patterns!",
                    replies: [
                      {
                        name: "Tanveer Alam",
                        text: "Great job — clear logic and clean use of Redux patterns!",
                        replies: [
                          {
                            name: "Tanveer Alam",
                            text: "Great job — clear logic and clean use of Redux patterns!",
                            replies: [
                              {
                                name: "Tanveer Alam",
                                text: "Great job — clear logic and clean use of Redux patterns!",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Tanveer Alam",
    text: "Great job — clear logic and clean use of Redux patterns!",
    replies: [
      {
        name: "Tanveer Alam",
        text: "Great job — clear logic and clean use of Redux patterns!",
        replies: [],
      },
    ],
  },
  {
    name: "Tanveer Alam",
    text: "Great job — clear logic and clean use of Redux patterns!",
    replies: [
      {
        name: "Tanveer Alam",
        text: "Great job — clear logic and clean use of Redux patterns!",
        replies: [
          {
            name: "Tanveer Alam",
            text: "Great job — clear logic and clean use of Redux patterns!",
            replies: [
              {
                name: "Tanveer Alam",
                text: "Great job — clear logic and clean use of Redux patterns!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Tanveer Alam",
    text: "Great job — clear logic and clean use of Redux patterns!",
    replies: [
      {
        name: "Tanveer Alam",
        text: "Great job — clear logic and clean use of Redux patterns!",
        replies: [],
      },
    ],
  },
  {
    name: "Tanveer Alam",
    text: "Great job — clear logic and clean use of Redux patterns!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2">
      <img
        className="h-8 w-8 rounded-full "
        alt="User"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold mb-3">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;


// ✅ CommentsList is a functional React component that takes an array of comments as a prop.
// ✅ It uses map to loop through each comment and render a Comment component for it.
// ✅ For each comment’s replies, it calls itself recursively:

// js
// Copy
// Edit
// <CommentsList comments={comment.replies} />
// ✅ This recursive pattern handles nested comment threads of any depth.
// ✅ Replies are visually indented with Tailwind classes (pl-5 ml-5 border-l-black).
// ✅ Example nested structure:

// pgsql
// Copy
// Edit
// Parent Comment
//   ├── Reply 1
//   │     └── Reply to Reply 1
//   └── Reply 2
// ✅ The key={index} is used for React’s reconciliation.
