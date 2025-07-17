import { useParams } from "react-router-dom";
import './blog_card_detail.css';

const BlogCardDetail = () => {
  const { id } = useParams(); // id from URL
  const blogs = JSON.parse(localStorage.getItem("blogFormData")) || [];

 
  const blog = blogs[id];

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="width_95">
      
    <div className="card_detail">

      <img className="blog_detail_image"
        src={blog.blogImage}
        alt="Blog"/>

        <h2>{blog.title}</h2>

      <div className="blog_text_content">
         {/* Render ReactQuill HTML content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      
      </div>



      <div className="card_profile">
        <img
          src={blog.writerImage}
          alt="Writer" />

        <h4>{blog.writer}</h4>

      </div>



      </div>


    </div>
  );
};

export default BlogCardDetail;
