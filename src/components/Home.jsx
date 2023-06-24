import React from 'react';
import vg from "../assets/imgs-2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
  <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all you PROBLEMS</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, accusantium!
        </p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who we are ?</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione soluta perferendis ullam blanditiis cumque sit alias atque sunt. Nulla consequuntur molestias ratione, ut asperiores earum! Laboriosam, deserunt! Quis alias assumenda excepturi, quo magnam laborum beatae aspernatur soluta repudiandae corporis ducimus esse minima architecto voluptas, expedita quisquam modi dignissimos adipisci sit. Nam doloremque cumque quibusdam velit eos consequuntur enim sapiente aperiam, aut incidunt voluptatibus quae fugit vero illo cum dignissimos, tenetur, corrupti rem reiciendis ea quisquam perspiciatis.</p>
      </div>
    
    </div>

    <div className="home4" id='brands'>
      <div>
      <h1>Brands</h1>

      <article>
        <div style={{animationDelay:"0.3s"}}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>

        <div style={{animationDelay:"0.5s"}}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>

        
        <div style={{animationDelay:"0.7s"}}>
          <AiFillYoutube/>
          <p>YouTube</p>
        </div>

        
        <div style={{animationDelay:"0.9s"}}>
          <AiFillInstagram/>
          <p>Instagram</p>
        </div>
      </article>
      </div>
    </div>
  </>
  )
}

export default Home;