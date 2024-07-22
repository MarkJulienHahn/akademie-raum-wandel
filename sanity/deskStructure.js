import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage")
        .id("home")
        .child(S.document().schemaType("home").documentId("home")),

      S.divider(),

      S.listItem()
        .title("Akademie")
        .id("akademie")
        .child(S.document().schemaType("akademie").documentId("akademie")),

        S.listItem()
        .title("Angebote")
        .schemaType("angebote")
        .child(
          S.documentTypeList("angebote")
            .title("Angebote")
            // .defaultOrdering([{ field: "firstDate", direction: "asc" }])
        ),

      orderableDocumentListDeskItem({
        type: "personen",
        title: "Personen",
        S,
        context,
      }),

      S.listItem()
        .title("Contact")
        .id("contact")
        .child(S.document().schemaType("contact").documentId("contact")),

      S.divider(),

      orderableDocumentListDeskItem({
        type: "faq",
        title: "FAQ",
        S,
        context,
      }),
      S.divider(),

      S.listItem()
        .title("Imprint")
        .id("imprint")
        .child(S.document().schemaType("imprint").documentId("imprint")),

      S.listItem()
        .title("Privacy")
        .id("privacy")
        .child(S.document().schemaType("privacy").documentId("privacy")),

      S.divider(),
      S.divider(),
      S.listItem()
        .title("Prefooter")
        .id("prefooter")
        .child(S.document().schemaType("prefooter").documentId("prefooter")),
      S.listItem()
        .title("Footer")
        .id("footer")
        .child(S.document().schemaType("footer").documentId("footer")),
    ]);
