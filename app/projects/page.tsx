'use client'

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface Project{
  image: string,
  category: string,
  name: string,
  description: string,
  link: string,
  github: string;

}

const projectData:Project[] = [
  {
    image: '/assets/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, architecto.',
    link: '/',
    github: '/'
  },
  {
    image: '/assets/work/4.png',
    category: 'react js',
    name: 'Solstice Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, architecto.',
    link: '/',
    github: '/'
  },
  {
    image: '/assets/work/2.png',
    category: 'next js',
    name: 'Lumina Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, architecto.',
    link: '/',
    github: '/'
  },
  {
    image: '/assets/work/1.png',
    category: 'next js',
    name: 'Evolve Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, architecto.',
    link: '/',
    github: '/'
  },
  {
    image: '/assets/work/3.png',
    category: 'next js',
    name: 'Ignite Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, architecto.',
    link: '/',
    github: '/'
  },
  {
    image: '/assets/work/4.png',
    category: 'next js',
    name: 'Envision Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, architecto.',
    link: '/',
    github: '/'
  },
  {
    image: '/assets/work/1.png',
    category: 'fullstack',
    name: 'Serenity Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, architecto.',
    link: '/',
    github: '/'
  },
  {
    image: '/assets/work/3.png',
    category: 'fullstack',
    name: 'Nova Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, architecto.',
    link: '/',
    github: '/'
  },
  {
    image: '/assets/work/2.png',
    category: 'fullstack',
    name: 'Zenith Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, architecto.',
    link: '/',
    github: '/'
  },
]


// Create an array of unique categories (removing duplicates using Set) and prepend 'all projects'
const uniqueCategories = ['all projects',...Array.from(
  new Set(projectData.map(item => item.category))
)]


const Page = () => {
  const [category,setCategory] = useState('all projects')

  const filteredProjects = projectData.filter((project) =>{
    return category === 'all projects'? project : project.category === category
  })

  
  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
          </h2>
          {/* tabs */}
          <Tabs defaultValue={category} className="mb-24 xl:mb-48">
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
              {uniqueCategories.map((Category,index)=>{
                return ( 
                <TabsTrigger 
                onClick={()=> setCategory(Category)}
                value={Category} 
                key={index} 
                className=" capitalize w-[162px] md:w-auto">
                  {Category}
                  </TabsTrigger>
                )
              })}
            </TabsList>
            {/* tabs content */}
            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project, index)=>{
                return <TabsContent value={category} key={index}>
                  <ProjectCard project={project}/>
                </TabsContent>

              })}
            </div>
          </Tabs>
      </div>
    </section>
  )
}

export default Page