
import { useState } from "react";
import type { FormEvent } from "react";
import contact from "../data/contact.json";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const phoneHref = `tel:${contact.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}`;

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});
  const [notice, setNotice] = useState("");
  const [isSending, setIsSending] = useState(false);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setNotice("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) return;

    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (
      !values.email.trim() ||
      !/^\S+@\S+\.\S+$/.test(values.email)
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.subject) {
      nextErrors.subject = "Please select an area of enquiry.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please enter a short message.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setNotice(
        "The enquiry service is temporarily unavailable. Please contact the chambers directly."
      );
      return;
    }

    setIsSending(true);
    setNotice("Sending your enquiry...");

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              name: values.name.trim(),
              email: values.email.trim(),
              phone: values.phone.trim() || "Not provided",
              subject: values.subject,
              message: values.message.trim(),
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `EmailJS returned HTTP ${response.status}`
        );
      }

      setValues(initialValues);
      setErrors({});
      setNotice(
        "Your enquiry has been sent successfully. Thank you for contacting the chambers."
      );
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setNotice(
        "We could not send your enquiry. Please try again or contact the chambers directly."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="editorial-section contact-section section-navy"
    >
      <div className="container-site contact-layout">
        <div className="contact-copy">
          <h2 className="section-title">Begin a conversation.</h2>
          <p>
            For a legitimate enquiry, use the form or contact the
            chambers directly using the details below.
          </p>

          <div className="contact-details">
            <p>
              <span>Telephone</span>
              <a href={phoneHref}>{contact.phone}</a>
            </p>
            <p>
              <span>Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <div className="contact-location-row">
              <span>Locations</span>
              <p>{contact.locations.join(" | ")}</p>
            </div>
            <p>
              <span>WhatsApp</span>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message TK Nayak
              </a>
            </p>
          </div>
          <p className="contact-notice">
            Please do not send confidential or time-sensitive legal information through this form.
          </p>
        </div>

        <form
          className="enquiry-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-field">
            <label htmlFor="name">
              Full name <span>*</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(event) =>
                updateField("name", event.target.value)
              }
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name ? "name-error" : undefined
              }
            />
            {errors.name && (
              <small id="name-error" className="form-error">
                {errors.name}
              </small>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) =>
                updateField("email", event.target.value)
              }
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "email-error" : undefined
              }
            />
            {errors.email && (
              <small id="email-error" className="form-error">
                {errors.email}
              </small>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) =>
                updateField("phone", event.target.value)
              }
            />
          </div>

          <div className="form-field">
            <label htmlFor="subject">
              Area of enquiry <span>*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={values.subject}
              onChange={(event) =>
                updateField("subject", event.target.value)
              }
              aria-invalid={Boolean(errors.subject)}
            >
              <option value="">Select an area</option>
              <option>Service law</option>
              <option>Criminal law</option>
              <option>Constitutional law</option>
              <option>Civil law and dispute resolution</option>
              <option>Family and matrimonial law</option>
              <option>Corporate and Commercial law</option>
              <option>Intellectual Property Rights</option>
              <option>Consumer law</option>
              <option>Environmental law</option>
              <option>Other / to be confirmed</option>
            </select>
            {errors.subject && (
              <small className="form-error">
                {errors.subject}
              </small>
            )}
          </div>

          <div className="form-field form-field-wide">
            <label htmlFor="message">
              Message <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={(event) =>
                updateField("message", event.target.value)
              }
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && (
              <small className="form-error">
                {errors.message}
              </small>
            )}
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="form-submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Submit"}
            </button>

            {notice && (
              <p className="form-notice" role="status" aria-live="polite">
                {notice}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
