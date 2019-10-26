import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
    <div className="Navigation">
        <ul>
          <p>Work</p>
          <li>Atom Rain</li>
          <li>Wildebeest Design & Development</li>
          <li>Sanguine Biosciences</li>
        </ul>
        <ul>
          <p>Home</p>
          <li>Palo Alto, CA</li>
          <li>Los Angeles, CA</li>
          <li>Monterey Park, CA</li>
        </ul>
    </div>
  )
}

export default Navigation