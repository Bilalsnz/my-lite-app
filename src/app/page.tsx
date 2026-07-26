import React from 'react';

// Single-file Next.js App for OKX.AI Genesis Hackathon
export default function SingleFileAgentApp() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <div style={styles.badge}>OKX.AI Genesis Hackathon</div>
        <h1 style={styles.title}>AI Agent Service Provider</h1>
        <p style={styles.subtitle}>
          Lightweight, high-performance agent architecture onchain.
        </p>
      </header>

      <div style={styles.grid}>
        <section style={styles.card}>
          <h3 style={styles.cardTitle}>Agent Status</h3>
          <p style={styles.statusActive}>🟢 Active & Listening</p>
        </section>

        <section style={styles.card}>
          <h3 style={styles.cardTitle}>Network</h3>
          <p style={styles.cardValue}>ENI Chain / OnchainKit</p>
        </section>

        <section style={styles.card}>
          <h3 style={styles.cardTitle}>Model Runtime</h3>
          <p style={styles.cardValue}>DeepSeek / Custom Agent</p>
        </section>
      </div>

      <footer style={styles.footer}>
        <p>Built for the OKX.AI Genesis Hackathon submission</p>
      </footer>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#050505',
    color: '#ffffff',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  badge: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '20px',
    backgroundColor: '#1e293b',
    color: '#38bdf8',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '16px',
    border: '1px solid #334155',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '800',
    margin: '0 0 12px 0',
    letterSpacing: '-0.03em',
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: '1.15rem',
    margin: 0,
    maxWidth: '500px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '16px',
    width: '100%',
    maxWidth: '800px',
    marginBottom: '40px',
  },
  card: {
    backgroundColor: '#0f172a',
    border: '1px solid #1e293b',
    borderRadius: '16px',
    padding: '20px',
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '0.9rem',
    color: '#64748b',
    margin: '0 0 8px 0',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  cardValue: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#f8fafc',
    margin: 0,
  },
  statusActive: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#4ade80',
    margin: 0,
  },
  footer: {
    color: '#475569',
    fontSize: '0.875rem',
  },
};
 
