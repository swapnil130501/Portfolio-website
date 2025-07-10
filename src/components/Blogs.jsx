import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { generateSlug } from "../lib/generateSlug";

export default function Blog({ data }) {
    return (
         <div className="py-4">
             <SectionHeading delay={0.2}>Featured blogs</SectionHeading>
             <div className="border border-neutral-200 dark:border-neutral-700 p-4 mt-4 rounded-xl shadow-sm dark:shadow-md bg-white dark:bg-neutral-800">
                {data?.map((blog, idx) => (
                    <div key={idx}>
                        <Link to={`/blogs/${generateSlug(blog.title)}`}>
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