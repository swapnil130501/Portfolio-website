import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Projects() {
    const projects = [
    {
      title: "Code Sandbox",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: 'Created a code sandbox'
    },
    {
      title: "Video call/chat application",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: 'Created a code sandbox'
    },
    {
      title: "Airline booking system",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: 'Created a code sandbox'
    },
    {
      title: "Spotify UI",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: 'Created a code sandbox'
    },
  ];

    return (
        <div className="py-10">
            <p className="text-neutral-500 text-sm md:text-base pt-4 max-w-lg">
                I love building web apps and products that can impact millions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {projects.map((project, idx) => (
                    <motion.div 
                        initial={{opacity: 0, filter: "blur(10px)", y: 10}}
                        whileInView={{opacity: 1, filter: "blur(0px)", y: 0}}
                        transition={{ duration: 0.3, delay: idx < project.length ? idx * 0.1 : 0, ease:"easeInOut"}}
                        key={project.title}
                        className='group relative'
                    >
                        <Link href={project.href}>
                            <img className="h-72 group-hover:scale-[1.02] transition duration-200 w-full object-cover rounded-xl" src={project.src} alt={project.title} height={300} width={300}/>
                            <h2 className='font-medium tracking-tight text-neutral-500'>
                                {project.title}
                            </h2>
                            <p className='text-sm mt-2 text-neutral-500 max-w-sm'>{project.description}</p>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}