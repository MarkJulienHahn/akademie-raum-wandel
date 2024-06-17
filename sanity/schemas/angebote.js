import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "angebote",
  title: "Angebote",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "titleEn",
      title: "TitleEN",
      type: "string",
    },

    {
      name: "subtitle",
      title: "Untertitel",
      type: "string",
    },
    {
      name: "subtitleEn",
      title: "UntertitelEN",
      type: "string",
    },

    { name: "kammer", title: "Kammeranrechnungsfähig", type: "boolean" },

    {
      name: "kategorie",
      title: "Kategorie",
      type: "string",
      // of: [{ type: "string" }],
      options: {
        list: [
          { title: "Seminar", value: "Seminar" },
          { title: "Workshop", value: "Workshop" },
          { title: "Ausbildung", value: "Ausbildung" },
        ],
        layout: "checkbox",
      },
    },

    {
      name: "personen",
      title: "Dozierende",
      type: "array",
      of: [
        {
          name: "person",
          title: "Person",
          type: "reference",
          to: [{ type: "personen" }],
        },
      ],
    },

    {
      name: "preis",
      title: "Preis",
      type: "number",
      validation: (Rule) => Rule.required().min(0).precision(2),
      options: {
        precision: 2,
      },
    },

    {
      name: "buchungsLink",
      title: "Buchungslink",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "termine",
      title: "Termine",
      type: "array",
      of: [
        {
          name: "termin",
          title: "Termin",
          type: "object",
          fields: [
            {
              name: "date",
              title: "Date",
              type: "date",
            },
            {
              name: "start",
              title: "Start",
              type: "string",
              description: "Enter time in HH:mm format",
              validation: (Rule) =>
                Rule.regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
                  name: "time",
                  message: "Time must be in HH:mm format",
                }),
            },
            {
              name: "ende",
              title: "Ende",
              type: "string",
              description: "Enter time in HH:mm format",
              validation: (Rule) =>
                Rule.regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
                  name: "time",
                  message: "Time must be in HH:mm format",
                }),
            },
          ],
          preview: {
            select: {
              date: "date",
            },
            prepare(selection) {
              const { date } = selection;
              return {
                title: date,
              };
            },
          },
        },
      ],
    },

    {
      name: "aufzeichnung",
      title: "Aufzeichnung?",
      type: "boolean",
    },

    {
      name: "zoom",
      title: "Per Zoom?",
      type: "boolean",
      options: {
        default: true,
      },
    },
    {
      name: "preisAufzeichnung",
      title: "Preis Aufzeichnung",
      type: "number",
      validation: (Rule) => Rule.required().min(0).precision(2),
      options: {
        precision: 2,
      },
      hidden: ({ document }) => !document?.aufzeichnung,
    },

    {
      name: "aufzeichnungsLink",
      title: "Aufzeichnungslink",
      type: "string",
      validation: (Rule) => Rule.required().min(0).precision(2),
      options: {
        precision: 2,
      },
      hidden: ({ document }) => !document?.aufzeichnung,
    },

    {
      name: "descriptionShort",
      title: "Kurzbeschreibung",
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
      name: "descriptionShortEn",
      title: "Kurzbeschreibung EN",
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
      name: "description",
      title: "Beschreibung",
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
      name: "descriptionEn",
      title: "Beschreibung EN",
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

    // {
    //   name: "hintergrund",
    //   title: "Hintergrund",
    //   type: "string",
    //   validation: (Rule) =>
    //     Rule.required().warning(
    //       "Bitte eine Auswahl für den Hintergrund treffen"
    //     ),
    //   options: {
    //     list: [
    //       { title: "Dunkel", value: "dunkel" },
    //       { title: "Hell", value: "hell" },
    //       { title: "Blur", value: "blur" },
    //     ],
    //     layout: "radio",
    //   },
    // },

    {
      name: "blurImage",
      title: "Blur Image",
      type: "image",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const { kategorie } = context.document;
          if (kategorie == "Seminar" && !value) {
            return "Blur Image is required when Kategorie is Seminar";
          }
          return true;
        }),
      hidden: ({ document }) => document?.kategorie !== "Seminar",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) =>
        Rule.required().warning(
          "Bitte einen einzigartigen SLUG generieren. Der Slug darf bei zwei gleichen Seminaren nicht der selbe sein."
        ),
      options: {
        source: (doc) => {
          const title = doc.title;
          const firstDate = doc.termine?.[0]?.date || "";
          return `${title}-${firstDate}`;
        },
        maxLength: 200,
      },
    },

    orderRankField({ type: "angebote" }),
  ],
});
