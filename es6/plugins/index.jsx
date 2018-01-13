import Axios from 'axios'
import React from 'react'

import Utils from './../ultis'

import BasePage from './../components/basePage'
import Content from './../components/content'
import PluginBlock from './pluginBlock'
import Sidebar from './sidebar'

const OFFSET_FROM_TOP = 30;
const PLUGINS_PATH = '/data/plugins.json';
const TAGS_PATH = '/data/tags.json';

export default class PluginsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      plugins: {},
      selectedTag: '',
      tags: []
    }
  }
  componentWillMount() {
    Axios.get(PLUGINS_PATH)
      .then((res) => {
        this.setState({
          plugins: res.data
        })
      })
    Axios.get(TAGS_PATH)
      .then((res) => {
        this.makeTags(res.data);
      })
    if (this.props.match.params.pluginName) {
      this.setCurrent(this.props.match.params.pluginName);
    }
  }
  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.section;
    const plugin = nextProps.match.params.pluginName;
    if (plugin !== this.props.match.params.pluginName) {
      window.scrollTo(0, 0);
      this.setCurrent(plugin);
    }
    if (this.props.match.params.section !== id) {
      Utils.scrollTo(id, OFFSET_FROM_TOP);
    }
  }
  makeTags = (newTags) => {
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
  setCurrent(pluginName) {
    if (!pluginName) {
      return this.setState({
        current: null
      })
    }
    Axios.get(`/data/help/${pluginName}.md`)
      .then((res) => {
        let sections = Utils.getSections(res.data);
        this.setState({
          current: {
            ...this.state.plugins[pluginName],
            help: res.data,
            sections
          }
        })
        if (this.props.match.params.section) {
          window.setTimeout(() => {
            Utils.scrollTo(this.props.match.params.section, OFFSET_FROM_TOP)
          }, 1);
        }
      })
      .catch((err) => {
        window.location = '/plugins'
      })
  }
  setTag = (tag) => {
    if (this.state.selectedTag === tag) {
      tag = '';
    }
    this.setState({ selectedTag: tag });
  }
  render() {
    const {
      current, plugins,
      selectedTag, tags
    } = this.state;
    const title = current ? current.name : 'RPG Maker MV Plugins';
    return (
      <BasePage page="Plugin" title={title} >
        <div className="title">
          {title}
        </div>
        <Content
          selectedItem={current}
          items={plugins}
          selectedTag={selectedTag}
          setTag={this.setTag}
          urlBase="plugins"
          Component={PluginBlock}
        />
        <Sidebar
          selectedPlugin={current}
          tags={tags}
          selectedTag={selectedTag}
          setTag={this.setTag}
        />
      </BasePage>
    )
  }
}
