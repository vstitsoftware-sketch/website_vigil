import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-none border-t border-border bg-card shadow-none">
          <div className="container mx-auto px-6 py-12">
            <nav className="text-sm text-foreground/60 mb-6">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="px-2">/</span>
              <span>Privacy Policy</span>
            </nav>

            <header className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gradient">Privacy Policy</h1>
              <p className="mt-2 text-sm text-foreground/60">Effective Date: May 14, 2026</p>
            </header>

            <article className="prose prose-lg max-w-none text-card-foreground mx-auto" style={{ maxWidth: "880px" }}>
              <section>
                <p className="mb-4">
                  Vigil Safety Technologies (“we”, “our”, or “us”) respects your privacy and is committed to protecting the information you share through our website.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Information We Collect</h3>
                <p className="mb-3">We may collect information you provide through our forms, including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company details</li>
                  <li>Resume/CV and job application details</li>
                  <li>Messages or enquiries</li>
                </ul>
                <p className="mb-4">We may also collect limited technical information such as IP address and browser type.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">How We Use Information</h3>
                <p className="mb-3">We use your information to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Respond to enquiries</li>
                  <li>Process job applications</li>
                  <li>Communicate with you</li>
                  <li>Improve website functionality and security</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="mb-4 font-semibold">We do not sell personal information.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Sharing Information</h3>
                <p className="mb-4">
                  We may share information with trusted service providers such as hosting, email, or recruitment platforms that help operate our website and services.
                </p>
                <p className="mb-4">We may also disclose information if required by law.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Cookies</h3>
                <p className="mb-4">
                  Our website may use cookies or analytics tools to improve user experience and website performance.
                </p>
                <p>You can manage cookies through your browser settings.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Data Security</h3>
                <p className="mb-4">
                  We take reasonable measures to protect your information, but no online system can guarantee complete security.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Your Rights</h3>
                <p className="mb-4">
                  Depending on applicable laws, you may request access, correction, or deletion of your personal information.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Contact</h3>
                <div className="rounded-md border border-border bg-secondary p-4">
                  <p className="mb-2">For privacy-related questions, contact:</p>
                  <p className="font-medium">Vigil Safety Technologies</p>
                  <p className="text-sm text-foreground/80">
                    Email: <a href="mailto:info@vigiltron.com" className="text-primary underline">info@vigiltron.com</a>
                  </p>
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
