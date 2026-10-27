import { FormEvent, useState } from 'react'
import { company } from '../data'
import { usePageTitle } from '../hooks'

type Status = 'idle' | 'sending' | 'sent' | 'error'
const ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORM_ID ?? 'YOUR_FORM_ID'}`

export default function Contact() {
  usePageTitle(
    'Contact & Get a Quote | Simran Engg. Industries',
    'Request a quote. Plot No 34, Dabua Pali Road, Dabua, Faridabad. Call 8130069121 or 9871048043.',
  )
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <h1>Sign Up &amp; Get A Quote</h1>
          <p>Let us know if there is anything we can do for you</p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap two">
          <div>
            <h2>Contact Form</h2>
            <p>Please fill out the form provided below and we will respond to your inquiry shortly. Thank you!</p>
            <form onSubmit={onSubmit}>
              <div className="row">
                <div className="field">
                  <label htmlFor="fn">First Name *</label>
                  <input id="fn" name="first_name" autoComplete="given-name" required />
                </div>
                <div className="field">
                  <label htmlFor="ln">Last Name *</label>
                  <input id="ln" name="last_name" autoComplete="family-name" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="em">Email *</label>
                <input id="em" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="ms">Message *</label>
                <textarea id="ms" name="message" required />
              </div>
              <input
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
              />
              <button className="btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </button>
              <p className={`status ${status === 'sent' ? 'ok' : status === 'error' ? 'err' : ''}`} role="status">
                {status === 'sent' && 'Thank you! We will respond to your inquiry shortly.'}
                {status === 'error' && 'Could not send your message. Please call us or try again.'}
              </p>
            </form>
          </div>
          <div>
            <h2>Find Us</h2>
            <h3>Location</h3>
            <address>{company.address}</address>
            <p><a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
            <h3>Contact</h3>
            <p>
              Tel: {company.phones.map((p, i) => (
                <span key={p.tel}>{i > 0 && ', '}<a href={`tel:${p.tel}`}>{p.label}</a></span>
              ))}
              <br />
              Email: <a href={`mailto:${company.emails[0]}`}>{company.emails[0]}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
