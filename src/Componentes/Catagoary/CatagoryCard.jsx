// import React from 'react';

// function CategoryCard({ title, imgLink }) {
//   return (
//     <div className="catagoary">
//       <a href="#">
//         <span>
//           <h2>{title}</h2>
//         </span>
//         <img src={imgLink} alt={title} />
//       </a>
//     </div>
//   );
// }

// export default CategoryCard;


// import React from 'react';
// import classes from './Catagory.module.css'; // CSS Module import
// import {Link} from 'react-router-dom';

// function CategoryCard({ data }) {
//   return (
//     <div className={classes.catagoary}>
//       <a href="#">
//         <h2>{data.title}</h2>
//         <img src={data.imgLink} alt={data.title} />
//       </a>
//     </div>
//   );
// }

// export default CategoryCard;


// import React from "react";
// import classes from "./Catagory.module.css";
// import { Link } from "react-router-dom";

// function CategoryCard({ data }) {
//   return (
//     <div className={classes.catagoary}>
//       <Link to={`/category/${data.name}`}>
//         <h2>{data.title}</h2>
//         <img src={data.imgLink} alt={data.title} />
//       </Link>
//     </div>
//   );
// }

// export default CategoryCard;


// CategoryCard.jsx
// import { Link } from "react-router-dom";
// import classes from "./Catagory.module.css";

// function CategoryCard({ data }) {
//   return (
//     <div className={classes.catagoary}>
//       <Link to={`/category/${encodeURIComponent(data.name)}`}>
//         <h2>{data.title}</h2>
//         <img src={data.imgLink} alt={data.title} />
//       </Link>
//     </div>
//   );
// }

// export default CategoryCard;


import React from "react";
import classes from "./Catagory.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  return (
    <div className={classes.catagoary}>
      <Link to={`/category/${encodeURIComponent(data.name)}`}>  {/*  Correct encoding */}
        <h2>{data.title}</h2>
        <img src={data.imgLink} alt={data.title} />
      </Link>
    </div>
  );
}

export default CategoryCard;
