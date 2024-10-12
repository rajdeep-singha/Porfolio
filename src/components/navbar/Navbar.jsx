import "./Navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar";
// import { Link } from 'react-router-dom';

 const Navbar = () => {
  return (
    <div className="navbar">
    {/* Sidebar */}
   <Sidebar/>
    <div className="wrapper">
        <motion.span 
        innitial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}
        >Rajdeep</motion.span>
      <div className="social">
     
        <a href="https://www.facebook.com/profile.php?id=61560452826487" target="_blank"><img src="/facebook.png" alt=""/></a>
        <a href="https://www.instagram.com/rajdeepsingha4" target="_blank"><img src="/instagram.png" alt=""/></a>
        <a href="https://www.youtube.com/@rajdeepsingha1611"  target="_blank"><img src="/youtube.png" alt=""/></a>
        {/* <a href="#"><img src="/dribble.png" alt=""/></a> */}
      </div>
    </div>
    </div>
  )
}
export default Navbar