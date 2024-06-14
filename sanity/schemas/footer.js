import { defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",

  fields: [
    {
      name: "fragen",
      title: "Fragen",
      type: "object",
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
      ],
    },
    {
      name: "newsletter",
      title: "Newsletter",
      type: "object",
      fields: [
        {
          name: "headline",
          title: "Headline",
          type: "string",
        },
        {
          name: "headlineEn",
          title: "Headline EN",
          type: "string",
        },
        {
          name: "subhead",
          title: "Subhead",
          type: "string",
        },
        {
          name: "subheadEn",
          title: "Subhead EN",
          type: "string",
        },
      ],
    },
    { name: "disclaimer", title: "Disclaimer", type: "text" },
    { name: "disclaimerEn", title: "Disclaimer EN", type: "text" },
  ],
  preview: {
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
});
