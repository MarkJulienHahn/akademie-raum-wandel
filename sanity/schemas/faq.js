import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    {
      name: "thema",
      title: "Thema",
      type: "string",
    },
    {
      name: "themaEn",
      title: "Thema EN",
      type: "string",
    },
    {
      name: "fragen",
      title: "Fragen",
      type: "array",
      of: [
        {
          name: "frage",
          title: "Frage",
          type: "object",
          fields: [
            { name: "frage", title: "Frage", type: "string" },
            { name: "frageEn", title: "Frage EN", type: "string" },
            {
              name: "antwort",
              title: "Antwort",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [],
                  marks: {
                    decorators: [{ title: "Emphasis", value: "em" }],
                  },
                },
              ],
            },
            {
              name: "antwortEn",
              title: "Antwort EN",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [],
                  marks: {
                    decorators: [{ title: "Emphasis", value: "em" }],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    orderRankField({ type: "personen" }),
  ],
});
