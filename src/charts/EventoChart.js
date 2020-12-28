import React from 'react'

import Recharts from './recharts'
import defaultStyleOptions from './defaultStyleOptions.js'

const data = {...}

const options = {
  ...defaultStyleOptions,
  series: {
    _type: 'area',
    fill: 'rgba(97, 125, 233, 0.6)',
    stroke: '#617DE9',
    type: 'monotone',
    label: true
  }
}

const EventoChart = () => (
  <Recharts chart={{ options, data }} />
)

export default EventoChart