import { Link } from "react-router-dom";
 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './card_detail.css';

const CardDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        if (data.meals) {
          setMeal(data.meals[0]);
        } else {
          setError('Meal not found');
        }
      } catch (err) {
        setError('Failed to fetch meal');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);



  if (loading) return <p className="width_95">Loading...</p>;
  if (error) return <p>{error}</p>;

  // Extract ingredients and their measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure ? measure.trim() : '',
        imageUrl: `https://www.themealdb.com/images/ingredients/${ingredient.trim().replace(/\s+/g, '_')}.png`
      });
    }
  }



  
  return (

    <div className="m_padding">

  
    <div className="detail_pages">
      {/* Ingredients Section */}
      <div className='Ingredients'>
        <h6>Ingredients</h6>
        <div className='all_ingredients'>
          {ingredients.map((item, index) => (



            <Link to={`/ingredients/${item.name}`} key={index}>
              <div className='Img_details'>
                <div className='Img_title'>
                  <img className='Img_image' src={item.imageUrl} alt={item.name} />
                  <p className='item_name'>{item.name}</p>
                </div>
                <p className='measure_name'>{item.measure}</p>
              </div>
            </Link>

          ))}
        </div>
      </div>




      {/* Meal Detail Section */}
      <div className='detail_wrapper'>
        <div className='Features'>
          <img className='feature_image' src={meal.strMealThumb} alt='Image loading...' />
          <div className='image_div'>
            <h6 className='image_title'>{meal.strMeal}</h6>
            <p>Lorem ipsum dolor sit amcon sectetur lorem structure</p>
          </div>
          <div className="youtube_link">
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'red' }} >
              <i className="fa-brands fa-youtube"></i> watch recipe video
            </a>
          </div>
        </div>



{/* This Iingredients is only view max 1300*/}

        <div className='Ingredients s_ingredients'>
        <h6>Ingredients</h6>
        <div className='all_ingredients'>
          {ingredients.map((item, index) => (



            <Link to={`/ingredients/${item.name}`} key={index}>
        
              <div className='Img_details'>
                <div className='Img_title'>
                  <img className='Img_image' src={item.imageUrl} alt={item.name} />
                  <p className='item_name'>{item.name}</p>
                </div>
                <p className='measure_name'>{item.measure}</p>
              </div>
            </Link>

          ))}
        </div>
      </div>











        {/* Directions Section */}
        <div className='Direction'>
          <h6>Directions</h6>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    </div>




  </div>

      
  );
};

export default CardDetail;
