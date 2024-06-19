import { getContact } from "../../../../sanity/sanity-utils";

export default async function page() {
  const contact = await getContact();

  return (
    <main className="kontaktWrapper">
      <div>
        <div>
          <span className="kontaktColumnLeft">Customer Support</span>
          <span>
            <a href={`mailto:${contact[0]?.contact?.email}`}>
              {contact[0]?.contact?.email}
            </a>
          </span>
        </div>
        <div>
          <span className="kontaktColumnLeft">Telefon</span>
          <span>{contact[0]?.contact?.telephone}</span>
        </div>
      </div>
      <div>
        <div>
          <span className="kontaktColumnLeft">Adresse</span>
          <span>{contact[0]?.address?.street}</span>
        </div>
        <div >
          <span className="kontaktColumnLeft hideMobile"></span>
          <span>
            {contact[0]?.address?.plz}{" "}
            {contact[0]?.address?.city}
          </span>
        </div>
        <div >
          <span className="kontaktColumnLeft hideMobile"></span>
          <span>
            {contact[0]?.address?.country}
          </span>
        </div>
      </div>
    </main>
  );
}

export const revalidate = 10;
