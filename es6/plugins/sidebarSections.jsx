import React from 'react'
import { Link } from 'react-router-dom'

export default class SidebarSections extends React.PureComponent {
  render() {
    let {
      pluginName, sections
    } = this.props;
    sections = sections || [];
    return (
      <div className="block sections">
        <Link to="/plugins">&lt; Back to Plugins</Link>
        <h2>Sections</h2>
        <div className="list">
          {
            sections.map((section, i) => {
              let h2 = /^###/.test(section);
              section = section.replace(/^#+/, '');
              let s1 = section.toLowerCase().trim();
              s1 = s1.replace(/[^a-z0-9]+/g, '-');
              const s2 = section.replace(/(#|\*)/g, '').trim();
              const cls = h2 ? 'sub' : 'main';
              return (
                <Link key={`section${i}`} to={`/plugins/${pluginName}/${s1}`} className={cls}>
                  {s2}
                </Link>
              );
            })
          }
        </div>
      </div>
    )
  }
}
