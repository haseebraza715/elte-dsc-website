export default function WeeklyChallenges() {
  return (
    <section id="challenges" className="relative py-32 overflow-hidden reveal">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-[#1F1C18] font-bold tracking-[0.2em] text-xs uppercase mb-4">
            <span className="w-8 h-px bg-[#1F1C18]"></span>
            <span>Upcoming Season</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-[#231F1A] mb-8">
            Weekly <span className="text-gradient">Challenges</span>
          </h1>
          <div className="glass-card p-12 mt-12">
            <p className="text-xl text-[#231F1A]/70 font-medium leading-relaxed">
              The agenda for the upcoming semester is being curated.
              <br className="hidden sm:block" />
              Stay tuned for a series of high-impact data science challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
