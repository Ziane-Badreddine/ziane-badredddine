"use client";
import { defineType, defineArrayMember } from "sanity";
import { ImageIcon } from "@sanity/icons";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

// Removed useTheme hook usage as it's not allowed in schema files
export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
        { title: "Warning", value: "warning" }, // <-- warning style
        { title: "Error", value: "error" },
        { title: "Info", value: "info" },
        { title: "Success", value: "success" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Code", value: "code" },
          { title: "Highlight", value: "highlight" }, // <--- highlight
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.

    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),

    defineArrayMember({
      type: "code",
      name: "code",
      title: "Code Block",
      options: {
        language: "javascript",
        languageAlternatives: [
          { title: "JavaScript", value: "javascript" },
          { title: "TypeScript", value: "typescript" },
          { title: "JSX", value: "jsx" },
          { title: "TSX", value: "tsx" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "CSS Modules", value: "cssmodules" },
          { title: "Sass", value: "sass" },
          { title: "SCSS", value: "scss" },
          { title: "Less", value: "less" },
          { title: "Python", value: "python" },
          { title: "Java", value: "java" },
          { title: "C", value: "c" },
          { title: "C++", value: "cpp" },
          { title: "Coffeescript", value: "coffeescript" },
          { title: "Go", value: "go" },
          { title: "GraphQL", value: "graphql" },
          { title: "Rust", value: "rust" },
          { title: "Ruby", value: "ruby" },
          { title: "PHP", value: "php" },
          { title: "Perl", value: "perl" },
          { title: "Scala", value: "scala" },
          { title: "Swift", value: "swift" },
          { title: "Dart", value: "dart" },
          { title: "Kotlin", value: "kotlin" },
          { title: "R", value: "r" },
          { title: "SQL", value: "sql" },
          { title: "Prisma", value: "prisma" },
          { title: "Astro", value: "astro" },
          { title: "Vue", value: "vue" },
          { title: "Svelte", value: "svelte" },
          { title: "Pug", value: "pug" },
          { title: "Handlebars", value: "hbs" },
          { title: "Mustache", value: "mustache" },
          { title: "Markdown", value: "markdown" },
          { title: "MDX", value: "mdx" },
          { title: "JSON", value: "json" },
          { title: "YAML", value: "yaml" },
          { title: "TOML", value: "toml" },
          { title: "Bash", value: "bash" },
          { title: "Shell", value: "sh" },
          { title: "Dockerfile", value: "docker" },
          { title: "WASM", value: "wasm" },
          { title: "SVG", value: "svg" },
        ],
        withFilename: true,
      },
    }),

    defineArrayMember({
      type: "divider",
    }),
    defineArrayMember({
      type: "youtube",
    }),
    defineArrayMember({
      type: "steps",
    }),
  ],
});
