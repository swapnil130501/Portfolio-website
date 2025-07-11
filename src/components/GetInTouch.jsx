import SectionHeading from "./SectionHeading";
import SubHeading from "./SubHeading";

export default function GetInTouch() {
    return (
        <div>
            <SectionHeading>Get in touch</SectionHeading>
            <SubHeading>I'm currently looking for a new opportuinity. Whether you have a question or want to say hi, hit that button.</SubHeading>
            <div className="relative max-w-md mt-4">
                <input type="email" placeholder="Your email" className="w-full border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-400 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-600 transition" />
                <button className="absolute right-2 top-1 bg-neutral-100 text-neutral-500 px-4 py-2 rounded-md text-sm">Send Enquiry</button>
            </div>
        </div>
    )
}