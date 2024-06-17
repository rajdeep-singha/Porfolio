import {motion} from "framer-motion"
import { useState } from "react";

 const Test = () => {

const [open,stateOpen] = useState(false)

const variants = {
  visible:{opacity:1},
  hidden:{opacity:0},
}



  return (
    <div className="course">
      <motion.div 
      className="box" 
      variants ={variants}
      // innitial ="hidden"
      // animate ="visible"
      transition={{duration:2}}
      animate={open ? "visible" :"hidden" }
      ></motion.div>
      <button onClick={()=>stateOpen(prev=>!prev)}>CLICK</button>
    </div>
  );
};

export default Test