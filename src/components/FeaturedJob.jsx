import SectionHeading from "./SectionHeading";
import { workExp } from "../data/workExp";

export default function FeaturedJob() {
  return (
    <div className="py-4">
      <SectionHeading delay={0.2}>Work experience</SectionHeading>

      <div className="space-y-4 mt-4">
        {workExp?.map((data, idx) => (
          <div key={idx} className="border border-neutral-200 dark:border-neutral-700 p-4 rounded-xl shadow-sm dark:shadow-md bg-white dark:bg-neutral-800">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">
                {data.company}
              </h2>
              <img
                src={data.logo}
                alt={`${data.company} logo`}
                className="h-full w-32 object-cover rounded-xl"
              />
            </div>

            <div className="flex items-center gap-4 flex-wrap text-sm text-neutral-600 dark:text-neutral-300">
              <p className="font-medium">{data.role}</p>
              <span className="text-xs text-neutral-400 dark:text-neutral-400">•</span>
              <p className="text-xs">{data.date}</p>
            </div>

            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-300 leading-relaxed max-w-md md:max-w-3xl">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
