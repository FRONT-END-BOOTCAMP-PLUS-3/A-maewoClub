'use client'
import Image from "next/image";

const RecipeCard = () => {
  return (
    <div>
      <Image src="/" alt="Avatar" width={100} height={100} />
      <div className="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  )
};

export default RecipeCard;
