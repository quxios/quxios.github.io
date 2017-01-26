import Sidebar from './sidebar'
import Page from './page'
import Footer from './../components/footer'

export default class DocsPage extends React.Component {
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
        <div className='page container docs'>
          <div className='title'>
            Documentation Page
          </div>
          <Sidebar />
          <div className='content'>
            <Page />
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
