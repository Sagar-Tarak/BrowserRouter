import React from 'react'
import vg from "../Assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram}  from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>

<main>
  <h1>BrowserRouter</h1>
  <p>React Router Dom Test Project </p>
</main>

</div>

<div className="home2">

     <img src={vg} alt="Graphics" />

    <div>
      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum doloribus beatae maiores enim aliquam alias, consequatur temporibus deleniti, sed odio veritatis id reiciendis cum, facilis quisquam? Ullam eveniet neque odit, id unde illo tempore, nulla earum laudantium labore nihil fugiat corporis voluptatibus, omnis ex possimus eum dignissimos dolor vitae minus.
      </p>
    </div> 


</div>

<div className="home3" id='about'>
  <div>
    <h1>Who we are ?</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis odit dolores consequatur natus sunt. Eum pariatur similique saepe numquam consequuntur doloremque ea molestiae, harum voluptas nisi voluptatem obcaecati impedit quod, fugit debitis aspernatur magni nostrum sed officia quibusdam! Nihil, ex? Cupiditate magnam consectetur nostrum voluptates repellendus fuga dolorum ut provident.</p>
  </div>
</div>

<div className="home4" id='brands'>
  <div>
    <h1>Brands</h1>

    <article>
      <div style={{
        animationDelay : "0.3s"
      }}>
        <AiFillGoogleCircle/>
        <p>Google</p>
      </div>

      <div style={{
        animationDelay : "0.5s"
      }}>
        <AiFillAmazonCircle/>
        <p>Amazon</p>
      </div>

      <div style={{
        animationDelay : "0.7s"
      }}>
        <AiFillYoutube/>
        <p>Youtube</p>
      </div>

      <div style={{
        animationDelay : "1s"
      }}>
        <AiFillInstagram/>
        <p>instagram</p>
      </div>
    </article>
  </div>
</div>

</>
  )
}

export default Home