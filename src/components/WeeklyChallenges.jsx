export default function WeeklyChallenges() {
  return (
    <section id="challenges" className="relative pt-32 pb-24 sm:pb-32 overflow-hidden bg-bg-base reveal">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-[#6366F1] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 bg-[#6366F1]/10 px-3 py-1 rounded-full border border-[#6366F1]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></span>
            <span>Upcoming Season</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-[#FAFAFA] mb-8">
            Weekly <span className="text-gradient">Challenges</span>
          </h1>
          <div className="glass-card p-12 mt-12">
            <p className="text-xl text-white/50 font-medium leading-relaxed">
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
