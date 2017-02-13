import DocsManager from './../docsManager'

import Sidebar from './sidebar'
import Page from './page'
import Footer from './../components/footer'

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      sections: []
    }
  }
  componentWillMount() {
    DocsManager.load(this.props.params.docName, ::this.setDocs);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.params.section) {
      this.scrollTo(this.props.params.section);
    }
  }
  componentWillReceiveProps(nextProps) {
    const id = nextProps.params.section;
    if (id) {
      this.scrollTo(id);
    }
  }
  scrollTo(id) {
    id = id.toLowerCase().replace(/\s/, '-');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView(true);
    }
  }
  setDocs(obj) {
    this.setState(obj);
  }
  render() {
    return (
      <div>
        <div className='qBg' />
        <div className='page container docs'>
          <div className='title'>
            {this.state.title}
          </div>
          <Sidebar
            doc={this.props.params.docName}
            sections={this.state.sections}
          />
          <div className='content'>
            <Page body={this.state.body}  />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
