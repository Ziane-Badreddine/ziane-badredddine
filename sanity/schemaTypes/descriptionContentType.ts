// schemas/blockContent.ts
import {defineType, defineArrayMember} from "sanity"

export const descriptionContentType = defineType({
  name: "descriptionContentType",
  title: "Rich Text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        {title: "Normal", value: "normal"},
        {title: "Heading 1", value: "h1"},
        {title: "Heading 2", value: "h2"},
        {title: "Heading 3", value: "h3"},
        {title: "Quote", value: "blockquote"},
      ],
      lists: [
        {title: "Bullet", value: "bullet"},
        {title: "Numbered", value: "number"},
      ],
      marks: {
        decorators: [
          {title: "Bold", value: "strong"},
          {title: "Italic", value: "em"},
          {title: "Underline", value: "underline"},
          {title: "Code", value: "code"},
          {title: "Highlight", value: "mark"},
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "URL",
            fields: [
              {
                name: "href",
                type: "url",
                title: "Link",
              },
            ],
          },
        ],
      },
    }),
  ],
})
