//import Sidebar from './sidebar'
import Footer from './../components/footer'

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: []
    }
  }
  render() {
    //const title = 'RPG Maker MV Plugins';
    //const pluginName = this.props.params.pluginName;
    //const plugin = this.getPlugin(pluginName);
    return (
      <div>
        <div className='qBg' />
        <div className='page container projects'>
          <div className='title'>
            Projects
          </div>
          <div className='block showcase'>
            <img src='/imgs/comingSoon.png' />
            {/* this.props.children && React.cloneElement(this.props.children, {
              tag: this.state.tag,
              setTag: ::this.setTag,
              plugins: this.state.plugins,
              plugin
            })*/}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
