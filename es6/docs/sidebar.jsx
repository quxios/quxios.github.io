const { Link } = ReactRouter;
const _distFromTop = 150;

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
    const style2 = {
      display: 'block'
    }
    const doc = this.props.doc;
    return (
      <div className='sidebar' style={style}>
        <div className='block'>
          <h2>Sections</h2>
          {this.props.sections.map((section, i) => {
            const s1 = section.replace(/#/g, '').trim();
            const s2 = section.replace(/#/g, '-').trim();
            return (
              <Link key={i} to={`/docs/${doc}/${s1}`} style={style2}>
                {s2}
              </Link>
            );
          })}
        </div>
      </div>
    )
  }
}
