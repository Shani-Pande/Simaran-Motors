import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks'

const paragraphs = [
  'Before 2022, Simran Engg. Industries was working under the name Simran Electricals. Simran Electricals was established by Mr. Gurnam Singh Virdi in 1991 in Faridabad with the sole purpose of providing 110V Special Purpose Motors to Indian Industrial market. The expertise in the field and skillful execution led to such a profitable success of the company that it became one of the most trusted name in the industry within the 1st year of its establishment.',
  "Keeping in mind the demand of Industrial market, Simran Electricals started manufacturing Coolant Pumps for Machine Tools in 1992. The continuous technical improvement and superior quality of products helped the company gain trust in the market and reach a level that it's competitors could never reach.",
  'With successive years, Simran Electricals introduced Three Phase Electric Motors in Foot and Flange Type which could be used for various machines.',
  'Some customers built specific purpose motors for Car Lifting, Tyre Balancing and Tore Steel Threading etc are also being manufactured. A recent foray into Textile Machinery manufacturing is also yielding profitable results as it is backed by many years of experience in Indian Textile Industries.',
  'Our constant commitment towards our customers, the regular research and development for new techniques, the standard protocol of hiring skilled workers and continuous hunger to always provide superior quality products have enabled us to stand above all our competitors. To sum up, we are a name to be reckoned with.',
]

const facts = [
  { year: '1991', text: 'Established as Simran Electricals in Faridabad' },
  { year: '1992', text: 'Started manufacturing Coolant Pumps for Machine Tools' },
  { year: '2022', text: 'Now working as Simran Engg. Industries' },
]

export default function About() {
  usePageTitle(
    'About Us | Simran Engg. Industries',
    'Since 1991 in Faridabad: special purpose motors, coolant pumps and three phase motors for Indian industry.',
  )
  return (
    <>
      <div className="pagehead"><div className="wrap"><h1>About Us</h1></div></div>
      <section className="sec">
        <div className="wrap about">
          <div className="prose">
            <h2>Learn more about what we do</h2>
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <Link className="btn dark" to="/services">Learn More</Link>
          </div>
          <dl className="facts">
            {facts.map(f => (
              <div key={f.year}><dt>{f.year}</dt><dd>{f.text}</dd></div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
