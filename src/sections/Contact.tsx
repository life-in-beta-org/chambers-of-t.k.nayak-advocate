import { useState } from "react";
import type { FormEvent } from "react";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialValues: FormValues = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [notice, setNotice] = useState("");

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setNotice("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.subject) nextErrors.subject = "Please select an area of enquiry.";
    if (!values.message.trim()) nextErrors.message = "Please enter a short message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // Connect this handler to a verified backend or form service before accepting enquiries.
      setNotice("Your details are ready for connection to the chambers' enquiry service. No message has been sent.");
    }
  }

  return (
    <section id="contact" className="editorial-section contact-section section-navy">
      <div className="container-site contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Contact the Chambers</p>
          <h2 className="section-title">Begin a conversation.</h2>
          <p>For a legitimate enquiry, use the form or replace the placeholders below with verified chambers contact details.</p>
          <div className="contact-details">
            <p><span>Telephone</span>Details to be supplied</p>
            <p><span>Email</span>Professional email to be supplied</p>
            <p><span>Offices</span>Delhi · Meghalaya</p>
          </div>
          <p className="contact-notice">Please do not send confidential or time-sensitive legal information through this unverified form.</p>
        </div>
        <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field"><label htmlFor="name">Full name <span>*</span></label><input id="name" value={values.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <small id="name-error" className="form-error">{errors.name}</small>}</div>
          <div className="form-field"><label htmlFor="email">Email address <span>*</span></label><input id="email" type="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <small id="email-error" className="form-error">{errors.email}</small>}</div>
          <div className="form-field"><label htmlFor="phone">Phone number</label><input id="phone" type="tel" value={values.phone} onChange={(event) => updateField("phone", event.target.value)} /></div>
          <div className="form-field"><label htmlFor="subject">Area of enquiry <span>*</span></label><select id="subject" value={values.subject} onChange={(event) => updateField("subject", event.target.value)} aria-invalid={Boolean(errors.subject)}><option value="">Select an area</option><option>Corporate and Commercial Law</option><option>Civil Litigation and Dispute Resolution</option><option>Family Law</option><option>Other / to be confirmed</option></select>{errors.subject && <small className="form-error">{errors.subject}</small>}</div>
          <div className="form-field form-field-wide"><label htmlFor="message">Message <span>*</span></label><textarea id="message" rows={5} value={values.message} onChange={(event) => updateField("message", event.target.value)} aria-invalid={Boolean(errors.message)} />{errors.message && <small className="form-error">{errors.message}</small>}</div>
          <div className="form-actions"><button type="submit" className="form-submit">Prepare enquiry <span aria-hidden="true">-&gt;</span></button>{notice && <p className="form-notice" role="status">{notice}</p>}</div>
        </form>
      </div>
    </section>
  );
}