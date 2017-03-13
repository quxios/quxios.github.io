import React from 'react'
import { Link } from 'react-router'

const _distFromTop = 150;

export default class SidebarSections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0
    }
    this.onScroll = ::this.onScroll;
  }
  componentWillMount() {
    window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
  onScroll() {
    let top = 0;
    if (window.scrollY > _distFromTop) {
      top = window.scrollY - _distFromTop;
    }
    this.setState({ top });
  }
  render() {
    if (!this.props.plugin) return null;
    const style = {
      marginTop: this.state.top
    }
    const style2 = {
      display: 'block'
    }
    const plugin = this.props.pluginName;
    const sections = this.props.plugin.sections || [];
    return (
      <div className='sidebarSections' style={style}>
        <div className='block'>
          <Link to='/plugins'>&lt; Back to Plugins</Link>
          <h2>Sections</h2>
          {sections.map((section, i) => {
            let s1 = section.replace(/#/g, '').trim();
            s1 = s1.toLowerCase();
            s1 = s1.replace(/[^a-zA-Z0-9]/g, ' ');
            s1 = s1.replace(/\s+/g, '-');
            const s2 = section.replace(/#/g, '-').trim();
            return (
              <Link key={i} to={`/plugins/${plugin}/${s1}`} style={style2}>
                {s2}
              </Link>
            );
          })}
        </div>
      </div>
    )
  }
}
