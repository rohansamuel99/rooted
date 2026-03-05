export default function Hero() {
  return (
    <section
      style={{
        height: '100dvh',
        background: '#042303ff',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1
        style={{
          fontFamily: "'Barlow', 'DM Sans', sans-serif",
          fontSize: 'clamp(3.5rem, 10vw, 7rem)',
          fontWeight: 600,
          color: '#f5f0e8',
          letterSpacing: '0.15em',
          marginBottom: '1.25rem',
        }}
      >
        ROOTED
      </h1>

      <p
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: 'clamp(0.95rem, 4vw, 1.15rem)',
          color: 'rgba(245, 240, 232, 0.7)',
          letterSpacing: '0.03em',
          marginBottom: '3rem',
        }}
      >
        Running is secondary to belonging.
      </p>

      <a
        href="https://www.instagram.com/therootedrunclub"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-block',
          padding: '0.8rem 2.5rem',
          border: '1.5px solid rgba(245, 240, 232, 0.5)',
          color: '#f5f0e8',
          fontWeight: 500,
          fontSize: '0.9rem',
          letterSpacing: '0.08em',
        }}
      >
        Join the Next Run
      </a>

      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '2rem',
          fontSize: '0.8rem',
          color: 'rgba(245, 240, 232, 0.45)',
        }}
      >
        <a
          href="https://www.instagram.com/therootedrunclub"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <span>•</span>
        <a
          href="https://www.strava.com/clubs/1937562"
          target="_blank"
          rel="noreferrer"
        >
          Strava
        </a>
      </div>
    </section>
  )
}
