// sanity/schemas/conversation.ts
import { defineType, defineField, defineArrayMember } from "sanity";

export const conversationType = defineType({
  name: "conversation",
  title: "Conversation",
  type: "document",
  fields: [
    defineField({
      name: "conversationId",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "messages",
      type: "array",
      of: [
        defineArrayMember({
          type: "message", // reference by name string
        }),
      ],
    }),
  ],
});
