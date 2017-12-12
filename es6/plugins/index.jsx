import Axios from 'axios'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PluginManager from './../pluginManager'

import Content from './content'
import Sidebar from './sidebar'
import Footer from './../components/footer'

export default class PluginsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plugins: [],
      pluginHelp: null,
      pluginSections: [],
      selectedTag: '',
      tags: []
    }
  }
  componentWillMount() {
    PluginManager.load('plugins', this.setPlugins);
    PluginManager.load('tags', this.setTags);
    if (this.props.match.params.pluginName) {
      this.loadFullPlugin(this.props.match.params.pluginName);
    }
  }
  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.section;
    const plugin = nextProps.match.params.pluginName;
    if (plugin !== this.props.match.params.pluginName) {
      this.loadFullPlugin(plugin);
      window.scrollTo(0, 0);
    }
    if (!plugin) {
      this.setState({
        pluginHelp: null,
        pluginSections: null
      })
    }
    if (this.props.match.params.section !== id) {
      this.scrollTo(id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.section) {
      this.scrollTo(this.props.match.params.section);
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
  loadFullPlugin = (plugin) => {
    if (!plugin) return;
    this.setState({
      pluginHelp: null,
      pluginSections: null
    }, () => {
      Axios.get(`/data/help/${plugin}.md`)
        .then((res) => {
          let regex = /^ *(#+.*)/gm;
          let match = regex.exec(res.data);
          let sections = [];
          while (match) {
            sections.push(match[1]);
            match = regex.exec(res.data);
          }
          this.setState({
            pluginHelp: res.data,
            pluginSections: sections
          });
        })
        .catch((err) => {
          window.location = "#/plugins";
        })
    })
  }
  setPlugins = (plugins) => {
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
  setTags = (newTags) => {
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
  setTag = (tag) => {
    if (this.state.selectedTag === tag) {
      tag = '';
    }
    this.setState({ selectedTag: tag });
  }
  render() {
    const title = 'RPG Maker MV Plugins';
    const pluginName = this.props.match.params.pluginName;
    const plugin = pluginName ? this.getPlugin(pluginName) : null;
    return (
      <div>
        <div className="qBg" />
        <div className="pagePlugin">
          <div className="title">
            {pluginName || title}
          </div>
          <Content
            plugins={this.state.plugins}
            plugin={plugin}
            pluginHelp={this.state.pluginHelp}
            selectedTag={this.state.selectedTag}
            setTag={this.setTag}
          />
          <Sidebar
            pluginName={pluginName}
            sections={this.state.pluginSections}
            tags={this.state.tags}
            selectedTag={this.state.selectedTag}
            setTag={this.setTag}
          />
          <Footer />
        </div>
      </div>
    )
  }
}
