# 📺 my-youtube

A responsive YouTube clone built using **React** and **Tailwind CSS**, replicating key features of YouTube like homepage layout, search, dynamic routing, video playback, live chat, and comments.

---

## 🚀 Features

- 🔍 **Search Functionality** – Type to search videos using the YouTube Data API.
- 🧭 **Dynamic Routing** – Navigate between the homepage and individual video (watch) pages.
- 💬 **Live Chat Simulation** – Auto-refreshing live chat area with sample messages.
- 💡 **Comment Section** – A user-friendly comment system under each video.
- 🎥 **Watch Page** – Click on a video to watch it with full details and recommendations.
- ⚡ **Optimized & Interactive** – Clean UX with fast navigation and interactive elements.

---

## 📦 Tech Stack

- **React** (Functional Components & Hooks)
- **React Router DOM** – For routing between pages
- **Tailwind CSS** – Utility-first styling
- **Redux** – For managing live chat or state (if used)
- **YouTube Data API v3** – For fetching real video data

---
 ```
📁 my-youtube/
├── 📁 public/
│   └── index.html
├── 📁 src/
│   ├── 📁 components/      # Reusable components (Header, Sidebar, VideoCard, etc.)
│   ├── 📁 store/           # Redux logic (if used)
│   ├── App.js             # Main component with routing
│   └── index.js           # App entry point
├── .gitignore
├── README.md
└── package.json

```
---

## 🧪 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/my-youtube.git

# Go into the project folder
cd my-youtube

# Install dependencies
npm install

# Start the app
npm start


