import React from "react";
import data from "./data";

function Display () {
  console.log(data)
return (
  <div>
     <h1>Photo Of the Day</h1>
     <h2>Today's Date: {data.date}</h2>
     <img src={data.url} alt=''/>
     <h2>{data.title}</h2>
     <p>{data.explanation}</p>
  </div>
)
};

export default Display;