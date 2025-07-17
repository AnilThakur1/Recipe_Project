import { useEffect, useState } from "react";
import Blog_Card from "./blog_card";
import { useNavigate } from "react-router-dom";
import "./blog.css";
 

function Blog() {

  // This is using blogs as a props in blog_card
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  

  useEffect(() => {
    // Storing Blogs in Local Storage
    const savedData = JSON.parse(localStorage.getItem("blogFormData")) || [];
    setBlogs(savedData);
  }, []);


  // This is for delete blog card
  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;
    const updatedBlogs = blogs.filter((_, index) => index !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogFormData", JSON.stringify(updatedBlogs));
 
  };






  return (

    <div className="m_padding">


    <div className="width_95">

      <button className="btn_main add_block" onClick={() => navigate("/blog/form")}> Add block </button>

      <div className="adding_blog">
        <h3 className="blog_h3">This is we added blog</h3>
        <div className="blog_cards">
          {blogs.map((blog, index) => {
            return <Blog_Card props={blog} id={index} key={index}
              onDelete={handleDelete} />
})}
        </div>

      </div>

    </div>
       
       </div>

  );
}

export default Blog;
