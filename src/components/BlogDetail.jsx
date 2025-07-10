import { useParams } from "react-router-dom";
import { blogs } from "../data/blogData";
import Container from "./Container";
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";
import { generateSlug } from "../lib/generateSlug";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === generateSlug(slug));

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/blogs/${slug}.md`)
      .then(res => res.text())
      .then(setMarkdown)
      .catch(() => setMarkdown("# Blog not found 😞"));
      console.log(blog)
  }, [slug]);

  if (!blog) return <div>Blog not found</div>;

  return (
    <Container className="bg-white dark:bg-neutral-900 p-6 md:p-12 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
        {blog.title}
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        {blog.date}
      </p>
      <article className="prose dark:prose-invert max-w-3xl">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </Container>
  );
}
