import { client } from "@/sanity/lib/client";
import { Post } from "@/types/sanity";
import { cacheLife } from "next/cache";

export async function getBlogs() {
  "use cache";
  cacheLife("minutes");

  const query = `*[_type=="post"] | order(publishedAt desc){
    ...,
    author->,
    categories[]->
  }`;

  return client.fetch<Post[]>(query);
}

export async function getBlog(slug: string) {
  "use cache";
  cacheLife("hours");

  const query = `*[_type == "post" && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
  }`;

  return client.fetch<Post>(query, { slug });
}
