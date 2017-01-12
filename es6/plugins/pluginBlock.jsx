const { Link } = ReactRouter;

export default class PluginBlock extends React.Component {
  makeRequires() {
    let {
      requires,
      download
    } = this.props.plugin || {};
    if (requires) {
      requires = requires.trim();
      return (
        <span className='sub'>
          | Requires: <Link to={`/plugins/${requires}`}>
            {requires}
          </Link> | <a href={download}>
            Download
          </a>
        </span>
      )
    } else {
      return (
        <span className='sub'>
          | <a href={download}>
            Download
          </a>
        </span>
      )
    }
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
    const requires = this.makeRequires();
    const body = this.makeBody();
    const tags = this.makeTags();
    return (
      <div className='block'>
        <div className='header'>
          <Link to={`/plugins/${name}`}>
            {name}
          </Link> | <span className='sub'>
            Version: {version} {this.makeRequires()}
          </span>

        </div>
        <div className='help' dangerouslySetInnerHTML={{ __html: body}}>
        </div>
        <div className='footer'>
          Tags: {tags}
        </div>
      </div>
    )
  }
}
