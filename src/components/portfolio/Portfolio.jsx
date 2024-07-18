//  import "./portfolio.scss"
//  import {motion , useScroll ,useSpring } from "framer-motion"
//  import { useRef } from "react";

// const items =[
//   {
//     id:1,
//   title:"React Commerce",
//     img:"https://images.pexels.com/photos/26570911/pexels-photo-26570911/free-photo-of-sea-turtle-in-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia ipsam ipsum. At provident voluptatum reprehenderit, et corporis possimus quos itaque rem sit obcaecati ipsum sed pariatur esse inventore quod.",
//    },
//       {
//      id:2,
//      title:"Next.js Commerce",
//      img:"https://images.pexels.com/photos/25578495/pexels-photo-25578495/free-photo-of-my-home.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia ipsam ipsum. At provident voluptatum reprehenderit, et corporis possimus quos itaque rem sit obcaecati ipsum sed pariatur esse inventore quod.",
//    },
//    {
//      id:3,
//      title:"vanella.js Commerce",
//      img:"https://images.pexels.com/photos/25947620/pexels-photo-25947620/free-photo-of-a-road-with-trees-on-both-sides.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia ipsam ipsum. At provident voluptatum reprehenderit, et corporis possimus quos itaque rem sit obcaecati ipsum sed pariatur esse inventore quod.",
//    },
//    {
//      id:4,
//      title:"js Commerce",
//     img:"https://images.pexels.com/photos/23848647/pexels-photo-23848647/free-photo-of-a-stream-runs-through-a-grassy-field-next-to-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//       },
// ];

//  const Single=({item})=>{
//  return (
//     <section>
//        {item.title}
//     </section>
//    ),
//  };

//    const Portfolio = () => {

//    return (
//      <div className="portfolio" ref={ref}>
//       <div className="progress">
//        <h1>Feature Works</h1>
//          <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
// </div>
//        {
//         items.map((item) =>(
//           <Single item ={item} key={item.id}/>
//         )
//        )
//       }
//      </div>
   
//   )
//  }
//  export default Portfolio


// import "./portfolio.scss"
// import {motion , useScroll ,useSpring } from "framer-motion"
//  import { useRef } from "react";

// const items =[
//     {
//       id:1,
//     title:"React Commerce",
//       img:"https://images.pexels.com/photos/26570911/pexels-photo-26570911/free-photo-of-sea-turtle-in-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//       desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia ipsam ipsum. At provident voluptatum reprehenderit, et corporis possimus quos itaque rem sit obcaecati ipsum sed pariatur esse inventore quod.",
//      },
//         {
//        id:2,
//        title:"Next.js Commerce",
//        img:"https://images.pexels.com/photos/25578495/pexels-photo-25578495/free-photo-of-my-home.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//       desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia ipsam ipsum. At provident voluptatum reprehenderit, et corporis possimus quos itaque rem sit obcaecati ipsum sed pariatur esse inventore quod.",
//      },
//      {
//        id:3,
//        title:"vanella.js Commerce",
//        img:"https://images.pexels.com/photos/25947620/pexels-photo-25947620/free-photo-of-a-road-with-trees-on-both-sides.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia ipsam ipsum. At provident voluptatum reprehenderit, et corporis possimus quos itaque rem sit obcaecati ipsum sed pariatur esse inventore quod.",
//      },
//      {
//        id:4,
//        title:"js Commerce",
//       img:"https://images.pexels.com/photos/23848647/pexels-photo-23848647/free-photo-of-a-stream-runs-through-a-grassy-field-next-to-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//         },
//   ];
//  const Single=({item})=>{
//  return (
//     <section>
//        {item.title}
//     </section>
//  )
//  }

//  const Portfolio = () => {
//   return (
//     <div className="portfolio">
//       {items.map(item=>(
//         <single  item={item} key={item.id} />
//       ))}
//     </div>
//   )
// }
// export default Portfolio


import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;