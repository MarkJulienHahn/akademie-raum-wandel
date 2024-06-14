import { defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        {
          name: "email",
          title: "Email",
          type: "string",
        },
        {
          name: "telephone",
          title: "Telephone",
          type: "string",
        },
      ],
    },

    {
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        {
          name: "street",
          title: "Straße, Hausnummer",
          type: "string",
        },
        {
          name: "plz",
          title: "PLZ",
          type: "string",
        },
        {
          name: "city",
          title: "City",
          type: "string",
        },
        {
          name: "country",
          title: "Country",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Contact",
      };
    },
  },
});
