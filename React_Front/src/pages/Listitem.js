import './Items.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
function ItemList() {
    const history = useHistory();
    const [title, setTitle] = useState("");
	const [imageUrl, setimageUrl] = useState("");
    const [items, setitem] = useState([]);
    const [checker, setchecker]= useState(false)
    useEffect(() => {
    
            axios.get(`http://localhost:1337/items`)
            .then(res => {
              setitem( res.data);
              setchecker(true)
            })
            
        
      });
      function handle_navigation(id ){
        history.push(`/item/${id}`)
      }
   
  return (
<div>
<div className="container my-5">
  <div className="text-center mb-5">
    <span className="text-secondary text-uppercase">Blog</span>
    <h1 className="text-capitalize font-weight-bold mt-2">Our Latest <span style={{color: '#9B5DE5'}}>Items</span></h1>
  </div>
  
  <div className="row">
      {checker==true? items.map((article)=> (
      <div className="col-md-4 p-4" onClick={handle_navigation.bind(this, article.id)}>
      <div className="border">
        <div className="position-relative w-100" style={{height: '250px', backgroundImage: "url("+`http://localhost:1337${article.image[0].url}`+")", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="position-absolute bg-dark" style={{opacity: '.3', top: 0, left: 0, right: 0, bottom: 0}} />
          <a href="#" className="position-absolute px-3 py-2 text-white" style={{bottom: '10px', left: '10px', backgroundColor: '#9B5DE5'}}><small>PHOTOS</small></a>
        </div>
        <div className="px-3 pt-4 pb-3">
          <a href="#" className="d-inline-block"><h4 className="text-dark" style={{fontWeight: 600, fontSize: '1.1rem'}}>{article.title}</h4></a>
          <p className="tex-secondary">{article.author.name}</p>
          <div className="d-flex mt-4">
            <div className="d-flex align-items-center mr-4">
              <svg height="16px" className="mr-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300.988 300.988" style={{enableBackground: 'new 0 0 300.988 300.988'}} xmlSpace="preserve">
                <g>
                  <g>
                    <path d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493
            S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001
            s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z" />
                    <polygon points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883    " />
                  </g>
                </g></svg>
              <small className="mt-1" style={{color: '#9B5DE5'}}>6 min ago</small>
            </div>
            <div className="d-flex align-items-center">
              <svg height="16px" className="mr-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.015 60.015" style={{enableBackground: 'new 0 0 60.015 60.015'}} xmlSpace="preserve">
                <g>
                  <path d="M42.007,0h-24c-9.925,0-18,8.075-18,18v14c0,9.59,7.538,17.452,17,17.973v8.344c0,0.688,0.411,1.304,1.047,1.568
            c0.211,0.087,0.433,0.13,0.652,0.13c0.44,0,0.873-0.173,1.198-0.498l1.876-1.876C26.708,52.713,33.259,50,40.227,50h1.781
            c9.925,0,18-8.075,18-18V18C60.007,8.075,51.932,0,42.007,0z M58.007,32c0,8.822-7.178,16-16,16h-1.781
            c-7.502,0-14.555,2.921-19.86,8.226l-1.359,1.359V49v-1v-4c0-0.552-0.448-1-1-1s-1,0.448-1,1v3.949c-8.356-0.52-15-7.465-15-15.949
            V18c0-8.822,7.178-16,16-16h24c8.822,0,16,7.178,16,16V32z" />
                  <path d="M17.007,19.015h14c0.552,0,1-0.448,1-1s-0.448-1-1-1h-14c-0.552,0-1,0.448-1,1S16.455,19.015,17.007,19.015z" />
                  <path d="M44.007,25.015h-27c-0.552,0-1,0.448-1,1s0.448,1,1,1h27c0.552,0,1-0.448,1-1S44.56,25.015,44.007,25.015z" />
                  <path d="M44.007,33.015h-27c-0.552,0-1,0.448-1,1s0.448,1,1,1h27c0.552,0,1-0.448,1-1S44.56,33.015,44.007,33.015z" />
                </g>
              </svg>
              <small className="mt-1" style={{color: '#9B5DE5'}}>{article.date}</small>
            </div>
          </div>
        </div>
      </div>
    </div>)): <div></div>}
    
   
  </div>
</div>

</div>);}

export default ItemList;