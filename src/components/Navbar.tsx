export default function Navbar() {
  return (
    <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{
        background: '#042303ff',
        color: '#ffffff',
        fontWeight: 800,
        fontSize: '0.85rem',
        letterSpacing: '0.12em',
        padding: '0.45rem 0.75rem',
        borderRadius: '4px',
      }}>
        ROOTED
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
        <li><a href="#about">About</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
