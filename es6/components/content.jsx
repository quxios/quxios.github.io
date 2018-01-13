import React from 'react'

import Comments from './comments'

export default class Content extends React.PureComponent {
  renderPage() {
    const {
      selectedItem, setTag,
      urlBase, Component
    } = this.props;
    return (
      <div className="list">
        <Component
          max
          item={selectedItem}
          setTag={setTag}
        />
        <Comments url={`${urlBase}/${selectedItem.name}`} />
      </div>
    )
  }
  renderList() {
    return (
      <div className="list">
        {this.makeList()}
      </div>
    )
  }
  makeList() {
    const {
      items, setTag,
      Component
    } = this.props;
    let list = [];
    for (const itemName in items) {
      if (this.keep(items[itemName])) {
        list.push(
          <Component
            key={`item-${itemName}`}
            item={items[itemName]}
            setTag={setTag}
          />
        )
      }
    }
    return list;
  }
  keep(item) {
    const tag = this.props.selectedTag;
    if (tag === '' || !item.tags) return true;
    for (let i = 0; i < item.tags.length; i++) {
      if (item.tags[i] === tag) {
        return true;
      }
    }
    return false;
  }
  render() {
    const {
      selectedItem, Component
    } = this.props;
    if (!Component) return null;
    return (
      <div className="content">
        {
          selectedItem ? this.renderPage() : this.renderList()
        }
      </div>
    )
  }
}
