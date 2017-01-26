const { Link } = ReactRouter;

export default class PluginBlock extends React.Component {
  makeBody() {
    let body =
`testing
# TEST

- list
- list
- list

~~~
 code
~~~
`;
    return marked(body);
  }
  render() {
    const body = this.makeBody();
    return (
      <div className='block'>
        <div className='header'>
          header
        </div>
        <div className='help' dangerouslySetInnerHTML={{ __html: body}}>
        </div>
      </div>
    )
  }
}
