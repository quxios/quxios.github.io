const { Link } = ReactRouter;

import Footer from './../components/footer'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unavailable: 0
    }
  }
  showUnavailable() {
    this.setState({ unavailable: 1 });
  }
  hideUnavailable() {
    this.setState({ unavailable: 0 });
  }
  render() {
    var unavailable = {
      opacity: this.state.unavailable
    }
    return (
      <div>
        <div className='qBg' />
        <div className='home container'>
          <div className='block plugins'>
            <Link to="/plugins">
              <img src='/imgs/plugins.png' />
            </Link>
          </div>
          <div className='block projects'>
            {/*<Link to="/projects">*/}
              <img src='/imgs/projects.png'
                onMouseEnter={::this.showUnavailable}
                onMouseLeave={::this.hideUnavailable}
              />
            {/*</Link>*/}
            <div className='unavailable' style={unavailable}
              onMouseEnter={::this.showUnavailable}
              onMouseLeave={::this.hideUnavailable} >
              Not Available
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
