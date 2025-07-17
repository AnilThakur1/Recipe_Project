import { Link, useNavigate } from "react-router-dom";
import './blog_card.css';

const Blog_Card = ({ props, id, onDelete}) =>  {
 
 const navigate = useNavigate();


  return (

    <div>

    <Link  className="blog_item" to={`/blog/${id}`} >
      <img
        src={props.blogImage}
        alt="Blog"
        style={{ width: "100%", height: "300px", borderRadius: "12px", objectFit: "cover" }}
        />

      <h4>{props.title}</h4>
    </Link>

  
       
 


    <div className="ED_btn" >

    <button  className="btn_main edit_btn"  onClick={() => navigate(`/blog/update/${id}`)}>Edit</button>
    <button className="btn_main delete_btn" onClick={() => onDelete(id)}>Delete</button>

      
 
    

    </div>




  </div>

    

  );
};

export default Blog_Card;
