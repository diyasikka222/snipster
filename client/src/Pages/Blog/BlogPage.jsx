import React, { useState } from "react";
import { motion } from "framer-motion";
import "./BlogPage.css";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([
    {
      title: "Welcome to the Blog!",
      content: "This is a sample blog to get you started. Feel free to add your own thoughts!"
    }
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [showNewBlogPopup, setShowNewBlogPopup] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleAddBlog = () => {
    if (newTitle.trim() && newContent.trim()) {
      setBlogs([{ title: newTitle, content: newContent }, ...blogs]);
      setNewTitle("");
      setNewContent("");
      setShowNewBlogPopup(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading"
        >
          Snipster Blogs
        </motion.h1>
        <button className="open-popup-btn" onClick={() => setShowNewBlogPopup(true)}>
          Write a Blog
        </button>
      </div>

      {showNewBlogPopup && (
        <div className="popup-overlay" onClick={() => setShowNewBlogPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Write a New Blog</h2>
            <input
              type="text"
              placeholder="Blog Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              placeholder="Blog Content"
              rows={5}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
            <button onClick={handleAddBlog}>Post Blog</button>
          </div>
        </div>
      )}

      <div className="blog-list">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="blog-card"
            onClick={() => setSelectedBlog(blog)}
          >
            <h3>{blog.title}</h3>
          </motion.div>
        ))}
      </div>

      {selectedBlog && (
        <div className="popup-overlay" onClick={() => setSelectedBlog(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
