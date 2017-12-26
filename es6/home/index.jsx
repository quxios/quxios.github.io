import React from 'react'
import { Link } from 'react-router-dom'

import BasePage from './../components/basePage'

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <BasePage page="Home">
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
      </BasePage>
    )
  }
}
