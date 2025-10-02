import { client } from "@/sanity/lib/client";

export async function getBanner() {
  return client.fetch(
    `*[_type == "banner" && isActive == true][0]{
      title,
      content
    }`
  );
}