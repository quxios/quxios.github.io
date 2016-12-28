const { Link } = ReactRouter;

export default class PluginBlock extends React.Component {
  onTag(tag) {
    this.props.setTag(tag);
  }
  makeTags(tags = '') {
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
  render() {
    let { name, version, about, help, tags } = this.props.plugin || {};
    let body;
    if (this.props.max) {
      body = `${about}\n${help}`
    } else {
      body = `${about}`;
    }
    body = marked(body);
    return (
      <div className='block'>
        <div className='header'>
          <Link to={`/plugins/${name}`}>
            {name}
          </Link> | <span className='sub'>
          Version: {version}
        </span>
        </div>
        <div className='help' dangerouslySetInnerHTML={{ __html: body}}>
        </div>
        <div className='footer'>
          Tags: {this.makeTags(tags)}
        </div>
      </div>
    )
  }
}
