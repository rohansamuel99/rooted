export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: '1px solid currentColor', marginTop: '4rem', background: '#042303' }}
    >
      <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Rooted Run Club</p>
      <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
        Get in touch ·{' '}
        <a href="https://www.instagram.com/therootedrunclub" target="_blank" rel="noreferrer">Instagram</a>
        {' '}·{' '}
        <a href="https://www.strava.com/clubs/1937562" target="_blank" rel="noreferrer">Strava</a>
      </p>
    </footer>
  )
}
