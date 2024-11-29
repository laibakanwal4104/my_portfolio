import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data =[
  {
    id: 0,
    title: 'Coming Soon',
    desc:' based app for managing and origanizing your tasks efficiently',
    img:"/project_1.jpg",
    tags:["React","Node","CSS","Typescript"],
  },
  {
    id: 1,
    title: "Monthly NewsLetter",
    desc:"A Next.js and Typescript powered website to track time with an interactive countdown feature.",
    img:"/project_2.jpg",
    tags:["Next.Js","Node","CSS","Typescript"],
  },
  {
    id: 2,
    title: "Sign in page...",
    desc:"A Next.js and Typescript based tool for fetching and displaying real-time weather data.",
    img:"/project_3.jpg",
    tags:["Next.Js","Node","CSS","Typescript"],
  },
  
  {
    id: 3,
    title: "Resume Builder",
    desc: "A simple HTML and Typescript powered tool for converting curriencies with real-time rates.",
    img : "/project_4.jpg",
    tags:["HTML","Node","CSS","TYPESCRIPT"]
  },
  {
    id: 4,
    title: "next.js project",
    desc: "A simple HTML and Typescript powered tool for converting curriencies with real-time rates.",
    img : "/project_5.jpg",
    tags:["HTML","Node","CSS","TYPESCRIPT"]
  },

];

const Projects = () => {
  return (
   <div id='projects' className='container pt-32'>
    <Heading title='My Projects' />
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      {data.map((el) =>(<Card 
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
       tags={el.tags} 
    />))}
    </div>
   </div>
  )
}

export default Projects