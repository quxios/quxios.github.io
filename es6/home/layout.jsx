export default class HomeLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unavailable: 0
    }
  }
  onPlugins() {

  }
  onProjects() {

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
            <img onClick={::this.onPlugins} src='/imgs/plugins.png' />
          </div>
          <div className='block projects'>
            <img src='/imgs/projects.png'
              onClick={::this.onProjects}
              onMouseEnter={::this.showUnavailable}
              onMouseLeave={::this.hideUnavailable}
            />
            <div className='unavailable' style={unavailable}
              onMouseEnter={::this.showUnavailable}
              onMouseLeave={::this.hideUnavailable} >
              Not Available
            </div>
          </div>
          <div className='block footer'>
            <a href="https://www.patreon.com/quxios">Patreon</a> |&nbsp;
            <a href="https://twitter.com/Quxios">Twitter</a> |&nbsp;
            <a href="https://www.youtube.com/c/QuxiosDev">Youtube</a> |&nbsp;
            <a href="https://github.com/quxios">Github</a>
          </div>
        </div>
      </div>
    )
  }
}
