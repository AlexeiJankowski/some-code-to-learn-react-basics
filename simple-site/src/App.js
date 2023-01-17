import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './structure/Header';
import Home from './site-contents/Home';
import Contacts from './site-contents/Contacts';
import AboutUs from './site-contents/AboutUs';
import Article from './site-contents/Article';
import Register from './site-contents/Register';
import Footer from './structure/Footer';
import NotFound from './structure/NotFound';

import AddNewPost from './admin-contents/AddNewPost';
import EditPosts from './admin-contents/EditPosts';
import EditPost from './admin-contents/EditPost';
import EditUser from './admin-contents/EditUser';
import EditUsers from './admin-contents/EditUsers';
import EditAboutUs from './admin-contents/EditAboutUs';

import './App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Header 
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contacts" element={<Contacts isAdmin={isAdmin} />} />
        <Route path="/about-us" element={<AboutUs  isAdmin={isAdmin} />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/register" element={<Register />} />

        {isAdmin && 
        <>
          <Route path="/admin/edit-about-us/" element={<EditAboutUs />} />
          <Route path="/admin/edit-posts/" element={<EditPosts />} />
          <Route path="/admin/edit-users/" element={<EditUsers />} />
          <Route path="/admin/add-new-post/" element={<AddNewPost />} />
          <Route path="/admin/edit-post/:id" element={<EditPost />} />
          <Route path="/admin/edit-user/:id" element={<EditUser />} />
        </>}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
