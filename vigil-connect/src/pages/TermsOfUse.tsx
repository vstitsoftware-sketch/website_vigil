import { Link } from "react-router-dom";

const TermsOfUse = () => {
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
              <span>Terms of Use</span>
            </nav>

            <header className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gradient">Terms of Use</h1>
              <p className="mt-2 text-sm text-foreground/60">Effective Date: May 14, 2026</p>
            </header>

            <article className="prose prose-lg max-w-none text-card-foreground mx-auto" style={{ maxWidth: "880px" }}>
              <section>
                <p className="mb-4">By using this website, you agree to these Terms of Use.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Website Use</h3>
                <p className="mb-3">You agree to use this website lawfully and not:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>misuse forms or services,</li>
                  <li>attempt unauthorized access,</li>
                  <li>upload harmful content,</li>
                  <li>or interfere with website operations.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Intellectual Property</h3>
                <p className="mb-4">All website content, including text, branding, and graphics, belongs to Vigil Safety Technologies unless otherwise stated.</p>
                <p>You may not reuse website content without permission.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Third-Party Logos and Trademarks</h3>
                <p className="mb-4">Logos, trademarks, and brand names displayed on this website belong to their respective owners. Their appearance on this website may indicate our clients, partners, integrations, or technologies compatible with our products or services, and does not imply ownership unless explicitly stated.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Submitted Information</h3>
                <p className="mb-4">Information submitted through forms must be accurate and lawful.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Disclaimer</h3>
                <p className="mb-4">This website is provided “as is” without warranties of any kind. We do not guarantee uninterrupted or error-free operation.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Limitation of Liability</h3>
                <p className="mb-4">Vigil Safety Technologies is not liable for damages arising from the use of this website, to the extent permitted by law.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Changes</h3>
                <p className="mb-4">We may update these terms at any time. Continued use of the website means you accept the updated terms.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold mt-6 mb-3">Contact</h3>
                <div className="rounded-md border border-border bg-secondary p-4">
                  <p className="mb-2">Vigil Safety Technologies</p>
                  <p className="text-sm text-foreground/80">Email: <a href="mailto:info@vigiltron.com" className="text-primary underline">info@vigiltron.com</a></p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
