import React from 'react'
import { Link } from 'react-router-dom'
import Marked from 'marked'
import Highlight from 'highlight.js'

const VIDEO_REGEX = /https:\/\/(?:www\.youtube\.com\/watch\?v=|youtu\.be\/)(.*)/ig

export default class TutorialBlock extends React.PureComponent {
  makeBody() {
    let {
      title, desc, full
    } = this.props.item || {};
    let body = '';
    if (this.props.max) {
      full = full.replace(`# ${title}`, '');
      body += `${full}`;
    } else {
      body += `${desc}`;
    }
    body = this.transformVideos(body);
    Marked.setOptions({
      highlight: function(code) {
        return Highlight.highlightAuto(code).value;
      }
    });
    return Marked(body);
  }
  makeSubHeader() {
    // TODO: return created / last modified date?
    return '';
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
  render() {
    const {
      name, title
    } = this.props.item || {};
    return (
      <div className="block">
        <div className="blockHeader">
          {
            !this.props.max && <div>
              <Link to={`/tutorials/${name}`}>
                {title}
              </Link>
            </div>
          }
          {this.makeSubHeader()}
        </div>
        <div className="help"
          dangerouslySetInnerHTML={{ __html: this.makeBody() }}
        />
      </div>
    )
  }
}
