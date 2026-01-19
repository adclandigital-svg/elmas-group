
import "./privacy-policy.css"
export const metadata = {
  title: "Privacy Policy | Your Real Estate Company",
  description: "Privacy policy for our real estate website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="privacy-wrapper">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: January 2026</p>

        <p>
          At <strong>Your Real Estate Company</strong>, we are committed to
          protecting your privacy and ensuring transparency in how your
          personal information is collected, used, and safeguarded when you
          interact with our website, projects, and services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal details such as name, email address, phone number, and location.</li>
          <li>Property preferences, inquiries, and feedback submitted through forms.</li>
          <li>Technical data including IP address, browser type, device information, and pages visited.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>Your information is used to:</p>
        <ul>
          <li>Respond to property inquiries and schedule site visits.</li>
          <li>Provide updates on projects, offers, and upcoming developments.</li>
          <li>Improve our website experience, services, and customer engagement.</li>
          <li>Comply with legal, regulatory, and contractual obligations.</li>
        </ul>

        <h2>3. Cookies & Tracking Technologies</h2>
        <p>
          Our website may use cookies and similar technologies to enhance user
          experience, analyze traffic, and personalize content. You can control
          cookie preferences through your browser settings.
        </p>

        <h2>4. Sharing of Information</h2>
        <p>
          We do not sell or rent your personal data. Information may be shared
          only with:
        </p>
        <ul>
          <li>Authorized sales partners, channel partners, and service providers.</li>
          <li>Government authorities or regulators when legally required.</li>
          <li>Third-party vendors supporting marketing, CRM, or website operations.</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement industry-standard technical and organizational security
          measures to protect your personal data from unauthorized access,
          misuse, loss, or disclosure.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access, correction, or deletion of your personal data.</li>
          <li>Withdraw consent for marketing communications at any time.</li>
          <li>Opt-out of cookies and tracking technologies.</li>
        </ul>

        <h2>7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for their privacy practices or content and encourage you
          to review their privacy policies separately.
        </p>

        <h2>8. Policy Updates</h2>
        <p>
          We may update this Privacy Policy periodically. Any changes will be
          posted on this page with the revised date.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how your data is
          handled, please contact us at:
        </p>
      </div>
    </section>
  );
}
