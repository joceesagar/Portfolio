import React from 'react'
import DevImage from './DevImage'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

import { 
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase, 
    University
} from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: "Sagar Joshi"
    },
    {
        icon: <PhoneCall size={20}/>,
        text: "+012 345 6789"
    },
    {
        icon: <MailIcon size={20}/>,
        text: "mymail@email.com"
    },
    {
        icon: <Calendar size={20}/>,
        text: "Born on 25 Feb, 2005"
    },
    {
        icon: <GraduationCap size={20}/>,
        text: "Bachelor in IT Engineering"
    },
    {
        icon: <HomeIcon size={20}/>,
        text: "321 Blue Avenue, KY, USA"
    }
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Tribhuwan University',
                qualification: 'Bachelor of Engineering',
                years: '2078 - 2082'
            },
            {
                university: 'Another University',
                qualification: 'Master in Engineering',
                years: '2083 - 2085'
            },
         
           
            {
                university: 'Another University',
                qualification: 'Ph.d in Computer Science',
                years: '2085 - present'
            }
           
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'ABC Inc.',
                qualification: 'Software Engineer',
                years: '2078 - 2082'
            },
            {
                company: 'XYZ Corporation',
                qualification: 'Senior Developer',
                years: '2083 - 2085'
            },
         
           
            {
                company: 'Tech Innovators',
                qualification: 'Lead Developer',
                years: '2085 - present'
            }
           
        ]
    }
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'Javascript, React',
            },
            {
                name: 'Back-end Development',
            },
        
        ]
        
    },
    {
        title: 'todo',
        data: [
            {
                name: '/about/vscode.svg',
            },
            {
                name: 'about/figma.svg',
            },
            {
                name: 'about/notion.svg',
            },
            {
                name: 'about/wordpress.svg',
            },
        
        ]
        
    }
]


const About:React.FC = () => {
    const getData = (arr:Array<string | any>, title:string) =>{
        return arr.find((item) => item.title === title)
    }
    
  return (
    <section className='xl-h-[860px] pb-12 xl:py-24'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
            <div className='flex flex-col xl:flex-row'>
                {/* image */}
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImage containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/assets/about/developer.png'/>
                </div>
                {/* tabs */}
                <div className='flex-1'>
                    <Tabs>
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualification'>Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className='text-lg mt-12 xl:mt-8' >
                            {/* personal */}
                        <TabsContent value='personal'>
                            <div className='text-center xl:text-left'>
                                <h3 className='h3 mb-4'>Unmatched Service Quality for Over 10 Years</h3>
                                <p className='subtitle max-w-xl mx-auto xl:mx-0'>I specialize in craftinf intutive websites with cutting-edge technology, delevering dynamic and engaging user experiences </p>
                                {/* icons */}
                                <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                    {infoData.map((item, index)=>{
                                        return <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                            <div className='text-primary'>{item.icon}</div>
                                            <div>{item.text}</div>
                                        </div>
                                    })}
                                </div>
                            </div>
                            </TabsContent>
                        <TabsContent value='qualification'>qualifications info</TabsContent>
                        <TabsContent value='skills'>skills info</TabsContent>
                    </div>
                    </Tabs>

                </div>
            </div>

        </div>
    </section>
  )
}

export default About