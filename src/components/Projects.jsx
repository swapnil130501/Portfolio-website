import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';

export default function Projects({data, layout = "md:grid-cols-3"}) {
    return (
        <div className="py-4">
            <SectionHeading delay={0.2}>A lifetime in projects</SectionHeading>
            <div className={`grid grid-cols-1 ${layout} gap-4 pt-4`}>
                {data?.map((data, idx) => (
                    <motion.div 
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
                        key={data.title}
                        className="group relative"
>
                        <Link to={data.href}>
                            <img className="h-72 group-hover:scale-[1.02] transition duration-200 w-full object-cover rounded-xl" src={data.src} alt={data.title} height={300} width={300}/>
                            <h2 className='font-medium tracking-tight text-neutral-500 pt-8 md:pt-4 dark:dark:text-neutral-100'>
                                {data.title}
                            </h2>
                            <p className='text-sm mt-2 text-neutral-500 max-w-sm dark:text-neutral-300'>{data.description}</p>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}