import React from 'react'

import Header from './header'
import Footer from './footer'

export default class BasePage extends React.PureComponent {
  render() {
    const {
      children, page, title, desc
    } = this.props;
    const pageCls = 'page' + (page || '');
    return (
      <React.Fragment>
        <div id="qBg" />
        <Header {...{ ...page, title, desc }} />
        <div className={pageCls}>
          {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}