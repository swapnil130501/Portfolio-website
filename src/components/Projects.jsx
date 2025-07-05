import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Projects({data, layout = "md:grid-cols-3"}) {
    return (
        <div className="py-10">
            <p className="text-neutral-500 text-sm md:text-base pt-4 max-w-lg">
                I love building web apps and products that can impact millions
            </p>

            <div className={`grid grid-cols-1 ${layout} gap-4 pt-4`}>
                {data?.map((data, idx) => (
                    <motion.div 
                        initial={{opacity: 0, filter: "blur(10px)", y: 10}}
                        whileInView={{opacity: 1, filter: "blur(0px)", y: 0}}
                        transition={{ duration: 0.3, delay: idx < data.length ? idx * 0.1 : 0, ease:"easeInOut"}}
                        key={data.title}
                        className='group relative'
                    >
                        <Link href={data.href}>
                            <img className="h-72 group-hover:scale-[1.02] transition duration-200 w-full object-cover rounded-xl" src={data.src} alt={data.title} height={300} width={300}/>
                            <h2 className='font-medium tracking-tight text-neutral-500 pt-4'>
                                {data.title}
                            </h2>
                            <p className='text-sm mt-2 text-neutral-500 max-w-sm'>{data.description}</p>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}