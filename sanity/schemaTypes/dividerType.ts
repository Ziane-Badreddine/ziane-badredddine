import { defineType } from "sanity";
import { DashboardIcon } from "@sanity/icons";

export const dividerType = defineType({
  name: "divider",
  title: "Divider",
  type: "object",
  icon: DashboardIcon,
  fields: [
    {
      name: "style",
      type: "string",
      title: "Style",
      options: {
        list: [
          { title: "Solid", value: "solid" },
          { title: "Dashed", value: "dashed" },
          { title: "Dotted", value: "dotted" },
        ],
        layout: "radio",
      },
      initialValue: "solid",
    },
  ],
  preview: {
    select: {
      style: "style",
    },
    prepare({ style }) {
      return {
        title: "Divider",
        subtitle: style ? `Style: ${style}` : "Solid",
      };
    },
  },
});
