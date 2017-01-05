const { Link } = ReactRouter;

export default class PluginTags extends React.Component {
  onClick(tag) {
    this.props.setTag(tag);
  }
  render() {
    return (
      <div className='block'>
        {this.props.tags.map((tag, i) => {
          const { name, val } = tag;
          const size = ((Math.floor((val - 1) / 2) + 0.5) * 0.20) + 0.8;
          const style = { fontSize: `${size}em` };
          let className = 'tag';
          className += this.props.tag === name ? ' selected' : '';
          return (
            <Link
              to='/plugins'
              key={i}
              className={className}
              style={style}
              onClick={this.onClick.bind(this, name)}>
              {name}
            </Link>
          )
        })}
      </div>
    )
  }
}
