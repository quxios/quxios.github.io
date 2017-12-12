import React from 'react'
import Tag from './tag'

export default class SidebarTags extends React.PureComponent {
  render() {
    const {
      selectedTag, tags, setTag
    } = this.props;
    if (!tags) return null;
    return (
      <div className="block">
        {
          tags.map((tag, i) => {
            return (
              <Tag
                key={`tag${i}`}
                tag={tag}
                selected={tag.name === selectedTag}
                onClick={setTag}
              />
            )
          })
        }
      </div>
    )
  }
}
