import React from 'react'

import PluginManager from './../pluginManager'

import SidebarSections from './sidebarSections'
import SidebarTags from './sidebarTags'
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
  componentWillReceiveProps(nextProps) {
    const id = nextProps.params.section;
    const plugin = nextProps.params.pluginName;
    if (plugin) {
      window.scrollTo(0, 0);
    }
    if (id) {
      this.scrollTo(id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.params.section) {
      this.scrollTo(this.props.params.section);
    }
  }
  scrollTo(id) {
    id = id.toLowerCase();
    id = id.replace(/[^a-zA-Z0-9]/g, ' ');
    id = id.replace(/\s+/g, '-');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView(true);
    }
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
    if (this.state.tag === tag) {
      tag = '';
    }
    this.setState({ tag });
  }
  render() {
    const title = 'RPG Maker MV Plugins';
    const pluginName = this.props.params.pluginName;
    const plugin = this.getPlugin(pluginName);
    return (
      <div>
        <div className='qBg' />
        <div className='page container'>
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
          {
            pluginName ? <SidebarSections
              pluginName={pluginName}
              plugin={plugin}
            /> : <SidebarTags
              tag={this.state.tag}
              tags={this.state.tags}
              setTag={::this.setTag}
            />
          }
          <Footer />
        </div>
      </div>
    )
  }
}
