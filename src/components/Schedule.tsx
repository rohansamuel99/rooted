const runs = [
  { day: 'Saturday', time: '7:00 AM', location: 'TBD', distance: '5–10 km' },
  { day: 'Wednesday', time: '6:30 PM', location: 'TBD', distance: '3–6 km' },
]

export default function Schedule() {
  return (
    <section id="schedule" style={{ padding: '4rem 2rem', maxWidth: '680px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Schedule</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {runs.map((run) => (
          <li key={run.day} style={{ padding: '1.25rem', border: '1px solid currentColor' }}>
            <strong>{run.day}</strong> · {run.time}
            <br />
            {run.distance} · {run.location}
          </li>
        ))}
      </ul>
    </section>
  )
}
