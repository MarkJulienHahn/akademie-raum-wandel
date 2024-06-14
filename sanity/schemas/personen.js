import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "personen",
  title: "Personen",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "rolle",
      title: "Rolle",
      type: "string",
    },
    {
      name: "rolleEn",
      title: "Rolle EN",
      type: "string",
    },
    {
      name: "portrait",
      title: "Portrait",
      type: "image",
      fields: [
        {
          title: "Alternative Text",
          name: "alt",
          type: "string",
        },
      ],
    },
    {
      name: "textLang",
      title: "Text Lang",
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
      name: "textLangEn",
      title: "Text Lang EN",
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
      name: "textKurz",
      title: "Text Kurz",
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
      name: "textKurzEn",
      title: "Text Kurz EN",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    orderRankField({ type: "angebote" }),
  ],
});
