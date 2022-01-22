export default function Index() {
  const MILISEC_TO_DAYS: number = 1000 * 3600 * 24
  const targetDate: Date = new Date('2022-4-10')
  const today: Date = new Date()
  const daysLeft: number = Math.floor((targetDate.getTime() - today.getTime()) / MILISEC_TO_DAYS)

  return (
    <div className="w-screen h-screen bg-slate-200">
      <div className="max-w-md w-10/12 m-auto">
        <div className="text-center py-14">
          <h1 className="font-sans text-2xl mb-14">{daysLeft} days left until game launch! &#127918;</h1>
          <h6 className="font-sans text-lg">A link to the game will be here on {targetDate.toLocaleDateString()}</h6>
        </div>
        <div className="grid grid-cols-7 gap-4 justify-items-center">
          {[...Array(40)].map((x, i) =>
            <div className="rounded bg-red-300 w-8 h-8 self-center" key={i} />
          )}
        </div>
      </div>
    </div>
  );
}
