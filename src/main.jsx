import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts  , {loader as postsLoader} from './routes/Posts';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import RootLayout from './routes/RootLayout.jsx';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import NewPost ,{action as newPostAction} from './routes/NewPost.jsx';
import PostDetails , {loader as PostDetailsLoader} from './routes/PostDetails.jsx';


/*
1- npm install react-router-dom
2- we can use routering for mak ultiple paths provided with multiple contents
3- layout router : to share a component for every page or path

*/
const router = createBrowserRouter([
  {
    path : "/" , element : <RootLayout/> ,
    children : [
      {path : "/" , element : <Posts/> ,
      loader : postsLoader,
        children : [
        { path : "/create-post" , element : <NewPost/> , action : newPostAction},
        {path : '/:id' , element : <PostDetails/>, loader : PostDetailsLoader}  
      ]},
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
