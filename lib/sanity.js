import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "pwwuuxcr",
  dataset: "production",
  apiVersion: "2024-05-29", // use current UTC date

  useCdn: false, // `false` if you want to ensure fresh data
});

export function logAndCreate(documentData) {
  console.log(
    "Creating document with data:",
    JSON.stringify(documentData, null, 2)
  );
  return client.create(documentData);
}

export function logAndUpdate(documentId, documentData) {
  console.log(
    `Updating document ${documentId} with data:`,
    JSON.stringify(documentData, null, 2)
  );
  return client.patch(documentId).set(documentData).commit();
}

export function logAndDelete(documentId) {
  console.log(`Deleting document with ID: ${documentId}`);
  return client.delete(documentId);
}

export default client;
