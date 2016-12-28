import PluginBlock from './pluginBlock'

export default class PluginPage extends React.Component {
  render() {
    return (
      <div className='list'>
        <PluginBlock plugin={this.props.plugin} max={true} setTag={this.props.setTag} />
      </div>
    )
  }
}
