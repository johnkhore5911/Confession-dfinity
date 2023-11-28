// import React, { useState, useEffect } from "react";

// function ConfessionGallery() {

//         const [like,setLike] = useState()
//         function changeLike(){
//           data[0].likecount=7;

//           useEffect(()=>{

//           },[changeLike])
//         }
//         const reviews = data.map((a) => (
//           <ul className='abc'>
//             <li className="item">
//               <div className="review">
//                 <div className="imgContainer">
//                   <img className="image" src="images" alt="rev" />
//                 </div>
//                 <span className="text">{a.review}</span>
//               </div>
//               <div className="votebtns">
//                 <button id="like" data-type="like" onChange={changeLike} value = {a.likecount} className="like a AddBtn2">  💗{a.likecount}</button>
//                 <button id="dislike" data-type="dislike" className="dislike b AddBtn2"> 💔{a.dislikecount}</button>
//               </div>
//             </li>
//           </ul>
//         ));


  
//   return <div className='wrapper'>
//     {reviews}
//   </div>;
// }

// export default ConfessionGallery;

// // 
// const data= [
//   {
//     star: `5`,
//     likecount:"6",
//     dislikecount:"0",
//     img: `/students/Sarah.png`,
//     review:  `"
//     I must confess, my feelings untold.
//     To the girl in IT second year, my heart's decree,
//     You're the joy in my digital journey." `,
//   },
//   {
//     star: `5`,
//     likecount:"6",
//     dislikecount:"0",
//     img: `/students/Sarah.png`,
//     review:  `"In the realm of circuits and sparks that fly,
//     A confession whispers, no more shy.
//     To the girl in EEE's second year,
//     In my heart, your presence is crystal clear."`,
//   },{
//     star: `5`,
//     likecount:"6",
//     dislikecount:"0",
//     img: `/students/Sarah.png`,
//     review:  `"
//     I must confess, my feelings untold.
//     To the girl in IT second year, my heart's decree,
//     You're the joy in my digital journey." `,
//   },
//   {
//     star: `5`,
//     likecount:"6",
//     dislikecount:"0",
//     img: `/students/Sarah.png`,
//     review:  `"In the realm of circuits and sparks that fly,
//     A confession whispers, no more shy.
//     To the girl in EEE's second year,
//     In my heart, your presence is crystal clear."`,
//   },
  
// ]

// import React, { useState } from "react";

// const data = [
//   {
//     star: "5",
//     likecount: 6,
//     dislikecount: 0,
//     img: "/students/Sarah.png",
//     review: `
//     I must confess, my feelings untold.
//     To the girl in IT second year, my heart's decree,
//     You're the joy in my digital journey.
//   `,
//   },
//   {
//     star: "5",
//     likecount: 6,
//     dislikecount: 0,
//     img: "/students/Sarah.png",
//     review: `
//     In the realm of circuits and sparks that fly,
//     A confession whispers, no more shy.
//     To the girl in EEE's second year,
//     In my heart, your presence is crystal clear.
//   `,
//   },
//   {
//     star: "5",
//     likecount: 6,
//     dislikecount: 0,
//     img: "/students/Sarah.png",
//     review: `
//     I must confess, my feelings untold.
//     To the girl in IT second year, my heart's decree,
//     You're the joy in my digital journey.
//   `,
//   },
//   {
//     star: "5",
//     likecount: 6,
//     dislikecount: 0,
//     img: "/students/Sarah.png",
//     review: `
//     In the realm of circuits and sparks that fly,
//     A confession whispers, no more shy.
//     To the girl in EEE's second year,
//     In my heart, your presence is crystal clear.
//   `,
//   },
// ];

// function ConfessionGallery() {
//   const [reviews, setReviews] = useState(data);

//   const handleLikeClick = (index) => {
//     const updatedReviews = [...reviews];
//     updatedReviews[index].likecount += 1;
//     setReviews(updatedReviews);
//   };

//   return (
//     <div className="wrapper">
//       {reviews.map((a, index) => (
//         <ul className="abc" key={index}>
//           <li className="item">
//             <div className="review">
//               <div className="imgContainer">
//                 <img className="image" src={a.img} alt="rev" />
//               </div>
//               <span className="text">{a.review}</span>
//             </div>
//             <div className="votebtns">
//               <button
//                 id={`like-${index}`}
//                 onClick={() => handleLikeClick(index)}
//                 className="like a AddBtn2"
//               >
//                 💗{a.likecount}
//               </button>
//               <button
//                 id={`dislike-${index}`}
//                 className="dislike b AddBtn2"
//               >
//                 💔{a.dislikecount}
//               </button>
//             </div>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// export default ConfessionGallery;
// import React, { useState } from "react";

// const data = [
//   {
//     star: "5",
//     likecount: 6,
//     dislikecount: 0,
//     img: "/students/Sarah.png",
//     review: `
//     I must confess, my feelings untold.
//     To the girl in IT second year, my heart's decree,
//     You're the joy in my digital journey.
//   `,
//   },
//   {
//     star: "5",
//     likecount: 6,
//     dislikecount: 0,
//     img: "/students/Sarah.png",
//     review: `
//     In the realm of circuits and sparks that fly,
//     A confession whispers, no more shy.
//     To the girl in EEE's second year,
//     In my heart, your presence is crystal clear.
//   `,
//   },
//   {
//     star: "5",
//     likecount: 6,
//     dislikecount: 0,
//     img: "/students/Sarah.png",
//     review: `
//     I must confess, my feelings untold.
//     To the girl in IT second year, my heart's decree,
//     You're the joy in my digital journey.
//   `,
//   },
//   {
//     star: "5",
//     likecount: 6,
//     dislikecount: 0,
//     img: "/students/Sarah.png",
//     review: `
//     In the realm of circuits and sparks that fly,
//     A confession whispers, no more shy.
//     To the girl in EEE's second year,
//     In my heart, your presence is crystal clear.
//   `,
//   },
// ];

// function ConfessionGallery() {
//   const [reviews, setReviews] = useState(data);

//   const handleLikeClick = (index) => {
//     const updatedReviews = [...reviews];
//     if (!updatedReviews[index].liked) {
//       updatedReviews[index].likecount += 1;
//       updatedReviews[index].liked = true;
//     } else {
//       updatedReviews[index].likecount -= 1;
//       updatedReviews[index].liked = false;
//     }
//     setReviews(updatedReviews);
//   };

//   const handleDislikeClick = (index) => {
//     const updatedReviews = [...reviews];
//     if (!updatedReviews[index].disliked) {
//       updatedReviews[index].dislikecount += 1;
//       updatedReviews[index].disliked = true;
//     } else {
//       updatedReviews[index].dislikecount -= 1;
//       updatedReviews[index].disliked = false;
//     }
//     setReviews(updatedReviews);
//   };

//   return (
//     <div className="wrapper">
//       {reviews.map((a, index) => (
//         <ul className="abc" key={index}>
//           <li className="item">
//             <div className="review">
//               <div className="imgContainer">
//                 <img className="image" src={a.img} alt="rev" />
//               </div>
//               <span className="text">{a.review}</span>
//             </div>
//             <div className="votebtns">
//               <button
//                 id={`like-${index}`}
//                 onClick={() => handleLikeClick(index)}
//                 className="like a AddBtn2"
//               >
//                 💗{a.likecount}
//               </button>
//               <button
//                 id={`dislike-${index}`}
//                 onClick={() => handleDislikeClick(index)}
//                 className="dislike b AddBtn2"
//               >
//                 💔{a.dislikecount}
//               </button>
//             </div>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// export default ConfessionGallery;


// 
// 
// import React, { useState, useEffect } from "react";
// import { dCritique_backend } from "../../../declarations/dCritique_backend/index";


// function ConfessionGallery() {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend here
//     const fetchData = async () => {
//       try {
//         // const response = await fetch("your-backend-endpoint"); // Replace with the actual endpoint
//         const response = await dCritique_backend.getReview();

//         const data = await response.json();
//         setReviews(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   const handleLikeClick = (index) => {
//     // Your existing like click logic
//   };

//   const handleDislikeClick = (index) => {
//     // Your existing dislike click logic
//   };

//   return (
//     <div className="wrapper">
//       {reviews.map((a, index) => (
//         <ul className="abc" key={index}>
//           <li className="item">
//             <div className="review">
//               <div className="imgContainer">
//                 <img className="image" src={a.img} alt="rev" />
//               </div>
//               <span className="text">{a.review}</span>
//             </div>
//             <div className="votebtns">
//               <button
//                 id={`like-${index}`}
//                 onClick={() => handleLikeClick(index)}
//                 className="like a AddBtn2"
//               >
//                 💗{a.likecount}
//               </button>
//               <button
//                 id={`dislike-${index}`}
//                 onClick={() => handleDislikeClick(index)}
//                 className="dislike b AddBtn2"
//               >
//                 💔{a.dislikecount}
//               </button>
//             </div>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// export default ConfessionGallery;


import React, { useState, useEffect } from 'react';
import { dCritique_backend } from "../../../declarations/dCritique_backend/index";


function ConfessionGallery() {
  
  const [LikeCount, setLikeCount] = useState(0)
  const [DisCount, setDisCount] = useState(0)
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await dCritique_backend.getReviews();
    setData(res);
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

      return (
    <div className="wrapper">
      {data.map((a, index) => (
        <ul className="abc" key={index}>
          <li className="item">
            <div className="review">
              <div className="imgContainer">
                {/* <img className="image" src={a.img} alt="rev" /> */}
              </div>
              <span className="text">{a.review}</span>
            </div>
            <div className="votebtns">
              <button
                id={`like-${index}`}
                onClick={() => handleLikeClick(index)}
                className="like a AddBtn2"
              >
                💗{a.likecount}
              </button>
              <button
                id={`dislike-${index}`}
                onClick={() => handleDislikeClick(index)}
                className="dislike b AddBtn2"
              >
                💔{a.dislikecount}
              </button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );

}


export default ConfessionGallery;
