import React from 'react';
import useInstagram from "../hooks/use-instagram";
import Image from 'gatsby-image';

const Insta = () =>{
  const data = useInstagram();
  console.log("data", data);
  
  const {username} = data[0];
  console.log("username", username);
  
  return(
    <div>
      <h2>Instagram posts</h2>
      {data.map((photo)=>{
        return(
          <a href={`https://instagram.com/p/${photo.id}`} target="_blank">
          <Image fluid={photo.fluid}
          alt={photo.caption}/>
          </a>
        )
      })}
    </div>
  )
}



export default Insta;