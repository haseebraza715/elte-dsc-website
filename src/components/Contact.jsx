import site from '../content/site.json'

export default function Contact() {
  function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    if (!name || !email) {
      alert('Please provide your name and a valid email.')
      return
    }
    alert('Thanks for reaching out! We will get back to you.')
    form.reset()
  }
  return (
    <section id="contact" className="border-b border-border py-12 bg-white">
      <div className="mx-auto max-w-content px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-textmain mb-6">Contact / Join</h2>
        <form className="max-w-xl" onSubmit={onSubmit} noValidate>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="name" className="text-sm text-slate-700">Name</label>
            <input id="name" name="name" type="text" required className="border border-border bg-white text-textmain px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="email" className="text-sm text-slate-700">Email</label>
            <input id="email" name="email" type="email" required className="border border-border bg-white text-textmain px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="message" className="text-sm text-slate-700">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Tell us your interests (optional)" className="border border-border bg-white text-textmain px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div className="mt-2">
            <button type="submit" className="border border-sky-600 bg-sky-700 text-white px-4 py-2 text-sm rounded-md hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition">Submit</button>
            <a className="ml-3 text-sky-800 underline-offset-4 hover:underline text-sm" href={site.social.email}>Email us</a>
          </div>
        </form>
      </div>
    </section>
  )
}


