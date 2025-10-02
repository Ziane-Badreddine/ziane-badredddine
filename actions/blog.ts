import { client } from "@/sanity/lib/client";
import { Post } from "@/types/sanity";

export async function getBlogs() {
  const query = `*[_type=="post"] | order(publishedAt desc){
        ...,
        author->,
        categories[]->
    }`;

  const blogs = await client.fetch<Post[]>(
    query,
    {},
    {
      next: { revalidate: 10 }, 
    }
  );

  return blogs;
}

export async function getBlog(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug] | order(publishedAt desc)[0] {
    ...,
    author->,
    categories[]->
  }`;

  const blog = await client.fetch<Post>(
    query,
    { slug },
    {
      next: { revalidate: 10 }, 
    }
  );

  return blog;
}
