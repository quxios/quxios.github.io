import React from 'react'

export default class Comments extends React.PureComponent {
  componentDidMount() {
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function() {
          this.page.url = `https://quxios.github.io/${this.props.url}`;
          this.page.identifier = this.props.url;
        }
      });
      return;
    }
    window.disqus_config = function() {
      this.page.url = `https://quxios.github.io/${this.props.url}`;
      this.page.identifier = this.props.url;
    }
    var d = document, s = d.createElement('script');
    s.src = 'https://https-quxios-github-io.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }
  render() {
    return (
      <div className='block'>
        <div id="disqus_thread" />
      </div>
    )
  }
}

