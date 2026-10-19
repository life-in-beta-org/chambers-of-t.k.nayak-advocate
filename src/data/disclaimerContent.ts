/**
 * Disclaimer and confirmation content modeled on Vaish Associates Advocates
 * and statutory Bar Council of India compliance requirements.
 */

export interface DisclaimerData {
  title: string;
  firmName: string;
  jurisdiction: string;
  intro: string;
  acknowledgements: string[];
  notice: string;
  liabilityDisclaimer: string;
  agreeLabel: string;
  disagreeLabel: string;
}

export const defaultDisclaimerContent: DisclaimerData = {
  title: "DISCLAIMER & CONFIRMATION",
  firmName: "Chambers of T. K. Nayak — Advocate",
  jurisdiction: "New Delhi, India",
  intro: "As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. The user acknowledges the following:",
  acknowledgements: [
    "There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;",
    "The user wishes to gain more information about us for his/her own information and use;",
    "The information about us is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user’s volition and any transmission, receipt or use of this site would not create any lawyer-client relationship."
  ],
  notice: "The information provided under this website is solely available at your request for information purpose only and should not be interpreted as soliciting or advertisement.",
  liabilityDisclaimer: "We are not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice, as the material contained in this document does not constitute/substitute professional advice that may be required before acting on any matter. Neither this website nor the web pages and the information contained herein constitute a contract, or will form the basis of a contract. While every care has been taken in preparing the content of this website and web pages to ensure accuracy at the time of publication and creation, however, Chambers of T. K. Nayak assumes no responsibility for any errors, which despite all precautions may be found herein. All disputes, if any, are subject to the exclusive jurisdiction of courts at New Delhi, India only.",
  agreeLabel: "I AGREE",
  disagreeLabel: "I DISAGREE",
};
