// import React from 'react'

// import { useNavigate, Link } from "react-router-dom";


// function AddConfession() {
//   return (
//     <div  className="wrapper">
//         <h1 className="Heading"> Your Safe Haven for Unspoken Words</h1>

//         <div className='AddConfessionBox'>
//             <div><h1 className='headingx1'>Write your confession:</h1></div>
//             <div>
//               <p>Don't use any profanity or hate speech. Such posts won't be approved. You can include references of the person you want to confess to.</p>
//             </div>
//             <div>
//               <textarea className='textarea' type='textarea' placeholder='Hey xyz, I want to confess... With love '>
//               </textarea>
//             </div>
//             <div className='addconfessbtn'>
//                 <button className='AddBtn1 boxs1'>Submit Whisper</button>

//                 <Link to="/">
//                 <button className="AddBtn1  boxs2" >
//                 Go Back
//                 </button>
//                 </Link>

//             </div>

//         </div>
//     </div>
//   )
// }

// export default AddConfession



import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { dCritique_backend } from 'path-to-your-backend'; // Replace with the correct path
import { dCritique_backend } from "../../../declarations/dCritique_backend/index";
// import { useNavigate, Link } from "react-router-dom";
import { Loader } from "./Loader.jsx";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom";


function AddConfession() {
  // const navigate = useNavigate();
  const nav = useNavigate();
  const [loader, setLoader] = useState(false);


  const [confessionText, setConfessionText] = useState('');

  const handleSubmit = async () => {
    try {

      await dCritique_backend.addConfession(confessionText);
      // window.location.reload();
      // nav("/");
    } catch (error) {
      console.error('Error submitting confession:', error);
    }
  };

  function navigatetoConfessionPage(){
    navigate('/ConfessionGallery');
  }

  return (
    <div className="wrapper">
      <h1 className="Heading"> Your Safe Haven for Unspoken Words</h1>

      <div className="AddConfessionBox">
        <div>
          <h1 className="headingx1">Write your confession:</h1>
        </div>
        <div>
          <p>
            Don't use any profanity or hate speech. Such posts won't be
            approved. You can include references to the person you want to
            confess to.
          </p>
        </div>
        <div>
          <textarea
            className="textarea"
            type="textarea"
            placeholder="Hey xyz, I want to confess... With love"
            value={confessionText}
            onChange={(e) => setConfessionText(e.target.value)}
          />
        </div>
        <div className="addconfessbtn">
          <button className="AddBtn1 boxs1" onClick={handleSubmit} onChange={navigatetoConfessionPage}>
            Submit Whisper
          </button>

          <Link to="/">
            <button className="AddBtn1  boxs2">Go Back</button>
          </Link>

          <Link to="/ConfessionGallery">
            <button className="AddBtn1  boxs2">Confession Gallery</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddConfession;