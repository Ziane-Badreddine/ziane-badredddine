import { client } from "@/sanity/lib/client";
import { cacheLife } from "next/cache";

export async function getBanner() {
  "use cache";
  cacheLife("hours");
  return client.fetch(
    `*[_type == "banner" && isActive == true][0]{
      title,
      content
    }`
  );
}
