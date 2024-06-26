import "./services.scss"
import {motion} from "framer-motion"

 const Services = () => {
  return (
    <motion.div className="Services">
        <motion.div className="textContainer">
            <p>I focus on helping your brand grow 
                <br />and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer">
           <div className="title">
          <img src="/people.webp"></img>
          <h1>
            <b>Unique</b>Ideas
            </h1>
            </div> 

           <div className="title">
          <h1><b>For Your</b>Business</h1>
          <button>WHAT WE DO?</button>
            </div> 
        </motion.div>
        <motion.div className="listContainer">
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id iusto rerum, perferendis impedit corrupti assumenda rem ratione ipsam sunt nisi! Iure voluptatem hic voluptate! Porro necessitatibus et commodi officiis.</p>
            </div>
            <button>GO</button>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id iusto rerum, perferendis impedit corrupti assumenda rem ratione ipsam sunt nisi! Iure voluptatem hic voluptate! Porro necessitatibus et commodi officiis.</p>
            </div>
            <button>GO</button>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id iusto rerum, perferendis impedit corrupti assumenda rem ratione ipsam sunt nisi! Iure voluptatem hic voluptate! Porro necessitatibus et commodi officiis.</p>
            </div>
            <button>GO</button>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id iusto rerum, perferendis impedit corrupti assumenda rem ratione ipsam sunt nisi! Iure voluptatem hic voluptate! Porro necessitatibus et commodi officiis.</p>
            </div>
            <button>GO</button>
        </motion.div>
    </motion.div>
  )
}
export default Services