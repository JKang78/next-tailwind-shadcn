export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8">
        {/* left column - featured list */}
        <aside className="lg:col-span-1 space-y-6">
          <article>
            <div className="kicker">Top Story</div>
            <h2 className="lead-title">Families in Limbo After Supreme Court Order Interrupts Food Stamp Payments</h2>
            <p className="excerpt">The fate of SNAP is again in question after the Supreme Court temporarily agreed to allow the administration to withhold full aid under the program.</p>
          </article>

          <div className="border-t" />

          <article>
            <h3 className="font-semibold">A Timeline of the Legal Saga Surrounding SNAP Payments</h3>
            <p className="text-sm text-gray-500">Weeks of uncertainty during the longest government shutdown in American history...</p>
          </article>
        </aside>

        {/* center column - hero image */}
        <main className="lg:col-span-1">
          <div className="w-full h-72 bg-gray-200 rounded-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop" alt="hero" className="w-full h-full object-cover" />
          </div>
        </main>

        {/* right column - sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <article>
            <h3 className="font-semibold">6,907 Miles in 165 Days: How 2 Women Made History by Rowing the Pacific Ocean</h3>
            <p className="text-sm text-gray-500">For Jess Rowe and Miriam Payne, the hardest task of all during six months at sea was consuming 5,000 calories each a day.</p>
          </article>

          <div className="border-t" />

          <article>
            <h4 className="text-sm text-gray-600">More Stories</h4>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>Down to $1.18: How Families Are Coping With SNAP Cuts</li>
              <li>Worries Mount as Air Traffic Delays Stretch to Second Day</li>
            </ul>
          </article>
        </aside>
      </section>
    </div>
  )
}
