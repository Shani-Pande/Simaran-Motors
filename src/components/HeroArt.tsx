/** Illustration: a coolant pump feeding a stream onto a machine-tool cut. */
export default function HeroArt() {
  return (
    <svg className="art" viewBox="0 0 520 420" role="img" aria-label="Coolant pump delivering coolant to a cutting tool on a machine">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#e2e6ea" /></linearGradient>
        <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6f7f9" /><stop offset=".45" stopColor="#c9cfd5" /><stop offset=".7" stopColor="#a9b1b8" /><stop offset="1" stopColor="#dde1e5" />
        </linearGradient>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="#dfe3e7" /></pattern>
      </defs>
      <rect width="520" height="420" fill="url(#bg)" />
      <rect width="520" height="420" fill="url(#grid)" />
      <rect y="340" width="520" height="80" fill="url(#steel)" />
      <rect y="338" width="520" height="4" fill="#c8102e" />

      {/* motor */}
      <rect x="40" y="250" width="150" height="80" rx="10" fill="url(#steel)" stroke="#8f98a0" />
      {[72, 92, 112, 132, 152, 172].map(x => <line key={x} x1={x} y1="257" x2={x} y2="323" stroke="#9fa7af" strokeWidth="3" />)}
      <rect x="40" y="250" width="22" height="80" rx="8" fill="#c8102e" />
      <text x="84" y="296" fontSize="13" fontWeight="700" letterSpacing="2" fill="#5b636b">SIMRAN</text>
      {/* pump housing */}
      <rect x="190" y="268" width="72" height="62" rx="8" fill="url(#steel)" stroke="#8f98a0" />
      <rect x="190" y="268" width="10" height="62" fill="#c8102e" />
      {/* outlet pipe */}
      <path d="M226 268V190Q226 160 256 160H330" fill="none" stroke="#9aa2aa" strokeWidth="14" strokeLinecap="round" />
      <path d="M226 268V190Q226 160 256 160H330" fill="none" stroke="#eef0f2" strokeWidth="5" strokeLinecap="round" />
      <rect x="328" y="151" width="28" height="18" rx="3" fill="#7f8891" />

      {/* workpiece, spindle, tool */}
      <rect x="360" y="300" width="150" height="38" rx="4" fill="url(#steel)" stroke="#8f98a0" />
      <rect x="462" y="190" width="36" height="80" rx="4" fill="url(#steel)" stroke="#8f98a0" />
      <polygon points="468,270 492,270 480,298" fill="#c8102e" />

      {/* coolant stream */}
      <path className="stream" d="M356 160Q440 140 458 294" fill="none" stroke="#7fb3cf" strokeWidth="5" strokeLinecap="round" />
      {[[452, 298], [440, 294], [466, 300]].map(([x, y], i) => <circle key={i} className="drop" cx={x} cy={y} r="3.5" fill="#7fb3cf" />)}
      <g stroke="#c8102e" strokeWidth="3" strokeLinecap="round"><path d="M496 292l14-8M498 300l16 0M494 284l10-12" /></g>
    </svg>
  )
}
