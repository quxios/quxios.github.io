import React from 'react'
import { Link } from 'react-router'
import Tags from './tags'

const _distFromTop = 150;

export default class SidebarTags extends React.Component {
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
    const style = {
      marginTop: this.state.top
    }
    return (
      <div className='sidebar' style={style}>
        <Tags
          tag={this.props.tag}
          tags={this.props.tags}
          setTag={this.props.setTag}
        />
      </div>
    )
  }
}
