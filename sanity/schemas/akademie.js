import { defineType } from "sanity";

export default defineType({
  name: "akademie",
  title: "Akademie",
  type: "document",

  fields: [
    {
      name: "feed",
      title: "Feed",
      type: "array",
      of: [
        {
          name: "section",
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
              name: "headline",
              title: "Headline",
              type: "text",
            },
            {
              name: "headlineEn",
              title: "HeadlineEN",
              type: "text",
            },
            {
              name: "text",
              title: "Text",
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
              name: "textEn",
              title: "TextEN",
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
              name: "background",
              title: "Background",
              type: "image",
              fields: [
                {
                  title: "Alternative Text",
                  name: "alt",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "leiste",
      title: "Leiste",
      type: "array",
      of: [
        {
          name: "section",
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
              name: "headline",
              title: "Headline",
              type: "text",
            },
            {
              name: "headlineEn",
              title: "HeadlineEN",
              type: "text",
            },
            {
              name: "text",
              title: "Text",
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
              name: "textEn",
              title: "TextEN",
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
  preview: {
    prepare() {
      return {
        title: "Akademie",
      };
    },
  },
});
