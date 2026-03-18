// sanity/schemas/message.ts
import { defineType, defineField } from 'sanity'

export const messageType = defineType({
  name: 'message',
  title: 'Message',
  type: 'object',
  fields: [
    defineField({
      name: 'role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'timestamp',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
  ],
})