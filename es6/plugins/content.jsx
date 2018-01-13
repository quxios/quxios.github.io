import React from 'react'

import PluginList from './pluginList'
import PluginPage from './pluginPage'

export default class Content extends React.PureComponent {
  render() {
    const {
      selectedPlugin, plugins,
      selectedTag, setTag
    } = this.props;
    return (
      <div className="content">
        {
          !selectedPlugin ?
            <PluginList
              selectedTag={selectedTag}
              setTag={setTag}
              plugins={plugins}
            /> :
            <PluginPage
              plugin={selectedPlugin}
              setTag={setTag}
            />
        }
      </div>
    )
  }
}
