import Tags from './tags'

export default class PluginsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: '',
      tags: [
        { name: 'Map', val: 4 },
        { name: 'Audio', val: 1 },
        { name: 'Movement', val: 4 },
        { name: 'Stealth', val: 3 },
        { name: 'UI', val: 8 },
        { name: 'Input', val: 2 }
      ]
    }
  }
  setTag(tag) {
    this.setState({ tag });
  }
  render() {
    const title = 'RPG Maker MV Plugins';
    const pluginName = this.props.params.pluginName;
    return (
      <div>
        <div className='qBg' />
        <div className='plugins container'>
          <div className='title'>
            { pluginName || title }
          </div>
          <div className='content'>
            { this.props.children && React.cloneElement(this.props.children, {
              tag: this.state.tag
            })}
          </div>
          <div className='sidebar'>
            <Tags tags={this.state.tags} setTag={::this.setTag}/>
          </div>
        </div>
      </div>
    )
  }
}
