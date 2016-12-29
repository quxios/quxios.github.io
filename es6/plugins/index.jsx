import PluginManager from './../pluginManager'

import Sidebar from './sidebar'
import Footer from './../components/footer'

export default class PluginsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plugins: [],
      tag: '',
      tags: []
    }
  }
  componentWillMount() {
    PluginManager.load('plugins', ::this.setPlugins);
    PluginManager.load('tags', ::this.setTags);
  }
  setPlugins(plugins) {
    this.setState({ plugins });
  }
  getPlugin(name) {
    let plugin = null;
    for (let i = 0; i < this.state.plugins.length; i++) {
      if (this.state.plugins[i].name === name) {
        plugin = this.state.plugins[i];
        break;
      }
    }
    return plugin;
  }
  setTags(newTags) {
    const names = Object.keys(newTags);
    let tags = [];
    names.forEach((name) => {
      tags.push({
        name,
        val: newTags[name]
      })
    })
    this.setState({ tags });
  }
  setTag(tag) {
    this.setState({ tag });
  }
  render() {
    const title = 'RPG Maker MV Plugins';
    const pluginName = this.props.params.pluginName;
    const plugin = this.getPlugin(pluginName);
    return (
      <div>
        <div className='qBg' />
        <div className='plugins container'>
          <div className='title'>
            { pluginName || title }
          </div>
          <div className='content'>
            { this.props.children && React.cloneElement(this.props.children, {
              tag: this.state.tag,
              setTag: ::this.setTag,
              plugins: this.state.plugins,
              plugin
            })}
          </div>
          <Sidebar tags={this.state.tags} setTag={::this.setTag} />
          <Footer />
        </div>
      </div>
    )
  }
}
