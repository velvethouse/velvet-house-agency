'use client'

export default function TermsPage() {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
        color: '#fff',
        background: '#1a1a1a',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ fontSize: 28, color: '#FFD700', marginBottom: 24 }}>📄 Terms of Service</h1>

      <section style={{ lineHeight: 1.6, fontSize: 15, color: '#e5e5e5' }}>
        <p><strong>Last updated:</strong> September 2025</p>

        <p>
          Velvet House is a digital platform connecting streamers and viewers in an elegant and respectful environment.
          By using the platform, you agree to the following terms and conditions.
        </p>

        <h2 style={h2}>1. Age Requirement</h2>
        <p>
          You must be at least 18 years old to use Velvet House. By signing up, you confirm that you meet this requirement.
        </p>

        <h2 style={h2}>2. Code of Conduct</h2>
        <p>
          Users must respect others and refrain from sharing illegal, hateful, or explicit content that violates our community guidelines.
        </p>

        <h2 style={h2}>3. Payments and Lotus Credit</h2>
        <p>
          All transactions on the platform are done through Lotus credits. Lotus have no monetary value outside of the platform and are non-refundable.
        </p>

        <h2 style={h2}>4. Data and Privacy</h2>
        <p>
          We collect limited personal data to provide services. Your data will never be sold to third parties. You may request data deletion at any time.
        </p>

        <h2 style={h2}>5. Content Ownership</h2>
        <p>
          All user-generated content remains the property of its creator. Velvet House may use public elements (avatars, usernames) for promotional purposes.
        </p>

        <h2 style={h2}>6. Termination and Suspension</h2>
        <p>
          Velvet House reserves the right to suspend or terminate any account violating these terms without prior notice.
        </p>

        <h2 style={h2}>7. Legal Responsibility</h2>
        <p>
          Users are responsible for their own content and interactions. Velvet House is not liable for user conduct or third-party links.
        </p>

        <h2 style={h2}>8. Prohibited Content</h2>
        <p>
          The following content is strictly forbidden and will result in immediate account termination and report to global authorities (INHOPE or equivalent):
        </p>
        <ul style={{ paddingLeft: 20, marginTop: 10, lineHeight: 1.6 }}>
          <li>Child sexual abuse material (CSAM / pedopornography)</li>
          <li>Zoophilia or animal abuse content</li>
          <li>Rape, threats, or real-world violence</li>
          <li>Human trafficking or exploitation</li>
        </ul>
        <p>
          Velvet House actively collaborates with global organizations such as <strong>INHOPE</strong> to report any illegal activity involving minors or abuse.
          Any such content will trigger an automated alert, account suspension, and legal reporting without exception.
        </p>

        <h2 style={h2}>9. Modifications</h2>
        <p>
          These terms may be updated at any time. Users will be notified of significant changes.
        </p>

        <h2 style={h2}>📌 Legal Notice</h2>
        <p>
          <strong>Velvet House</strong> is operated by <strong>Novalink Limited</strong>, a registered company in Hong Kong.
        </p>
        <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
          <li>Company Name: <code style={code}>Novalink Limited</code></li>
          <li>Company Number: <code style={code}>CR No. XXXXXXX</code></li>
          <li>Address: <code style={code}>Unit 1103, 11/F, No.8 Observatory Road, Tsim Sha Tsui, Kowloon, Hong Kong</code></li>
          <li>Responsible Publisher: <code style={code}>Bodet Sébastien</code></li>
          <li>Contact Email: <code style={code}>contact@velvethouse.com</code></li>
        </ul>

        <p style={{ marginTop: 32, fontSize: 13, color: '#aaa' }}>
          For legal inquiries or to report illegal content, please contact us via the <a href="/contact" style={{ color: '#FFD700' }}>contact page</a>.
        </p>
      </section>
    </main>
  )
}

const h2: React.CSSProperties = {
  marginTop: 32,
  fontSize: 18,
  color: '#FFD700'
}

const code: React.CSSProperties = {
  background: '#222',
  padding: '2px 6px',
  borderRadius: 4
      }
