import React from 'react'
import { Link } from 'react-router'

export default class PluginBlock extends React.Component {
  makeSubheader() {
    let {
      requires,
      download,
      development
    } = this.props.plugin || {};
    var subheader = [];
    if (requires) {
      requires = requires.trim();
      subheader.push(<span key='1'>
        | Requires: <Link to={`/plugins/${requires}`}>
          {requires}
        </Link>
      </span>)
      subheader.push(' ');
    }
    if (!development) {
      subheader.push(<span key='2'>
        | <a href={download}>
          Download
        </a>
      </span>)
    }

    return (<span className='sub'>
      {subheader}
    </span>)
  }
  makeBody() {
    const {
      video,
      about,
      help
    } = this.props.plugin || {};
    let body = '';
    if (video) {
      var code = /\?v=(.*)/.exec(video);
      if (!code) {
        code = /youtu\.be\/(.*)/.exec(video);
      }
      if (code) {
        body += `<center><iframe width="560" height="315" src="https://www.youtube.com/embed/${code[1]}" frameborder="0" allowfullscreen></iframe></center>`
      }
    }
    if (this.props.max) {
      body += `${about}\n${help}`
    } else {
      body += `${about}`;
    }
    return marked(body);
  }
  makeTags() {
    const { tags } = this.props.plugin || {};
    if (!tags) return null;
    return tags.split(',').map((tag, i) => {
      tag = tag.trim();
      return (
        <Link
          to='/plugins'
          key={i}
          className='tag'
          onClick={this.onTag.bind(this, tag)}>
          {tag}
        </Link>
      )
    })
  }
  onTag(tag) {
    this.props.setTag(tag);
  }
  render() {
    const {
      name,
      version
    } = this.props.plugin || {};
    return (
      <div className='block'>
        <div className='header'>
          <Link to={`/plugins/${name}`}>
            {name}
          </Link> | <span className='sub'>
            Version: {version} {this.makeSubheader()}
          </span>
        </div>
        <div className='help' dangerouslySetInnerHTML={{ __html: this.makeBody()}}>
        </div>
        <div className='footer'>
          Tags: {this.makeTags()}
        </div>
      </div>
    )
  }
}
