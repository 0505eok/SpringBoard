import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Members from "./Page/Members";
import NewPost from "./Page/NewPost";
import Post from "./Page/Post";
import { Login } from "./Page/Login";
import Posts from "./Page/Posts";
import { Header } from "./Component/Header";
import './App.css'
import { Signup } from "./Page/Signup";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/members" element={<Members />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post" element={<Post />} />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
