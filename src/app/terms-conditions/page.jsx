import "./terms-conditions.css";
export const metadata = {
  title: "Terms & Conditions | Your Real Estate Company",
  description: "Terms and conditions for using our real estate website and services.",
};

export default function TermsConditionsPage() {
  return (
    <section className="terms-wrapper">
      <div className="terms-container">
        <h1>Terms & Conditions</h1>
        <p className="last-updated">Last Updated: January 2026</p>

        <p>
          Welcome to <strong>Your Real Estate Company</strong>. By accessing or
          using our website, services, or property listings, you agree to comply
          with and be bound by the following Terms and Conditions. Please read
          them carefully before proceeding.
        </p>

        <h2>1. Use of Website</h2>
        <p>
          This website is intended for individuals seeking information about our
          real estate projects, services, and offerings. You agree not to use
          this website for any unlawful purpose or in any manner that may impair
          the performance, security, or accessibility of our platform.
        </p>

        <h2>2. Property Information & Pricing</h2>
        <p>
          All project images, layouts, specifications, pricing, availability,
          and amenities displayed on this website are indicative only and
          subject to change without prior notice. Final offerings shall be
          governed by executed agreements, brochures, and regulatory approvals.
        </p>

        <h2>3. No Professional Advice</h2>
        <p>
          The content on this website is provided for general informational
          purposes only and does not constitute legal, financial, or real estate
          advice. You should consult your professional advisor before making
          investment or purchase decisions.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          All content, logos, graphics, images, videos, layouts, and trademarks
          on this website are the intellectual property of{" "}
          <strong>Your Real Estate Company</strong> and may not be copied,
          reproduced, modified, distributed, or used without prior written
          consent.
        </p>

        <h2>5. User Submissions</h2>
        <p>
          Any information, feedback, inquiries, or data submitted through this
          website shall be deemed non-confidential and may be used by us for
          business, marketing, or service-related purposes in accordance with
          our Privacy Policy.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          We shall not be liable for any direct, indirect, incidental,
          consequential, or special damages arising out of or in connection with
          your access to or use of this website, including but not limited to
          loss of data, business interruption, or financial loss.
        </p>

        <h2>7. Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites for your
          convenience. We do not endorse or assume responsibility for their
          content, policies, or practices. Accessing such sites is at your own
          risk.
        </p>

        <h2>8. Privacy</h2>
        <p>
          Your use of this website is also governed by our{" "}
          <a href="/privacy-policy">Privacy Policy</a>, which outlines how your
          personal data is collected, stored, and processed.
        </p>

        <h2>9. Governing Law & Jurisdiction</h2>
        <p>
          These Terms & Conditions shall be governed by and construed in
          accordance with the laws of India. Any disputes arising out of or
          relating to these terms shall be subject to the exclusive jurisdiction
          of the courts in the city where our registered office is located.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify or update these Terms & Conditions at
          any time without prior notice. Continued use of this website following
          any changes constitutes acceptance of the revised terms.
        </p>

        <h2>11. Contact Information</h2>
        <p>
          If you have any questions regarding these Terms & Conditions, please
          contact us at:
        </p>
      </div>
    </section>
  );
}
