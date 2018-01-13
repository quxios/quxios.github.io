import React from 'react'
import { Link } from 'react-router-dom'
import Marked from 'marked'
const VIDEO_REGEX = /https:\/\/(?:www\.youtube\.com\/watch\?v=|youtu\.be\/)(.*)/ig

export default class PluginBlock extends React.PureComponent {
  makeBody() {
    const {
      video,
      about,
      help
    } = this.props.item || {};
    let body = '';
    if (video) {
      if (VIDEO_REGEX.test(video)) {
        body += `${video}\n`;
      }
    }
    if (this.props.max) {
      body += `${help}`;
    } else {
      body += `${about}`;
    }
    body = this.transformVideos(body);
    return Marked(body);
  }
  makeSubheader() {
    let {
      requires,
      download,
      development
    } = this.props.item || {};
    let subheader = [];
    if (requires) {
      requires = requires.trim();
      subheader.push(
        <span key="1">
          Requires: <Link to={`/plugins/${requires}`}>
            {requires}
          </Link>
        </span>
      )
      subheader.push(" | ");
    }
    if (!development) {
      subheader.push(
        <span key="2">
          Download: <a href={download}>
            Github
          </a>
        </span>
      )
    } else {
      subheader.push(
        <span key="3">
          Download: Not available yet
        </span>
      )
    }
    return (
      <span className="sub">
        {subheader}
      </span>
    )
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
    } = this.props.item || {};
    let title = name;
    if (!this.props.max) {
      title = (
        <Link to={`/plugins/${name}`}>
          {name}
        </Link>
      )
    }
    return (
      <div className="block">
        <div className="blockHeader">
          <div>
            {title} | <span className="sub">
              Version: {version}
            </span>
          </div>
          {this.makeSubheader()}
        </div>
        <div className="help"
          dangerouslySetInnerHTML={{ __html: this.makeBody() }}
        />
        <div className="blockFooter">
          Tags: {this.makeTags()}
        </div>
      </div>
    )
  }
}
