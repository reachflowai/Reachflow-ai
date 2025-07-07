export default function Home() {
  return (
    <div style={{ color: '#fff', backgroundColor: '#111', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem' }}>Welcome to ReachFlow AI</h1>
      <p style={{ fontSize: '1.2rem' }}>Smart AI lead generation, automated booking, and outreach made easy.</p>
      <div style={{ marginTop: '2rem' }}>
        <button style={{ padding: '0.8rem 1.5rem', marginRight: '1rem', backgroundColor: '#0ff', border: 'none', borderRadius: '6px', color: '#000' }}>Start Free Trial</button>
        <button style={{ padding: '0.8rem 1.5rem', backgroundColor: '#0f0', border: 'none', borderRadius: '6px', color: '#000' }}>Book a Call</button>
      </div>
    </div>
  );
}
