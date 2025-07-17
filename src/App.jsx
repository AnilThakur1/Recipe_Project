//  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // import "./components/Mealsearch.css";
// import AppLayout from './layouts/AppLayout';
// import About from './pages/About';
// import Blog from './pages/blog';
// import Contact from './pages/Contact';
// import Home from './pages/home';
// import './root.css';
// import './components/responsive.css';
// import CardDetail from './pages/card_detail';
// import MealSearch from './pages/search';
// import Add_New_Block from './pages/add_new_block';
// import Blog_Card_Detail from './pages/blog_card_detail';
// import Ingredients_Detail from './pages/ingredients_detail';
// import Updated_Blog from './pages/updated_blog';
// import IngredientsSearchResult from './pages/ingredient_search_result';
// const router = createBrowserRouter([  
//   {
//     path: '/',
//     element: <AppLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'home', element: <Home /> },
//       { path: 'about', element: <About /> },
//       { path: 'blog', element: <Blog /> },
//       { path: 'blog/form', element: <Add_New_Block /> },
//       { path: 'blog/update/:id', element: <Updated_Blog /> },
//        { path: 'blog', element: <Add_New_Block /> },  
//       { path: 'blog/:id', element: <Blog_Card_Detail /> },
//       { path: 'contact', element: <Contact /> },
//       { path: 'search/:query', element: <MealSearch /> },
//       {path: 'ingredients/:name', element: <Ingredients_Detail />},      
//       { path: 'meal/:id', element: <CardDetail /> },
//        { path: 'IngredientsSearchResult/:ingredientquery', element: <IngredientsSearchResult /> }
//     ],
//   },
// ]);
// function App() {
//   return <RouterProvider router={router} />;
// }
// export default App;






  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  // import "./components/Mealsearch.css";
  import AppLayout from './layouts/AppLayout';
  import About from './pages/About';
  import Blog from './pages/blog';
  import Contact from './pages/Contact';
  import Home from './pages/home';
  import './root.css';

  import './components/responsive.css';



  import CardDetail from './pages/card_detail';
  import MealSearch from './pages/search';

  import Add_New_Block from './pages/add_new_block';
  import Blog_Card_Detail from './pages/blog_card_detail';

  import Ingredients_Detail from './pages/ingredients_detail';
  import Updated_Blog from './pages/updated_blog';

  import ScrollToTop from './components/ScrollToTop';
  import IngredientsSearchResult from './pages/ingredient_search_result';



  const AppLayoutWithScroll = () => (
    <>
      <ScrollToTop />
      <AppLayout />
    </>
  );

  
  const router = createBrowserRouter([
    
    
    {
      path: '/',
      element: <AppLayoutWithScroll />,
      children: [

        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },

        { path: 'blog', element: <Blog /> },
        { path: 'blog/form', element: <Add_New_Block /> },

        { path: 'blog/update/:id', element: <Updated_Blog /> },

        { path: 'blog', element: <Add_New_Block /> },  

        { path: 'blog/:id', element: <Blog_Card_Detail /> },
        { path: 'contact', element: <Contact /> },
        { path: 'search/:query', element: <MealSearch /> },
        {path: 'ingredients/:name', element: <Ingredients_Detail />},

        
        { path: 'meal/:id', element: <CardDetail /> },

        { path: 'IngredientsSearchResult/:ingredientquery', element: <IngredientsSearchResult /> }
      ],
    },
  ]);



  function App() {
    
    return <RouterProvider router={router} />;
  }

  export default App;
  
 