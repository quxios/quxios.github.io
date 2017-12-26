import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Header extends React.PureComponent {
  componentWillMount() {
    const {
      page, title, desc
    } = this.props;
    document.title = title ? `${title} | Quxios` : 'Quxios';
    document.querySelector('meta[name=description]').setAttribute('content', desc || '');
  }
  componentWillReceiveProps(nextProps) {
    const {
      page, title, desc
    } = nextProps;
    document.title = title ? `${title} | Quxios` : 'Quxios';
    document.querySelector('meta[name=description]').setAttribute('content', desc || '');
  }
  render() {
    return (
      <div id="header">
        <div className="container">
          <Link to="/" className="homeTab">
            <img src="/favicon.ico" />
            Quxios
          </Link>
          <NavLink to="/plugins" activeClassName="active">
            Plugins
          </NavLink>
          <NavLink to="/tutorials" activeClassName="active">
            Tutorials
          </NavLink>
        </div>
      </div>
    )
  }
}
