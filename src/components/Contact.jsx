export default function Contact() {
  return (
    <section id="contact" className="border-b border-border py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-content px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-textmain mb-8 text-center">Contact / Join</h2>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h3 className="text-xl md:text-2xl font-medium text-textmain mb-4">Join the Club</h3>
            <p className="text-slate-700 mb-6 text-base md:text-lg leading-relaxed">
              Ready to dive into data science? Join our community and start your journey with hands-on projects, workshops, and networking opportunities.
            </p>
            <a 
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-sky-600 bg-sky-700 text-white px-8 py-4 text-base md:text-lg rounded-md hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition font-medium"
            >
              Join Now
            </a>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-medium text-textmain mb-4">Get in Touch</h3>
            <p className="text-slate-700 mb-4 text-base md:text-lg leading-relaxed">
              Have questions or want to learn more about our activities? We'd love to hear from you!
            </p>
            <a 
              href="mailto:ot7dee@inf.elte.hu"
              className="text-sky-800 underline-offset-4 hover:underline text-base md:text-lg font-medium"
            >
              ot7dee@inf.elte.hu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


