const { Link } = ReactRouter;

export default class PluginBlock extends React.Component {
  render() {
    const body = marked(this.props.body);
    return (
      <div className='block' dangerouslySetInnerHTML={{ __html: body}} />
    )
  }
}
