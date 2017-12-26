import React from 'react'
import { Link } from 'react-router-dom'

const VIDEO_REGEX = /https:\/\/(?:www\.youtube\.com\/watch\?v=|youtu\.be\/)(.*)/ig

export default class PluginBlock extends React.PureComponent {
  makeSubheader() {
    let {
      requires,
      download,
      development
    } = this.props.plugin || {};
    let subheader = [];
    if (requires) {
      requires = requires.trim();
      subheader.push(<span key="1">
        Requires: <Link to={`/plugins/${requires}`}>
          {requires}
        </Link>
      </span>)
      subheader.push(" | ");
    }
    if (!development) {
      subheader.push(<span key="2">
        Download: <a href={download}>
          Github
        </a>
      </span>)
    } else {
      subheader.push(<span key="3">
        Download: Not available yet
      </span>)
    }
    return (
      <span className="sub">
        {subheader}
      </span>
    )
  }
  makeBody() {
    const help = this.props.help || '';
    const {
      video,
      about
    } = this.props.plugin || {};
    let body = '';
    if (video) {
      if (VIDEO_REGEX.test(video)) {
        body += `${video}\n`;
      }
    }
    if (this.props.max) {
      body += `${help}`
    } else {
      body += `${about}`;
    }
    body = this.transformVideos(body);
    return marked(body);
  }
  transformVideos(string) {
    let newString = string;
    VIDEO_REGEX.lastIndex = 0;
    while (true) {
      let match = VIDEO_REGEX.exec(string);
      if (match) {
        let vid = `<center><iframe width="560" height="315" src="https://www.youtube.com/embed/${match[1]}" frameborder="0" allowfullscreen></iframe></center>`;
        newString = newString.replace(match[0], vid);
      } else {
        break;
      }
    }
    return newString;
  }
  makeTags() {
    const { tags } = this.props.plugin || {};
    if (!tags) return null;
    return tags.map((tag, i) => {
      return (
        <Link
          to="/plugins"
          key={`tag${i}`}
          className="tag"
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
      <div className="block">
        <div className="blockHeader">
          <Link to={`/plugins/${name}`}>
            {name}
          </Link> | <span className="sub">
            Version: {version}
          </span>
          <br />
          {this.makeSubheader()}
        </div>
        <div className="help" dangerouslySetInnerHTML={{ __html: this.makeBody() }}>
        </div>
        <div className="blockFooter">
          Tags: {this.makeTags()}
        </div>
      </div>
    )
  }
}
