import "./cookies-policy.css";
export const metadata = {
  title: "Cookies Policy | Your Real Estate Company",
  description: "Cookies policy explaining how we use cookies and tracking technologies.",
};

export default function CookiesPolicyPage() {
  return (
    <section className="cookies-wrapper">
      <div className="cookies-container">
        <h1>Cookies Policy</h1>
        <p className="last-updated">Last Updated: January 2026</p>

        <p>
          This Cookies Policy explains how <strong>Your Real Estate Company</strong>{" "}
          ("we", "us", or "our") uses cookies and similar technologies when you
          visit our website. By continuing to browse or use our website, you
          consent to our use of cookies as described below.
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device when you
          visit a website. They help improve website functionality, enhance
          security, analyze traffic, and personalize your browsing experience.
        </p>

        <h2>2. Types of Cookies We Use</h2>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Required for core website
            functionality such as navigation, security, and form submissions.
          </li>
          <li>
            <strong>Performance & Analytics Cookies:</strong> Help us understand
            how visitors use our website so we can improve performance and
            content.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Remember your preferences such
            as language, region, and device type.
          </li>
          <li>
            <strong>Marketing & Advertising Cookies:</strong> Used to deliver
            relevant property ads and promotions across platforms.
          </li>
        </ul>

        <h2>3. How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Enable secure website navigation</li>
          <li>Analyze traffic and user engagement</li>
          <li>Personalize your experience</li>
          <li>Measure marketing campaign effectiveness</li>
          <li>Improve property recommendations</li>
        </ul>

        <h2>4. Third-Party Cookies</h2>
        <p>
          We may allow trusted third-party service providers such as analytics,
          advertising platforms, and CRM tools to place cookies on your device
          to help us measure performance and improve service delivery. These
          providers are governed by their respective privacy policies.
        </p>

        <h2>5. Managing Cookies</h2>
        <p>
          You can manage, block, or delete cookies through your browser settings
          at any time. However, disabling certain cookies may affect website
          functionality and limit your browsing experience.
        </p>

        <h2>6. Data Protection & Privacy</h2>
        <p>
          Any personal data collected through cookies is processed in accordance
          with our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>

        <h2>7. Updates to This Policy</h2>
        <p>
          We may update this Cookies Policy periodically to reflect changes in
          technology, regulations, or business practices. Continued use of the
          website after updates constitutes acceptance of the revised policy.
        </p>

        <h2>8. Contact Information</h2>
        <p>
          If you have questions about our use of cookies, please contact us at:
        </p>
      </div>
    </section>
  );
}
