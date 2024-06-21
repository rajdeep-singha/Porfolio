import "./hero.scss"

 const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
      <div className="textContainer">
        <h2> RAJDEEP SINGHA</h2>
        <h1>DEVELOPER and Community Manager</h1>
        <div className="button">
          <button>See the Latest Works</button>
          <button>Contact Me</button>
          </div>
          <img src="scroll.png" alt="" />
      </div>
      </div>
      <div className="imageContainer">
        <img src="hero.png" alt=""/>
      </div>
    </div>
  )
}
export default Hero