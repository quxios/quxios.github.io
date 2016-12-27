const { Link } = ReactRouter;

class PluginBlock extends React.Component {
  render() {
    const rand = Math.floor(Math.random() * 10) + 1;
    let arr = [];
    for (let i = 0; i < rand; i++) {
      arr.push(<div key={i}>testing</div>)
    }
    return (
      <div className='block'>
        <div className='header'>
          <Link to="/plugins/testPlugin">Plugin Name</Link>
        </div>
        <div className='desc'>
          {arr}
        </div>
        <div className='footer'>
          footer
        </div>
      </div>
    )
  }
}

export default class PluginList extends React.Component {
  render() {
    return (
      <div className='list'>
        <PluginBlock />
        <PluginBlock />
        <PluginBlock />
        <PluginBlock />
      </div>
    )
  }
}
