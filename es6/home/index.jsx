import React from 'react'
import { Link } from 'react-router-dom'

import Footer from './../components/footer'

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="qBg" />
        <div className="home">
          <div className="block showcase">
            <Link to="/plugins">
              <img src="/imgs/plugins.png" />
            </Link>
          </div>
          {/*
          <div className='block showcase'>
            <Link to="/docs">
              <img src='/imgs/docs.png' />
            </Link>
          </div>
          */}
          <Footer />
        </div>
      </div>
    )
  }
}
