import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Header extends React.PureComponent {
  componentWillMount() {
    const {
      page, title
    } = this.props;
    document.title = title ? `${title} | Quxios` : 'Quxios';
  }
  componentWillReceiveProps(nextProps) {
    const {
      page, title
    } = nextProps;
    document.title = title ? `${title} | Quxios` : 'Quxios';
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
