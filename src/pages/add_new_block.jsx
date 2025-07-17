import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './blog.css';

import { useNavigate } from "react-router-dom";
 

// ReactQuill Toolbar Configuration
const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};


//  ReactQuill Allowed Formats
const formats = [
  'header',
  'bold', 'italic', 'underline', 'blockquote',
  'list', 'bullet',
  'link', 'image',
];



function Add_New_Block() {
  //  All State Variables
  const [blogtitle, setBlogTitle] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [blogContent, setBlogContent] = useState("");
  const [blogWriter, setBlogWriter] = useState("");
  const [writerImage, setWriterImage] = useState(null);

  

 
 const navigate = useNavigate();

 
  //  Function to convert uploaded image to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  //  Form Submit Handler
  const formSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    //  Convert images to Base64 format
    let blogImageBase64 = "";
    let writerImageBase64 = "";

    if (blogImage) {
      blogImageBase64 = await convertToBase64(blogImage);
    }

    if (writerImage) {
      writerImageBase64 = await convertToBase64(writerImage);
    }

    //  Create blog data object
    const blogData = {
      title: blogtitle,
      content: blogContent,
      writer: blogWriter,
      blogImage: blogImageBase64,
      writerImage: writerImageBase64,
    };

    //  Store blog data in localStorage
    const existingBlogs = JSON.parse(localStorage.getItem("blogFormData")) || [];
    existingBlogs.unshift(blogData); // Add new blog to top
    localStorage.setItem("blogFormData", JSON.stringify(existingBlogs));


    alert("Blog Created and added to local storage!");
    

    //  Reset form fields
    setBlogTitle("");
    setBlogImage(null);
    setBlogContent("");
    setBlogWriter("");
    setWriterImage(null);


     navigate("/blog")

  };
  



  //  Show blogs stored in localStorage in dev console (for testing)
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("blogFormData")) || [];
    console.log("All Saved Blogs:", savedData);
  }, []);


  
 


  return (
    <div className="m_padding">
    <div className="adding_new_blog">
      <h5 style={{ textAlign: "center", fontSize: "2rem", color: "#337179" }}>Create Blog Form</h5>
 

        <form onSubmit={formSubmit}>

          {/*  Blog Title Input */}
          <label htmlFor="title">Blog Title:</label><br />
          <input
            type="text"
            placeholder="Blog Title"
            value={blogtitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            required
          /><br /><br />

          {/* Blog Image Upload */}
          <label>Choose blog image:</label><br />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setBlogImage(e.target.files[0])}
          />
          {blogImage ? (
            <div>
              <img src={URL.createObjectURL(blogImage)} alt="Blog Preview" width="100" />
            </div>
          ) : <p>No preview available</p>}
          <br /><br />

          {/*  Blog Content Editor */}
          <label>Blog Content:</label>
          <div className="reactQuill">
            <ReactQuill
              theme="snow"
              value={blogContent}
              onChange={setBlogContent}
              modules={modules}
              formats={formats}
              scrollingContainer="html"
              style={{
                marginBottom: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px"
              }}
            />
          </div>
          <br /><br />

          {/* Writer Name Input */}
          <label htmlFor="writer">Writer:</label><br />
          <input
            type="text"
            placeholder="Writer Name"
            value={blogWriter}
            onChange={(e) => setBlogWriter(e.target.value)}
            required
          /><br /><br />

          {/*  Writer Image Upload */}
          <label>Choose writer image:</label><br />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setWriterImage(e.target.files[0])}
          />
          {writerImage ? (
            <div>
              <img src={URL.createObjectURL(writerImage)} alt="Writer Preview" width="100" />
            </div>
          ) : <p>No preview available</p>}
          <br /><br />

          {/*  Submit Button */}
          <button className="btn_main submit_btn" type="submit">Submit</button>
        </form>
     
    </div>

    </div>
  );
}

export default Add_New_Block;
