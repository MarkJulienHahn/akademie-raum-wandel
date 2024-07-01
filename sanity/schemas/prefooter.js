import { defineType } from "sanity";

export default defineType({
  name: "prefooter",
  title: "Prefooter",
  type: "document",

  fields: [
    {
      name: "dozierende",
      title: "Dozierende",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
        modal: {
          type: "fullscreen",
          width: "auto",
        },
        columns: 2,
      },
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
                decorators: [{ title: "Bold", value: "strong" }],
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
                decorators: [{ title: "Bold", value: "strong" }],
              },
            },
          ],
        },
        {
          name: "disclaimer",
          title: "Disclaimer",
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
          name: "disclaimerEn",
          title: "Disclaimer EN",
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
          name: "button",
          title: "Button",
          type: "object",
          fields: [
            { name: "text", title: "Text", type: "string" },
            { name: "textEN", title: "Text EN", type: "string" },
            { name: "file", type: "file" },
          ],
        },
      ],
    },
    {
      name: "raumhalten",
      title: "Raumhalten",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
        modal: {
          type: "fullscreen",
          width: "auto",
        },
        columns: 2,
      },
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
                decorators: [{ title: "Bold", value: "strong" }],
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
                decorators: [{ title: "Bold", value: "strong" }],
              },
            },
          ],
        },
        {
          name: "disclaimer",
          title: "Disclaimer",
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
          name: "disclaimerEn",
          title: "Disclaimer EN",
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
          name: "button",
          title: "Button",
          type: "object",
          fields: [
            { name: "text", title: "Text", type: "string" },
            { name: "textEN", title: "Text EN", type: "string" },
            { name: "link", title: "Link", type: "string" },
          ],
        },
      ],
    },
    {
      name: "fragen",
      title: "Fragen",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
        modal: {
          type: "fullscreen",
          width: "auto",
        },
        columns: 2,
      },
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
                decorators: [{ title: "Bold", value: "strong" }],
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
                decorators: [{ title: "Bold", value: "strong" }],
              },
            },
          ],
        },
        {
          name: "disclaimer",
          title: "Disclaimer",
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
          name: "disclaimerEn",
          title: "Disclaimer EN",
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
          name: "button",
          title: "Button",
          type: "object",
          fields: [
            { name: "text", title: "Text", type: "string" },
            { name: "textEN", title: "Text EN", type: "string" },
            { name: "destination", title: "Destination", type: "string" },
          ],
        },
      ],
    },
    {
      name: "newsletter",
      title: "Newsletter",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
        modal: {
          type: "fullscreen",
          width: "auto",
        },
        columns: 2,
      },
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
                decorators: [{ title: "Bold", value: "strong" }],
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
                decorators: [{ title: "Bold", value: "strong" }],
              },
            },
          ],
        },
        {
          name: "disclaimer",
          title: "Disclaimer",
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
          name: "disclaimerEn",
          title: "Disclaimer EN",
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
          name: "button",
          title: "Button",
          type: "object",
          fields: [
            { name: "text", title: "Text", type: "string" },
            { name: "textEN", title: "Text EN", type: "string" },
            { name: "link", title: "Link", type: "string" },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Prefooter",
      };
    },
  },
});
