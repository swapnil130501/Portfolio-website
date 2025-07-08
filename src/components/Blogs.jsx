import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

export default function Blog({ data }) {
    return (
         <div className="py-10">
             <SectionHeading delay={0.2}>Featured blogs</SectionHeading>
             <div>
                {data?.map((blog, idx) => (
                    <div key={idx}>
                        <Link to={"/#"}>
                            <div className="flex items-center justify-between">
                                <h2 className='font-bold tracking-tight text-neutral-800 text-base pt-4 dark:text-neutral-100'>
                                    {blog.title}
                                </h2>
                                <p className="text-xs md:text-sm mt-2 text-neutral-500 dark:text-neutral-300">
                                    {blog.date}
                                </p>
                            </div>
                            <p className='text-sm mt-2 text-neutral-500 max-w-sm md:max-w-lg dark:text-neutral-300'>{blog.description}</p>
                        </Link>
                    </div>
                ))}
             </div>
        </div>
    )
}