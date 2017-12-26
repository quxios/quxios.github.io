import React from 'react'

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div id="footer">
        <div className="container">
          <a href="https://www.patreon.com/quxios">Patreon</a> |&nbsp;
          <a href="https://twitter.com/Quxios">Twitter</a> |&nbsp;
          <a href="https://www.youtube.com/c/QuxiosDev">Youtube</a> |&nbsp;
          <a href="https://github.com/quxios">Github</a>
        </div>
      </div>
    )
  }
}
