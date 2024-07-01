import { defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Homepage",
  type: "document",

  fields: [
    {
      name: "header",
      title: "Header",
      type: "object",
      fields: [
        {
          name: "introSlider",
          title: "Backgrounds",
          type: "array",
          validation: (Rule) => Rule.required(),
          of: [
            {
              name: "image",
              title: "Image",
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
        {
          name: "headline",
          title: "Headline",
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
          name: "headlineEn",
          title: "Headline EN",
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
          title: "Text EN",
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

    // {
    //   name: "angebote",
    //   title: "Angebote Preview",
    //   type: "array",
    //   of: [
    //     {
    //       name: "angebot",
    //       title: "Angebot",
    //       type: "reference",
    //       to: [{ type: "angebote" }],
    //     },
    //   ],
    //   validation: (Rule) => Rule.max(3),
    // },

    {
      name: "about",
      title: "About Preview",
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
          title: "Text EN",
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
          name: "callToAction",
          title: "Call to Action",
          type: "string",
        },
        {
          name: "callToActionEn",
          title: "Call to Action EN",
          type: "string",
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

    {
      name: "personen",
      title: "Personen Preview",
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
          name: "textIsabel",
          title: "Text Isabel",
          type: "array",
          of: [
            {
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
              marks: {
                decorators: [{ title: "Bold", value: "strong" }],
              },
            },
          ],
        },
        {
          name: "textIsabelEn",
          title: "Text Isabel EN",
          type: "array",
          of: [
            {
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
              marks: {
                decorators: [{ title: "Bold", value: "strong" }],
              },
            },
          ],
        },
        {
          name: "textKatharina",
          title: "Text Katharina",
          type: "array",
          of: [
            {
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
              marks: {
                decorators: [{ title: "Bold", value: "strong" }],
              },
            },
          ],
        },
        {
          name: "textKatharinaEn",
          title: "Text Katharina EN",
          type: "array",
          of: [
            {
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
              marks: {
                decorators: [{ title: "Bold", value: "strong" }],
              },
            },
          ],
        },
        {
          name: "portrait",
          title: "Portrait",
          type: "image",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [],
                  marks: {
                    decorators: [{ title: "Bold", value: "strong" }],
                  },
                },
              ],
            },
            {
              name: "captionEn",
              title: "CaptionEN",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [],
                  marks: {
                    decorators: [{ title: "Bold", value: "strong" }],
                  },
                },
              ],
            },
          ],
        },
        { name: "hinweis", title: "Hinweis", type: "text" },
        { name: "hinweisEn", title: "Hinweis EN", type: "text" },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Homepage",
      };
    },
  },
});
