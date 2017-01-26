const { Link } = ReactRouter;

import Footer from './../components/footer'

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className='qBg' />
        <div className='home container'>
          <div className='block showcase'>
            <Link to="/plugins">
              <img src='/imgs/plugins.png' />
            </Link>
          </div>
          <div className='block showcase'>
            <Link to="/projects">
              <img src='/imgs/projects.png' />
            </Link>
          </div>
          {/*
          <div className='block showcase'>
            <Link to="/docs">
              <img src='/imgs/docs.png' />
            </Link>
          </div>
          */}
          <Footer />
        </div>
      </div>
    )
  }
}
