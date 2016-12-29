import Tags from './tags'

const _distFromTop = 160;

export default class Sidebar extends React.Component {
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
        <Tags tags={this.props.tags} setTag={this.props.setTag}/>
      </div>
    )
  }
}
