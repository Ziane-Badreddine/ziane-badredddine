import { LucideIcon } from "lucide-react";
import { Image, Slug } from "sanity";

export interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Author extends Base {
  name: string;
  email: string;
  image: Image;
  bio: Block[];
  facebook?: string;
  twitter?: string;
}

export interface Category extends Base {
  title: string;
  description: string;
}

export interface Post extends Base {
  title: string;
  slug: Slug;
  description: string;
  author: Author;
  mainImage: Image;
  categories: Category[];
  publishedAt: Date;
  readTime: number;
  body: Block[];
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "bloackquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}