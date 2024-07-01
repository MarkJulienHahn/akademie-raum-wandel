"use client";

import { useState } from "react";

const NewsletterSignup = ({ content }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://ede2904a.sibforms.com/serve/MUIFAK93ZB1Gj0-2cNGjQqG3-ehCNG3u5qSJdEchO80h7SD9oYf7VMflp2qqL-ZUAhoEZFEbXiP_soq_GRIn2tCWndCoGdC-_0tzr_Ljoj52AP3TD9BbHrHW59uvigxH-mf2HNvn61Qsq1s4xVN4wtgIvWoz1WCywL1BfLoXiQ8AVa0pIMzDsNHBIaNzfXQo-MAxkBWkOiXzjoPF",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      setIsSubmitted(true);
    }
  };

  return isSubmitted ? (
    <h2>Danke für die Anmeldung!</h2>
  ) : (
    <div className="newsletterSignup">
      <h2>{content.headline}</h2>
      <p>{content.subhead}</p>
      <form id="sib-form" method="POST" onSubmit={handleSubmit}>
        <div style={{ padding: "8px 0" }}>
          <div
            className="sib-form-block"
            style={{
              fontSize: "32px",
              textAlign: "left",
              fontWeight: 700,
              fontFamily: "Helvetica, sans-serif",
              color: "#3C4858",
              backgroundColor: "transparent",
            }}
          ></div>
        </div>
        <div style={{ padding: "8px 0" }}>
          <div
            className="sib-form-block"
            style={{
              fontSize: "16px",
              textAlign: "left",
              fontFamily: "Helvetica, sans-serif",
              color: "#3C4858",
              backgroundColor: "transparent",
            }}
          ></div>
        </div>
        <div style={{ padding: "8px 0" }}>
          <div className="sib-input sib-form-block">
            <div className="form__entry entry_block">
              <div className="form__label-row ">
                <div className="entry__field">
                  <input
                    className="input"
                    type="text"
                    id="EMAIL"
                    name="EMAIL"
                    autoComplete="off"
                    placeholder="E-Mail"
                    data-required="true"
                    required
                  />
                </div>
                <input type="submit" style={{ cursor: "pointer" }} />
              </div>

              <label
                className="entry__error entry__error--primary"
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontFamily: "Helvetica, sans-serif",
                  color: "#661d1d",
                  backgroundColor: "#ffeded",
                  borderRadius: "3px",
                  borderColor: "#ff4949",
                }}
              ></label>
            </div>
          </div>
        </div>
        <div style={{ padding: "8px 0" }}>
          <div className="sib-optin sib-form-block">
            <div className="form__entry entry_mcq">
              <div className="form__label-row ">
                <div
                  className="entry__choice"
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <input
                    type="checkbox"
                    className="input_replaced"
                    value="1"
                    id="OPT_IN"
                    name="OPT_IN"
                    required
                    style={{
                      paddingRight: "50px",
                      width: "unset",
                      marginTop: "8px",
                    }}
                  />
                  <span className="checkbox checkbox_tick_positive"></span>

                  <p style={{ textAlign: "left", paddingLeft: "20px" }}>
                    Ich möchte Ihren Newsletter erhalten und akzeptiere die
                    Datenschutzerklärung.
                  </p>
                </div>
              </div>
              <label
                className="entry__error entry__error--primary"
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontFamily: "Helvetica, sans-serif",
                  color: "#661d1d",
                  backgroundColor: "#ffeded",
                  borderRadius: "3px",
                  borderColor: "#ff4949",
                }}
              ></label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignup;
