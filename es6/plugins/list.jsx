import PluginBlock from './pluginBlock'

export default class PluginList extends React.Component {
  render() {
    const plugins = this.props.plugins || [];
    return (
      <div className='list'>
        {plugins.map((plugin, i) => {
          return <PluginBlock key={i} plugin={plugin} setTag={this.props.setTag} />
        })}
      </div>
    )
  }
}
