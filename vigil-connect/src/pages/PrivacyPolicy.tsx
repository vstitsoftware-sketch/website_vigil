const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-none border-t border-border bg-card shadow-none">
          <div className="container mx-auto px-6 py-12">
            <nav className="text-sm text-foreground/60 mb-6">
              <a href="/" className="hover:underline">Home</a>
              <span className="px-2">/</span>
              <span>Privacy Policy</span>
            </nav>

            <header className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gradient">Privacy Policy</h1>
              <p className="mt-2 text-sm text-foreground/60">Effective Date: May 14, 2026</p>
            </header>

            <article className="prose prose-lg max-w-none text-card-foreground mx-auto" style={{maxWidth: '880px'}}>
              <section>
                <h3 className="text-base font-semibold mb-3">A) Introduction</h3>
                <p className="mb-4">
                  <strong>Vigil Safety Technologies</strong> (“we”, “our”, or “us”) respects your privacy and is committed to protecting the information you share through our website. This Privacy Policy describes our practices in connection with information privacy on personal data we process through your individual use of our services and website.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">B) Personal Data We Collect</h3>
                <p className="mb-3">
                  We may collect information you provide through our forms, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Name</strong></li>
                  <li><strong>Email address</strong></li>
                  <li><strong>Phone number</strong></li>
                  <li><strong>Company details</strong></li>
                  <li><strong>Resume/CV and job application details</strong></li>
                  <li><strong>Messages or enquiries</strong></li>
                </ul>
                <p className="mb-4">We may also collect limited technical information such as IP address and browser type.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">C) How We Use Information</h3>
                <p className="mb-3">We use your information to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Respond to enquiries</strong></li>
                  <li><strong>Process job applications</strong></li>
                  <li><strong>Communicate with you</strong></li>
                  <li><strong>Improve website functionality and security</strong></li>
                  <li><strong>Comply with legal obligations</strong></li>
                </ul>
                <p className="mb-4"><strong>We do not sell personal information.</strong></p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">D) Sharing Information</h3>
                <p className="mb-4">
                  We may share information with trusted service providers such as hosting, or email platforms that help operate our website and services. We may also disclose information if required by law.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">E) Cookies</h3>
                <p className="mb-4">
                  Our website may use cookies or analytics tools to improve user experience and website performance. You can manage cookies through your browser settings.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">F) Data Security</h3>
                <p className="mb-4">
                  We take reasonable measures to protect your information, but no online system can guarantee complete security.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">G) Your Rights</h3>
                <p className="mb-4">
                  Depending on applicable laws, you may request access, correction, or deletion of your personal information.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">H) Contact</h3>
                <div className="rounded-md border border-border bg-secondary p-4">
                  <p className="mb-2">For privacy-related questions, contact:</p>
                  <p className="font-medium text-foreground">Vigil Safety Technologies</p>
                  <p className="text-sm text-foreground/80">Email: <a href="mailto:itsupport@vigiltron.com" className="text-primary underline">itsupport@vigiltron.com</a></p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
