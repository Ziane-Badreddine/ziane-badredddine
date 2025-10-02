import { defineType, defineField } from "sanity";

export const bannerType = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "content",
      title: "Texte de la bannière",
      type: "array",
      of: [
        {
          type: "block",
          styles: [], // pas de h1/h2 → juste texte
          lists: [], // pas de listes
          marks: {
            decorators: [
              { title: "Gras", value: "strong" },
              { title: "Italique", value: "em" },
              { title: "Souligné", value: "underline" }, // ← ajouté
              { title: "Couleur primaire", value: "primary" },
              { title: "Couleur secondaire", value: "secondary" },
              { title: "Accent", value: "accent" },
              { title: "Muted", value: "muted" },
              { title: "Destructive", value: "destructive" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Lien",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "isActive",
      title: "Activer la bannière",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
