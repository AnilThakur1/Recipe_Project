// Import necessary hooks and components
import { useEffect, useState } from "react"; // React hooks for state and lifecycle
import { useParams, useNavigate } from "react-router-dom"; // For routing
import ReactQuill from "react-quill"; // Rich text editor
import "react-quill/dist/quill.snow.css"; // ReactQuill styling
import './blog.css'; // Custom CSS
import './updated_blog.css'; // Custom CSS


// Configuration for ReactQuill toolbar
const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // Header options
    ['bold', 'italic', 'underline', 'blockquote'], // Text formatting
    [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Lists
    ['link', 'image'], // Insert links and images
    ['clean'], // Remove formatting
  ],
};

// Formats allowed in the ReactQuill editor
const formats = [
  'header',
  'bold', 'italic', 'underline', 'blockquote',
  'list', 'bullet',
  'link', 'image',
];

function Updated_Blog() {
  const { id } = useParams(); // Get blog id from the route URL (e.g. /blog/update/0 → id = 0)
  const navigate = useNavigate(); // For redirecting to another page after update

  // State to hold all blogs fetched from localStorage
  const [blogs, setBlogs] = useState([]);

  // States for individual form fields (title, content, images, writer)
  const [blogTitle, setBlogTitle] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [blogContent, setBlogContent] = useState("");
  const [blogWriter, setBlogWriter] = useState("");
  const [writerImage, setWriterImage] = useState(null);

  // Load blog data when component mounts or id changes
  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogFormData")) || []; // Get blogs from localStorage
    setBlogs(savedBlogs); // Save all blogs to state

    const blog = savedBlogs[id]; // Get the specific blog by id (index)
    if (blog) {
     // Set old data into state
      setBlogTitle(blog.title);
      setBlogContent(blog.content);
      setBlogWriter(blog.writer);
      setBlogImage(blog.blogImage);
      setWriterImage(blog.writerImage);
    }
  }, [id]);




  // Helper function to convert image file to Base64 (for storing in localStorage)
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Read image file as base64 string
      reader.onload = () => resolve(reader.result); // When reading is done, resolve with result
      reader.onerror = (error) => reject(error); // Handle errors
    });
  };

  // Handle blog update on form submit
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Default: use existing image data (base64), unless new file is selected
    let blogImageBase64 = blogImage;
    let writerImageBase64 = writerImage;

    // Convert new blog image to base64 if it's a File object
    if (typeof blogImage !== "string" && blogImage) {
      blogImageBase64 = await convertToBase64(blogImage);
    }

    // Convert new writer image to base64 if it's a File object
    if (typeof writerImage !== "string" && writerImage) {
      writerImageBase64 = await convertToBase64(writerImage);
    }

    // Prepare the updated blog object
    const updatedBlog = {
      title: blogTitle,
      content: blogContent,
      writer: blogWriter,
      blogImage: blogImageBase64,
      writerImage: writerImageBase64,
    };

    // Create a new copy of blogs array, replace old blog with updated one
    const updatedBlogs = [...blogs];
    updatedBlogs[id] = updatedBlog;

    // Save updated blogs back to localStorage
    localStorage.setItem("blogFormData", JSON.stringify(updatedBlogs));

    alert("Blog Updated Sucessfully!"); // Show confirmation

    navigate("/blog"); // Redirect back to blog page
  };

  // Render the update blog form
  return (
    <div className="m_padding">

  
   <div className="updated_new_blog">
      <h5 style={{ textAlign: "center", fontSize: "2rem", color: "#337179" }}>Update Blog Form</h5>

      <form onSubmit={handleUpdate}>
        {/* Blog title input */}
        <label>Blog Title:</label><br />
        <input
          type="text"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          required
        /><br /><br />

        {/* Blog image upload */}
        <label>Blog Image:</label><br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setBlogImage(e.target.files[0])}
        />
        {/* Preview blog image */}
        {blogImage && (
          <div>
            <img
              src={typeof blogImage === "string" ? blogImage : URL.createObjectURL(blogImage)}
              alt="Blog Preview"
              width="100"
            />
          </div>
        )}
        <br /><br />

        {/* Blog content editor (ReactQuill) */}
        <label>Blog Content:</label>
        <ReactQuill
          theme="snow"
          value={blogContent}
          onChange={setBlogContent}
          modules={modules}
          formats={formats}
        /><br /><br />

        {/* Writer name input */}
        <label>Writer Name:</label><br />
        <input
          type="text"
          value={blogWriter}
          onChange={(e) => setBlogWriter(e.target.value)}
          required
        /><br /><br />

        {/* Writer image upload */}
        <label>Writer Image:</label><br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setWriterImage(e.target.files[0])}
        />
        {/* Preview writer image */}
        {writerImage && (
          <div>
            <img
              src={typeof writerImage === "string" ? writerImage : URL.createObjectURL(writerImage)}
              alt="Writer Preview"
              width="100"
            />
          </div>
        )}
        <br /><br />

        {/* Submit button */}
        <button className="btn_main submit_btn" type="submit">Update</button>
      </form>
    </div>
    </div>
  );
}

export default Updated_Blog;
