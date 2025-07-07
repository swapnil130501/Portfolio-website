import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

export default function Blogs({ data }) {
    return (
        <div>
             <SectionHeading delay={0.2}>Featured blogs</SectionHeading>
             <div>
                {data?.map((blog, idx) => (
                    <div key={idx}>
                        <Link to={"/#"}>
                            <div className="flex items-center justify-between">
                                <h2 className='font-bold tracking-tight text-neutral-800 pt-4'>
                                    {blog.title}
                                </h2>
                                <p className="text-sm mt-2 text-neutral-500">
                                    {blog.date}
                                </p>
                            </div>
                            <p className='text-sm mt-2 text-neutral-500 max-w-lg'>{blog.description}</p>
                        </Link>
                    </div>
                ))}
             </div>
        </div>
    )
}