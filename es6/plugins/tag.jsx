import React from 'react'
import { Link } from 'react-router-dom'

export default class Tag extends React.PureComponent {
  onClick = () => {
    this.props.onClick(this.props.tag.name);
  }
  render() {
    const { name, val } = this.props.tag;
    const { selected } = this.props;
    const size = ((Math.floor((val - 1) / 2) + 0.5) * 0.20) + 0.8;
    const style = {
      fontSize: `${size}em`
    }
    const clsName = 'tag' + (selected ? ' selected' : '');
    return (
      <span
        to='/plugins'
        className={clsName}
        style={style}
        onClick={this.onClick}>
        {name}
      </span>
    )
  }
}
