import { defineType } from "sanity";

export default defineType({
  name: "angebote",
  title: "Angebote",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(30),
      description: "Maximal 30 Zeichen.",
    },
    {
      name: "titleEn",
      title: "TitleEN",
      type: "string",
      validation: (Rule) => Rule.min(5).max(30),
      description: "Maximal 30 Zeichen.",
    },

    {
      name: "subtitle",
      title: "Untertitel",
      type: "string",
      validation: (Rule) => Rule.min(10).max(100),
      description: "Maximal 100 Zeichen.",
    },
    {
      name: "subtitleEn",
      title: "UntertitelEN",
      type: "string",
      validation: (Rule) => Rule.min(10).max(100),
      description: "Maximal 100 Zeichen.",
    },

    { name: "kammer", title: "Kammeranrechnungsfähig", type: "boolean" },

    {
      name: "kategorie",
      title: "Kategorie",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Seminar", value: "Seminar" },
          { title: "Workshop", value: "Workshop" },
          { title: "Ausbildung", value: "Ausbildung" },
          { title: "Webinar", value: "Webinar" },
        ],
        layout: "checkbox",
      },
      initialValue: "Seminar",
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
      name: "aufzeichnungsLink",
      title: "Vimeo Video-ID",
      type: "string",
      hidden: ({ document }) => document?.kategorie !== "Webinar",
      validation: (Rule) =>
        Rule.custom((field, context) => {
          return context.document.kategorie === "Webinar"
            ? field
              ? true
              : "Vimeo Video-ID ist erforderlich, wenn Kategorie Webinar ist."
            : true;
        }),
    },

    {
      name: "password",
      title: "Vimeo Passwort",
      type: "string",
      hidden: ({ document }) => document?.kategorie !== "Webinar",
      validation: (Rule) =>
        Rule.custom((field, context) => {
          return context.document.kategorie === "Webinar"
            ? field
              ? true
              : "Vimeo Video-ID ist erforderlich, wenn Kategorie Webinar ist."
            : true;
        }),
    },

    {
      name: "termine",
      title: "Termine",
      type: "array",
      hidden: ({ document }) => document?.kategorie == "Webinar",
      validation: (Rule) =>
        Rule.custom((field, context) => {
          return !context.document.kategorie === "Webinar"
            ? field
              ? true
              : "Termin ist erforderlich"
            : true;
        }),
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
      hidden: ({ document }) => document?.kategorie == "Webinar",
    },

    {
      name: "zoom",
      title: "Per Zoom?",
      type: "boolean",
      hidden: ({ document }) => document?.kategorie == "Webinar",
      options: {
        default: true,
      },
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
      description: "Maximale Zeichenanzahl 550 Zeichen.",
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
      description: "Maximale Zeichenanzahl 550 Zeichen.",
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
            decorators: [{ title: "Strong", value: "strong" }],
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
            decorators: [{ title: "Strong", value: "strong" }],
          },
        },
      ],
    },

    {
      name: "hintergrund",
      title: "Hintergrund",
      type: "string",
      validation: (Rule) =>
        Rule.required().warning(
          "Bitte eine Auswahl für den Hintergrund treffen"
        ),
      options: {
        list: [
          { title: "Dunkel", value: "dark" },
          { title: "Hell", value: "hell" },
          { title: "Dunkler Blur", value: "blurDark" },
          { title: "Heller Blur", value: "blurLight" },
        ],
        layout: "radio",
      },
    },

    {
      name: "blurImage",
      title: "Blur Image",
      type: "image",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const { hintergrund } = context.document;
          if (
            (hintergrund === "blurDark" || hintergrund === "blurLight") &&
            !value
          ) {
            return "Bitte ein Blur-Image auswählen";
          }
          return true;
        }),
      hidden: ({ document }) =>
        !(
          document?.hintergrund === "blurDark" ||
          document?.hintergrund === "blurLight"
        ),
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
    {
      name: "firstDate",
      title: "First Date",
      type: "date",
      // hidden: true,
    },
  ],
});
