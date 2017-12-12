import React from 'react'

import PluginBlock from './pluginBlock'

export default class PluginPage extends React.PureComponent {
  render() {
    const {
      plugin, setTag, pluginHelp
    } = this.props;
    return (
      <div className='list'>
        <PluginBlock
          max
          help={pluginHelp}
          plugin={plugin}
          setTag={setTag}
        />
      </div>
    )
  }
}
