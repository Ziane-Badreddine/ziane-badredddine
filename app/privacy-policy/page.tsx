
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20 lg:max-w-4xl">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8 text-sm">
        Last Updated: 17 Jul 2025
      </p>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p className="text-muted-foreground">
          We take your privacy seriously. This policy explains what data we
          collect when you use this site, why we collect it, and how we handle
          it securely.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">2. Analytics</h2>
        <p className="text-muted-foreground">
          We use privacy-focused analytics tools like Plausible or Vercel
          Analytics to understand general usage of this website. These tools
          <strong> do not use cookies</strong> and <strong>do not track personal data</strong>. All data is
          aggregated and anonymized.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">3. Contact Form</h2>
        <p className="text-muted-foreground">
          When you fill out the contact form to start a project or get in
          touch, we collect the information you provide (such as your name,
          email address, and message). This data is used solely to respond to
          your inquiry and is not shared or used for marketing purposes.
        </p>
        <p className="text-muted-foreground">
          The form data may be temporarily processed by a third-party service
          (e.g. Formspree, Resend, EmailJS), which adheres to modern data
          protection standards.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">4. Data Sharing</h2>
        <p className="text-muted-foreground">
          We do not sell or rent your personal information. We only share data
          with service providers required to operate this site (such as
          analytics or form handling), under strict confidentiality agreements.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">5. Your Rights</h2>
        <p className="text-muted-foreground">
          You have the right to request access, correction, or deletion of your
          personal data. To do so, please contact us at the email below.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">6. Contact</h2>
        <p className="text-muted-foreground">
          For any questions or privacy-related concerns, feel free to contact
          us at{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-primary hover:underline"
          >
            zianebadredddine2004@gmail.com
          </a>
        </p>
      </section>

      <p className="text-muted-foreground mt-12 text-sm">
        By using this site, you agree to this privacy policy.
      </p>
    </div>
  );
}
