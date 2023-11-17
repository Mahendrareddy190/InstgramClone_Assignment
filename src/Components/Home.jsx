import React, { useState, useEffect } from "react";
import Post from "./Post";
import Navbar from "./Navbar";
import "../css/Home.css";
import Header from "./Header";
import Nav1 from "./Nav1";
import CreatePost from "./CreatePost";
import Suggested_creaters from "./Suggested_creaters";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isNewPost, setNewPost] = useState(false);
  if (localStorage["user_data"]) {
    var current_user = JSON.parse(localStorage.getItem("current_user"));
  }
  useEffect(() => {
    fetch("src/Components/Posts.json")
      .then((response) => response.json())
      .then((data) => {
        if (!localStorage["Posts"]) {
          localStorage.setItem("Posts", JSON.stringify(data));
          setPosts(data);
          return;
        }
      });
    if (localStorage["Posts"]) {
      const values = JSON.parse(localStorage.getItem("Posts"));
      setPosts(values);
    }
  }, [isNewPost]);

  return (
    <div className="Home">
      {/* header only on mobile view */}
      <Header fullname={current_user.fullname} />

      <CreatePost posts={posts} setNewPosts={setPosts} />

      {/* Side_navbar */}
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="username">
        <h3>
          <i className="bi bi-person-circle mx-2"></i>
          {current_user.fullname}
        </h3>
      </div>
      <Suggested_creaters />
      <div className="Posts">
        <div className="story my-2">
          <div className="story_post1">
            <img
              src="https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/google_logo/46l73x2z3ve-14418.jpeg"
              alt="monkey"
            />
            <h5 className="mx-2">Arnifi</h5>
          </div>
          <div className="story_post1 mx-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPPy1Imo3qPgS5-wXM_4uarqssaSKql1EJg&usqp=CAU"
              alt="monkey"
            />
            <h5>MrBeast</h5>
          </div>
        </div>
        <div className="suggested-title">
          <h4>Suggested posts</h4>
        </div>
        {posts?.map((post, index) => (
          <Post
            key={index}
            Posts={posts}
            id={index}
            postcomments={post.comments}
            username={post.username}
            image={post.image}
            likes={post.likes}
            setPosts={setPosts}
            setNewPost={setNewPost}
            isNewPost={isNewPost}
          />
        ))}
      </div>

      {/* mobile-view menu options */}
      <Nav1 />
    </div>
  );
};

export default Home;
