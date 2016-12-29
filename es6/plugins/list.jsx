import PluginBlock from './pluginBlock'

export default class PluginList extends React.Component {
  filter(plugin) {
    const tag = this.props.tag;
    if (tag === '') return true;
    const tags = plugin.tags.split(',');
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].trim() === tag) {
        return true;
      }
    }
    return false;
  }
  render() {
    const plugins = this.props.plugins || [];
    return (
      <div className='list'>
        {plugins.filter(::this.filter).map((plugin, i) => {
          return <PluginBlock key={i} plugin={plugin} setTag={this.props.setTag} />
        })}
      </div>
    )
  }
}
