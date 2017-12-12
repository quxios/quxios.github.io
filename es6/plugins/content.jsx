import React from 'react'

import PluginList from './pluginList'
import PluginPage from './pluginPage'

export default class Content extends React.PureComponent {
  render() {
    const {
      plugin, plugins, pluginHelp,
      selectedTag, setTag
    } = this.props;
    return (
      <div className="content">
        {
          !plugin ?
            <PluginList
              selectedTag={selectedTag}
              setTag={setTag}
              plugins={plugins}
            /> :
            <PluginPage
              plugin={plugin}
              pluginHelp={pluginHelp}
              setTag={setTag}
            />
        }
      </div>
    )
  }
}
