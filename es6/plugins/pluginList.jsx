import React from 'react'

import PluginBlock from './pluginBlock'

export default class PluginList extends React.PureComponent {
  filter = (plugin) => {
    const tag = this.props.selectedTag;
    if (tag === '') return true;
    for (let i = 0; i < plugin.tags.length; i++) {
      if (plugin.tags[i] === tag) {
        return true;
      }
    }
    return false;
  }
  render() {
    const { plugins, setTag } = this.props;
    return (
      <div className="list">
        {
          plugins.filter(this.filter).map((plugin, i) => {
            return (
              <PluginBlock
                key={`plugin${i}`}
                plugin={plugin}
                setTag={setTag}
              />
            )
          })
        }
      </div>
    )
  }
}
