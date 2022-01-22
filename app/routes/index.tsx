export default function Index() {
  const MILISEC_TO_DAYS: number = 1000 * 3600 * 24
  const targetDate: Date = new Date('2022-4-10')
  const today: Date = new Date()
  const daysLeft: number = Math.floor((targetDate.getTime() - today.getTime()) / MILISEC_TO_DAYS)

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: 'rgba(242, 242, 242, 0.6)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 600, margin: '0 auto' }}>
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", textAlign: 'center', marginBottom: 30 }}>
          <h1>{daysLeft} days left until game launch! &#127918;</h1>
          <p>Target date: {targetDate.toLocaleDateString()}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, auto)', gap: 10, justifyContent: 'center' }}>
          {[...Array(40)].map((x, i) =>
            <div style={{ backgroundColor: 'rgba(255, 99, 71, 0.5)', width: 30, height: 30, borderRadius: 5 }} key={i} />
          )}
        </div>
      </div>
    </div>
  );
}
