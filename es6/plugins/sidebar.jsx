import React from 'react'

import SidebarSections from './sidebarSections'
import SidebarTags from './sidebarTags'

const DIST_FROM_TOP = 220;

export default class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      top: 0
    }
    this.onScroll = this.onScroll;
  }
  componentWillMount() {
    window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
  onScroll = () => {
    let top = window.scrollY - DIST_FROM_TOP;
    top = Math.max(top, 0);
    this.setState({ top });
  }
  render() {
    const {
      selectedPlugin,
      selectedTag, tags, setTag
    } = this.props;
    const style = {
      top: this.state.top
    }
    return (
      <div className="sidebar" style={style}>
        {
          selectedPlugin ?
            <SidebarSections
              pluginName={selectedPlugin.name}
              sections={selectedPlugin.sections}
            /> :
            <SidebarTags
              selectedTag={selectedTag}
              tags={tags}
              setTag={setTag}
            />
        }
      </div>
    )
  }
}
