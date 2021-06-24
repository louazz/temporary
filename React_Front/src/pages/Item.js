import './Items.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
RouteComponentProps,
  withRouter
  } from "react-router-dom";
import { useHistory } from 'react-router-dom';
function Item(props: ItemProps) {
    const [title, settitle] = useState("");
    const [date, setdate] = useState("");
    const [image, setimage] = useState("");
    const [author, setauthor] = useState("");
	const [description, setdescription] = useState("");
    const [id,setid]=useState(props.match.params.id) 
    useEffect(() => {
    
        axios.get(`http://localhost:1337/items/${id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          settitle(res.data.title);     
          setdescription(res.data.description);   
          setauthor(res.data.owner.name)
          setdate(res.data.date);  
          setimage(res.data.image[0].url)
        })    
  });

  return (
   
    <div className="container">
    <img className="w-100" alt="none" src={`http://localhost:1337${image}`} />
    <div style={{maxWidth: '700px', top: '-100px'}} className="position-relative bg-white p-3 p-sm-5 mx-auto text-secondary">
      <div>
        <small>
          <a href="#" className="text-primary">Programming</a>, <a href="#" className="text-primary">Politics</a>
        </small>
      </div>
      <h1 className="font-weight-bold text-dark">{title}
      </h1>
      <div>
        <small className="text-dark">
          Written by <a href="#" className="text-primary">{author}</a>
        </small>
      </div>
      <p className="my-2" style={{lineHeight: 2}}>{description}</p>
    
        <small>
          <a href="#" className="text-primary">#election</a>, <a href="#" className="text-primary">#politics</a>, <a href="#" className="text-primary">#trump</a>, <a href="#" className="text-primary">#revenge</a>, <a href="#" className="text-primary">#2020</a>
        </small>
      </div>
   
  </div>

  );
}
interface ItemProps extends RouteComponentProps {
    id: string;
}
export default withRouter(Item);

