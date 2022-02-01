import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    // e.preventDefault();
    // const post = {
    //   name: "John Doe",
    //   description: "Software Engineer",
    //   message: "Hello, World!",
    //   photoUrl:
    //     "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    // };
    // setPosts([...posts, post]);

    e.preventDefault();
    db.collection("posts").add({
      name: "Rontu Barhoi",
      description: "Software Engineer",
      message: input,
      photoUrl:
        "https://randomuser.me/api/portraits/men/" +
        Math.floor(Math.random() * 10) +
        ".jpg",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          {/* Input Options */}
          <InputOption Icon={ImageIcon} title={"Photo"} color={"#7085f9"} />
          <InputOption
            Icon={SubscriptionsIcon}
            title={"Video"}
            color={"#E7A33E"}
          />
          <InputOption Icon={EventNoteIcon} title={"Event"} color={"#C0CBCD"} />
          <InputOption
            Icon={CalendarViewDayIcon}
            title={"Write Article"}
            color={"#7FC15E"}
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
