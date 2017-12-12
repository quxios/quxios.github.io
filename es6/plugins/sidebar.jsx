import React from 'react'

import SidebarSections from './sidebarSections'
import SidebarTags from './sidebarTags'

const _distFromTop = 250;

export default class Sidebar extends React.Component {
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
    let top = window.scrollY - _distFromTop;
    top = Math.max(top, 0);
    console.log(top);
    this.setState({ top });
  }
  render() {
    const {
      pluginName, sections,
      selectedTag, tags, setTag
    } = this.props;
    const style = {
      top: this.state.top
    }
    return (
      <div className="sidebar" style={style}>
        {
          pluginName ?
            <SidebarSections
              pluginName={pluginName}
              sections={sections}
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
