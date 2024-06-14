const NewsletterSignup = ({ content }) => {
  return (
    <div className="newsletterSignup">
      <h2>Ein neuer Ort für's Lernen und für Veränderung.</h2>
      <p>{content.subhead}</p>
      <input placeholder="Jetzt registrieren"></input>
    </div>
  );
};

export default NewsletterSignup;
