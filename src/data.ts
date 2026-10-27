export interface Product {
  name: string
  usedOn: string
  /** Optional photo, e.g. '/images/pump-40lpm.jpg' (put files in /public/images) */
  image?: string
}

export const products: Product[] = [
  { name: '40 LPM Coolant Pump', usedOn: 'All Lathe Machines, Milling Machines, CNC Machines, EDM, Wire cut Machines, Bandsaw Machines, Printing Machines etc.', image: '/images/COOLANT-PUMP.webp' },
  { name: 'Multi Stage Coolant Pumps', usedOn: 'All CNC machines lathes and machining centres. Most suited for through tool cooling, Deep hole drilling etc. Also suitable for Industrial washing.', image: '/images/MultiStageCooLantPumps.webp' },
  { name: 'Conventional Coolant Pumps', usedOn: 'All Lathe Machines, Milling Machines, CNC Machines, EDM, Wire cut Machines, Bandsaw Machines, Printing Machines etc.', image: '/images/CONVENTIONAL-COOLANT-PUMPS.webp' },
  { name: 'Packaging Motors', usedOn: 'Pouch Packing Machines & Biscuit Wrapping Machines', image: '/images/PACKAGING-MOTORS.webp' },
  { name: '3/4 HP Blower Motor', usedOn: 'For Big Air Curtains', image: '/images/HP-BLOWER-MOTOR.webp' },
  { name: '1/6 HP & 1/8 HP Blower Motor', usedOn: 'For Standard Sized Air Curtains', image: '/images/HP-HP-BLOWER-MOTOR.webp' },
]

export const company = {
  name: 'Simran Engg. Industries',
  address: 'Plot No 34, Dabua Pali Road, Dabua, Faridabad',
  phones: [
    { label: '8130069121', tel: '+918130069121' },
    { label: '9871048043', tel: '+919871048043' },
  ],
  emails: ['info@simranelectricals.com', 'info@simranei.com'],
  whatsapp: 'https://wa.me/918130069121',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Simran+Engg+Industries+Dabua+Pali+Road+Faridabad',
}
